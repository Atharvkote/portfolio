import type { VercelRequest, VercelResponse } from "@vercel/node";

export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
  weekday: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionMonth {
  name: string;
  year?: number;
  firstDay: string;
  totalWeeks: number;
}

export interface GitHubContributionsResponse {
  totalContributions: number;
  year: string;
  weeks: ContributionWeek[];
  months: ContributionMonth[];
  isStale?: boolean;
}

interface CacheEntry {
  data: GitHubContributionsResponse;
  timestamp: number;
}

const MAX_CACHE_ENTRIES = 60;
const CACHE_TTL_MS = 60 * 60 * 1000;
const STALE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const memoryCache = new Map<string, CacheEntry>();

function setBoundedCache(key: string, data: GitHubContributionsResponse): void {
  if (memoryCache.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = memoryCache.keys().next().value;
    if (oldestKey) memoryCache.delete(oldestKey);
  }
  memoryCache.set(key, { data, timestamp: Date.now() });
}

function computeMonthMetadata(weeks: ContributionWeek[]): ContributionMonth[] {
  if (!weeks.length) return [];

  const months: ContributionMonth[] = [];
  let currentMonthKey = "";
  let currentMonthWeeks = 0;

  weeks.forEach((week) => {
    const validDay = week.contributionDays.find((d) => d && d.date);
    if (!validDay) return;

    const d = new Date(validDay.date + "T00:00:00");
    const monthKey = `${d.getFullYear()}-${d.getMonth()}`;
    const monthName = d.toLocaleString("en-US", { month: "short" });

    if (monthKey !== currentMonthKey) {
      if (months.length > 0) {
        months[months.length - 1].totalWeeks = Math.max(1, currentMonthWeeks);
      }
      currentMonthKey = monthKey;
      currentMonthWeeks = 1;
      months.push({
        name: monthName,
        year: d.getFullYear(),
        firstDay: validDay.date,
        totalWeeks: 1,
      });
    } else {
      currentMonthWeeks++;
    }
  });

  if (months.length > 0) {
    months[months.length - 1].totalWeeks = Math.max(1, currentMonthWeeks);
  }

  return months;
}

const GITHUB_USERNAME_REGEX = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const rawUrl = req.url || "";
  const fullUrl = rawUrl.startsWith("http")
    ? rawUrl
    : `http://${req.headers.host || "localhost"}${rawUrl.startsWith("/") ? "" : "/"}${rawUrl}`;
  const parsedUrl = new URL(fullUrl);
  const username = (parsedUrl.searchParams.get("username") || "Atharvkote").trim();
  const yearParam = (parsedUrl.searchParams.get("year") || "last").trim();

  if (!GITHUB_USERNAME_REGEX.test(username)) {
    return res.status(400).json({ success: false, message: "Invalid GitHub username parameter" });
  }

  const currentYear = new Date().getFullYear();
  if (
    yearParam !== "last" &&
    (!/^\d{4}$/.test(yearParam) || Number(yearParam) < 2008 || Number(yearParam) > currentYear)
  ) {
    return res.status(400).json({ success: false, message: "Invalid year parameter" });
  }

  const cacheKey = `${username.toLowerCase()}:${yearParam}`;
  const cached = memoryCache.get(cacheKey);
  const now = Date.now();

  if (cached && now - cached.timestamp < CACHE_TTL_MS) {
    res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({ success: true, data: cached.data });
  }

  try {
    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.GITHUB_PAT;
    let data: GitHubContributionsResponse | null = null;

    if (token) {
      try {
        data = await fetchFromGraphQL(username, yearParam, token);
      } catch (err) {
        console.warn("[GitHub Contributions API] GraphQL query failed:", err);
      }
    }

    if (!data) {
      try {
        data = await fetchFromGitHubHtml(username, yearParam);
      } catch (err) {
        console.warn("[GitHub Contributions API] Direct HTML parsing failed:", err);
      }
    }

    if (!data) {
      try {
        data = await fetchFromPublicAPI(username, yearParam);
      } catch (err) {
        console.warn("[GitHub Contributions API] Mirror API failed:", err);
      }
    }

    if (data) {
      setBoundedCache(cacheKey, data);
      res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
      return res.status(200).json({ success: true, data });
    }

    if (cached && now - cached.timestamp < STALE_TTL_MS) {
      res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
      return res.status(200).json({
        success: true,
        data: { ...cached.data, isStale: true },
        message: "Serving stale contribution data due to upstream unavailability.",
      });
    }

    return res.status(503).json({
      success: false,
      data: null,
      message: "GitHub contribution data temporarily unavailable. Please retry shortly.",
    });
  } catch (error) {
    console.error(`[GitHub Contributions API] Unexpected error for ${username} (${yearParam}):`, error);

    if (cached) {
      return res.status(200).json({
        success: true,
        data: { ...cached.data, isStale: true },
        message: "Serving stale contribution data following error.",
      });
    }

    return res.status(500).json({
      success: false,
      data: null,
      message: "An internal error occurred while fetching GitHub activity.",
    });
  }
}

interface GraphQLCalendarResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              contributionCount: number;
              date: string;
              contributionLevel: ContributionDay["contributionLevel"];
              weekday: number;
            }>;
          }>;
          months: Array<{
            name: string;
            year: number;
            firstDay: string;
            totalWeeks: number;
          }>;
        };
      };
    };
  };
}

