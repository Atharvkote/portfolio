import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Redis } from "@upstash/redis";
import crypto from "crypto";

// ─── Constants ───
const COOKIE_NAME = "portfolio_vid";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds (31,536,000s)
const REDIS_COUNTER_KEY = "portfolio:unique_visitors";
const REDIS_VISITOR_PREFIX = "portfolio:visitor:";

// Lua script for atomic visitor registration and global counter increment
const ATOMIC_VISITOR_SCRIPT = `
local visitorKey = KEYS[1]
local counterKey = KEYS[2]
local registrationData = ARGV[1]

local isNew = redis.call('SET', visitorKey, registrationData, 'NX')
if isNew then
  local newCount = redis.call('INCR', counterKey)
  return {1, tonumber(newCount)}
else
  local currentCount = redis.call('GET', counterKey)
  return {0, tonumber(currentCount) or 0}
end
`;

// Helper: Parse cookies from header string
function parseCookies(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) return {};
  const cookies: Record<string, string> = {};
  const items = cookieHeader.split(";");
  for (const item of items) {
    const [rawName, ...rawValParts] = item.trim().split("=");
    if (rawName) {
      cookies[rawName.trim()] = decodeURIComponent(rawValParts.join("=").trim());
    }
  }
  return cookies;
}

// Helper: HMAC-SHA256 signature generator
function signVisitorId(visitorId: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(visitorId).digest("hex");
}

// Helper: Timing-safe HMAC-SHA256 verification
function verifyVisitorSignature(visitorId: string, signature: string, secret: string): boolean {
  try {
    const expectedSignature = signVisitorId(visitorId, secret);
    const expectedBuffer = Buffer.from(expectedSignature, "utf8");
    const actualBuffer = Buffer.from(signature, "utf8");

    if (expectedBuffer.length !== actualBuffer.length) {
      return false;
    }

    return crypto.timingSafeEqual(expectedBuffer, actualBuffer);
  } catch {
    return false;
  }
}

// Helper: Validate origin against allowed SITE_ORIGINS
function isAllowedOrigin(origin: string | undefined, referer: string | undefined): { allowed: boolean; matchedOrigin: string } {
  const envOrigins = (process.env.SITE_ORIGINS || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  const defaultOrigins = [
    "https://atharvakote.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
  ];

  const allowedList = envOrigins.length > 0 ? envOrigins : defaultOrigins;

  // Direct origin check
  if (origin) {
    const match = allowedList.find((allowed) => allowed === origin);
    if (match) return { allowed: true, matchedOrigin: match };
    return { allowed: false, matchedOrigin: "" };
  }

  // Fallback to referer check if origin header is omitted
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      const match = allowedList.find((allowed) => allowed === refererOrigin);
      if (match) return { allowed: true, matchedOrigin: match };
      return { allowed: false, matchedOrigin: "" };
    } catch {
      return { allowed: false, matchedOrigin: "" };
    }
  }

  // If neither origin nor referer is provided:
  // In development/test environments, allow local fallback; in production, disallow
  if (process.env.NODE_ENV === "production") {
    return { allowed: false, matchedOrigin: "" };
  }

  return { allowed: true, matchedOrigin: allowedList[0] || "*" };
}

