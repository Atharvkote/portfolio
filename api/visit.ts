import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Redis } from "@upstash/redis";
import crypto from "crypto";

const COOKIE_NAME = "portfolio_vid";
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;
const REDIS_COUNTER_KEY = "portfolio:unique_visitors";
const REDIS_VISITOR_PREFIX = "portfolio:visitor:";
const REDIS_RATELIMIT_PREFIX = "portfolio:ratelimit:visit:";
const RATE_LIMIT_MAX_REQUESTS = 15;
const RATE_LIMIT_WINDOW_SECONDS = 60;

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

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(",")[0].trim();
  }
  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string") {
    return realIp.trim();
  }
  return req.socket?.remoteAddress || "unknown";
}

function parseCookies(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) return {};
  const cookies: Record<string, string> = {};
  const items = cookieHeader.split(";");
  for (const item of items) {
    const [rawName, ...rawValParts] = item.trim().split("=");
    if (rawName) {
      try {
        cookies[rawName.trim()] = decodeURIComponent(rawValParts.join("=").trim());
      } catch {
        cookies[rawName.trim()] = rawValParts.join("=").trim();
      }
    }
  }
  return cookies;
}

function signVisitorId(visitorId: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(visitorId).digest("hex");
}

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

function isAllowedOrigin(origin: string | undefined, referer: string | undefined): { allowed: boolean; matchedOrigin: string } {
  const envOrigins = (process.env.SITE_ORIGINS || "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);

  const defaultOrigins = [
    "https://atharvakote.dev",
    "https://www.atharvakote.dev",
    "https://atharvakote.vercel.app",
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
  ];

  const allowedList = Array.from(new Set([...defaultOrigins, ...envOrigins]));

  if (origin) {
    const match = allowedList.find((allowed) => allowed === origin);
    if (match) return { allowed: true, matchedOrigin: match };
    return { allowed: false, matchedOrigin: "" };
  }

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

  if (process.env.NODE_ENV === "production") {
    return { allowed: false, matchedOrigin: "" };
  }

  return { allowed: true, matchedOrigin: allowedList[0] || "*" };
}

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
  const reqOrigin = typeof req.headers.origin === "string" ? req.headers.origin : undefined;
  const reqReferer = typeof req.headers.referer === "string" ? req.headers.referer : undefined;
  const { allowed, matchedOrigin } = isAllowedOrigin(reqOrigin, reqReferer);

  if (!allowed) {
    return res.status(403).json({ success: false, message: "Origin not allowed" });
  }

  if (matchedOrigin) {
    res.setHeader("Access-Control-Allow-Origin", matchedOrigin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("X-Content-Type-Options", "nosniff");

  const isProduction =
    process.env.NODE_ENV === "production" ||
    req.headers["x-forwarded-proto"] === "https" ||
    Boolean(reqOrigin && reqOrigin.startsWith("https://"));

  let secret = process.env.VISITOR_COOKIE_SECRET;
  if (!secret) {
    if (isProduction) {
      console.error("Critical Security Error: VISITOR_COOKIE_SECRET is missing in production. Failing closed.");
      return res.status(500).json({ success: false, message: "Server security configuration error" });
    }
    secret = "dev_transient_local_secret_only";
  }

  const redis = getRedisClient();
  if (!redis) {
    console.error("Upstash Redis credentials are not configured in environment.");
    return res.status(200).json({
      success: false,
      uniqueVisitors: null,
      message: "Visitor service unavailable",
    });
  }

  const clientIp = getClientIp(req);
  const rateLimitKey = `${REDIS_RATELIMIT_PREFIX}${clientIp}`;
  try {
    const currentHits = await redis.incr(rateLimitKey);
    if (currentHits === 1) {
      await redis.expire(rateLimitKey, RATE_LIMIT_WINDOW_SECONDS);
    }
    if (currentHits > RATE_LIMIT_MAX_REQUESTS) {
      res.setHeader("Retry-After", String(RATE_LIMIT_WINDOW_SECONDS));
      return res.status(429).json({
        success: false,
        message: "Too many visitor registration requests. Please try again later.",
      });
    }
  } catch (rateLimitErr) {
    console.warn("Rate limit check bypassed due to transient Redis error:", rateLimitErr);
  }

  const cookies = parseCookies(req.headers.cookie);
  const existingCookieValue = cookies[COOKIE_NAME];

  let visitorId: string | null = null;
  let isVerifiedCookie = false;

  if (existingCookieValue) {
    const dotIndex = existingCookieValue.indexOf(".");
    if (dotIndex > 0) {
      const extractedId = existingCookieValue.slice(0, dotIndex);
      const extractedSig = existingCookieValue.slice(dotIndex + 1);

      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidRegex.test(extractedId) && verifyVisitorSignature(extractedId, extractedSig, secret)) {
        visitorId = extractedId;
        isVerifiedCookie = true;
      }
    }
  }

  let shouldSetCookie = false;
  if (!visitorId || !isVerifiedCookie) {
    visitorId = crypto.randomUUID();
    shouldSetCookie = true;
  }

  try {
    const visitorKey = `${REDIS_VISITOR_PREFIX}${visitorId}`;
    let isNewVisitor = false;
    let totalCount = 0;

    if (isVerifiedCookie) {
      const exists = await redis.exists(visitorKey);
      if (exists) {
        const currentCountRaw = await redis.get<number>(REDIS_COUNTER_KEY);
        totalCount = currentCountRaw ? Number(currentCountRaw) : 1;
      } else {
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

    if (shouldSetCookie) {
      const signature = signVisitorId(visitorId, secret);
      const signedCookieValue = `${visitorId}.${signature}`;

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
    return res.status(200).json({
      success: false,
      uniqueVisitors: null,
      message: "Visitor counter temporarily unavailable",
    });
  }
}