async function fetchFromGraphQL(
  username: string,
  year: string,
  token: string
): Promise<GitHubContributionsResponse | null> {
  let fromDate: string | undefined;
  let toDate: string | undefined;

  if (year !== "last" && !isNaN(Number(year))) {
    const y = parseInt(year, 10);
    fromDate = `${y}-01-01T00:00:00Z`;
    toDate = `${y}-12-31T23:59:59Z`;
  }

  const query = `
    query ($username: String!, $from: DateTime, $to: DateTime) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
                weekday
              }
            }
            months {
              name
              year
              firstDay
              totalWeeks
            }
          }
        }
      }
    }
  `;

  const variables: Record<string, string | undefined> = { username };
  if (fromDate && toDate) {
    variables.from = fromDate;
    variables.to = toDate;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "Atharva-Portfolio-App",
      },
      body: JSON.stringify({ query, variables }),
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const result = (await response.json()) as GraphQLCalendarResponse;
    const calendar = result?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) return null;

    return {
      totalContributions: calendar.totalContributions,
      year,
      weeks: calendar.weeks,
      months: calendar.months,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function fetchFromGitHubHtml(
  username: string,
  year: string
): Promise<GitHubContributionsResponse | null> {
  let url = `https://github.com/users/${encodeURIComponent(username)}/contributions`;
  if (year !== "last" && !isNaN(Number(year))) {
    url += `?from=${year}-01-01&to=${year}-12-31`;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6500);

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: controller.signal,
    });

    if (!res.ok) return null;
    const html = await res.text();

    const totalMatch = html.match(/([\d,]+)\s+contributions/i);
    const parsedTotal = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 0;

    const tooltipMap = new Map<string, number>();
    const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/gi;
    let tMatch: RegExpExecArray | null;
    while ((tMatch = tooltipRegex.exec(html)) !== null) {
      const id = tMatch[1];
      const text = tMatch[2];
      const countMatch = text.match(/^(\d+)\s+contribution/i);
      const count = countMatch ? parseInt(countMatch[1], 10) : 0;
      tooltipMap.set(id, count);
    }

    const tdRegex = /<td[^>]+data-date="(\d{4}-\d{2}-\d{2})"[^>]+data-level="(\d+)"[^>]*>/gi;
    let match: RegExpExecArray | null;
    const days: ContributionDay[] = [];

    while ((match = tdRegex.exec(html)) !== null) {
      const fullTag = match[0];
      const date = match[1];
      const levelNum = parseInt(match[2], 10);

      const idMatch = fullTag.match(/id="([^"]+)"/);
      let count = idMatch && tooltipMap.has(idMatch[1]) ? tooltipMap.get(idMatch[1])! : 0;
      if (!count && levelNum > 0) {
        count = levelNum === 1 ? 1 : levelNum === 2 ? 3 : levelNum === 3 ? 6 : 10;
      }

      const dateObj = new Date(date + "T00:00:00");
      const weekday = dateObj.getDay();

      const levelEnum: ContributionDay["contributionLevel"] =
        levelNum === 4
          ? "FOURTH_QUARTILE"
          : levelNum === 3
            ? "THIRD_QUARTILE"
            : levelNum === 2
              ? "SECOND_QUARTILE"
              : levelNum === 1
                ? "FIRST_QUARTILE"
                : "NONE";

      days.push({
        date,
        contributionCount: count,
        contributionLevel: levelEnum,
        weekday,
      });
    }

    if (days.length === 0) return null;

    days.sort((a, b) => a.date.localeCompare(b.date));

    const weeks: ContributionWeek[] = [];
    let currentWeek: ContributionDay[] = [];

    days.forEach((day) => {
      currentWeek.push(day);
      if (day.weekday === 6) {
        weeks.push({ contributionDays: currentWeek });
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
    }

    const totalCalculated = days.reduce((acc, d) => acc + d.contributionCount, 0);

    return {
      totalContributions: parsedTotal || totalCalculated,
      year,
      weeks,
      months: computeMonthMetadata(weeks),
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

interface MirrorContributionDay {
  date: string;
  count: number;
  level: number;
}

interface MirrorApiResponse {
  total?: Record<string, number>;
  contributions?: MirrorContributionDay[];
}

async function fetchFromPublicAPI(
  username: string,
  year: string
): Promise<GitHubContributionsResponse | null> {
  const targetYear = year === "last" ? "last" : year;
  const url = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${targetYear}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Atharva-Portfolio-App" },
      signal: controller.signal,
    });

    if (!res.ok) return null;
    const json = (await res.json()) as MirrorApiResponse;
    if (!json || !Array.isArray(json.contributions) || json.contributions.length === 0) {
      return null;
    }

    const totalContributions =
      typeof json.total?.[targetYear] === "number"
        ? json.total[targetYear]
        : json.contributions.reduce((acc, cur) => acc + (cur.count || 0), 0);

    const sortedContributions = [...json.contributions].sort((a, b) => (a.date || "").localeCompare(b.date || ""));

    const weeks: ContributionWeek[] = [];
    let currentWeek: ContributionDay[] = [];

    sortedContributions.forEach((day) => {
      const dateObj = new Date(day.date + "T00:00:00");
      const weekday = dateObj.getDay();

      const levelEnum: ContributionDay["contributionLevel"] =
        day.level === 4
          ? "FOURTH_QUARTILE"
          : day.level === 3
            ? "THIRD_QUARTILE"
            : day.level === 2
              ? "SECOND_QUARTILE"
              : day.level === 1
                ? "FIRST_QUARTILE"
                : "NONE";

      currentWeek.push({
        date: day.date,
        contributionCount: day.count || 0,
        contributionLevel: levelEnum,
        weekday,
      });

      if (weekday === 6) {
        weeks.push({ contributionDays: currentWeek });
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
    }

    return {
      totalContributions,
      year,
      weeks,
      months: computeMonthMetadata(weeks),
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