// Initialize Upstash Redis client safely
function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  try {
    return new Redis({ url, token });
  } catch {
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Origin & Referer Validation
  const reqOrigin = typeof req.headers.origin === "string" ? req.headers.origin : undefined;
  const reqReferer = typeof req.headers.referer === "string" ? req.headers.referer : undefined;
  const { allowed, matchedOrigin } = isAllowedOrigin(reqOrigin, reqReferer);

  if (!allowed) {
    return res.status(403).json({ success: false, message: "Origin not allowed" });
  }

  // 2. CORS Headers
  if (matchedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", matchedOrigin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  // Handle preflight OPTIONS
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // 3. Strict Method Check (POST only)
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  // 4. Security & Cache Control Headers
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("X-Content-Type-Options", "nosniff");

  const secret = process.env.VISITOR_COOKIE_SECRET || "default_local_secret_portfolio_2026";
  const cookies = parseCookies(req.headers.cookie);
  const existingCookieValue = cookies[COOKIE_NAME];

  let visitorId: string | null = null;
  let isVerifiedCookie = false;

  // 5. Parse and verify existing signed cookie
  if (existingCookieValue) {
    const dotIndex = existingCookieValue.indexOf(".");
    if (dotIndex > 0) {
      const extractedId = existingCookieValue.slice(0, dotIndex);
      const extractedSig = existingCookieValue.slice(dotIndex + 1);

      // Validate visitorId shape (standard UUID format)
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidRegex.test(extractedId) && verifyVisitorSignature(extractedId, extractedSig, secret)) {
        visitorId = extractedId;
        isVerifiedCookie = true;
      }
    }
  }

  // 6. Generate new identity if missing or invalid signature
  let shouldSetCookie = false;
  if (!visitorId || !isVerifiedCookie) {
    visitorId = crypto.randomUUID();
    shouldSetCookie = true;
  }

  // 7. Connect to Upstash Redis
  const redis = getRedisClient();
  if (!redis) {
    console.error("Upstash Redis credentials are not configured in environment.");
    return res.status(200).json({
      success: false,
      uniqueVisitors: null,
      message: "Visitor service unavailable",
    });
  }

  try {
    const visitorKey = `${REDIS_VISITOR_PREFIX}${visitorId}`;
    let isNewVisitor = false;
    let totalCount = 0;

    if (isVerifiedCookie) {
      // Visitor presented a verified cookie. Check if already registered in Redis.
      const exists = await redis.exists(visitorKey);
      if (exists) {
        // Returning visitor: Fetch current lifetime count without incrementing
        const currentCountRaw = await redis.get<number>(REDIS_COUNTER_KEY);
        totalCount = currentCountRaw ? Number(currentCountRaw) : 1;
      } else {
        // Cookie signature valid but key expired/missing in Redis: register & atomic increment
        const registrationData = JSON.stringify({
          created: new Date().toISOString(),
        });
        const evalResult = await redis.eval(
          ATOMIC_VISITOR_SCRIPT,
          [visitorKey, REDIS_COUNTER_KEY],
          [registrationData]
        );
        const [isNew, count] = Array.isArray(evalResult) ? evalResult : [0, 0];
        isNewVisitor = Number(isNew) === 1;
        totalCount = Number(count) || 1;
      }
    } else {
      // New visitor: Run atomic registration & increment
      const registrationData = JSON.stringify({
        created: new Date().toISOString(),
      });
      const evalResult = await redis.eval(
        ATOMIC_VISITOR_SCRIPT,
        [visitorKey, REDIS_COUNTER_KEY],
        [registrationData]
      );
      const [isNew, count] = Array.isArray(evalResult) ? evalResult : [0, 0];
      isNewVisitor = Number(isNew) === 1;
      totalCount = Number(count) || 1;
    }

    // 8. Attach signed HTTP-only cookie if new visitor identity was generated
    if (shouldSetCookie) {
      const signature = signVisitorId(visitorId, secret);
      const signedCookieValue = `${visitorId}.${signature}`;

      const isProduction =
        process.env.NODE_ENV === "production" ||
        req.headers["x-forwarded-proto"] === "https" ||
        Boolean(reqOrigin && reqOrigin.startsWith("https://"));

      const cookieParts = [
        `${COOKIE_NAME}=${encodeURIComponent(signedCookieValue)}`,
        `Max-Age=${COOKIE_MAX_AGE}`,
        "Path=/",
        "HttpOnly",
        "SameSite=Lax",
      ];

      if (isProduction) {
        cookieParts.push("Secure");
      }

      res.setHeader("Set-Cookie", cookieParts.join("; "));
    }

    return res.status(200).json({
      success: true,
      uniqueVisitors: totalCount,
      isNew: isNewVisitor,
    });
  } catch (error) {
    console.error("Failed to update unique visitor counter:", error);
    // Never expose database internals or secret keys to the client
    return res.status(200).json({
      success: false,
      uniqueVisitors: null,
      message: "Visitor counter temporarily unavailable",
    });
  }
}

