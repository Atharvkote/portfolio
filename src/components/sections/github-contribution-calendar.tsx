import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, RefreshCw, Calendar as CalendarIcon, Flame, GitCommit, Award } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { trackEvent } from "../../lib/analytics";

export type IntensityLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE" | string;
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

export interface GitHubContributionsData {
  totalContributions: number;
  year: string;
  weeks: ContributionWeek[];
  months: ContributionMonth[];
  isStale?: boolean;
}

export interface GitHubContributionCalendarProps {
  username?: string;
  id?: string;
  className?: string;
}

const LEVEL_MAP: Record<string, IntensityLevel> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const INTENSITY_STYLES: Record<
  IntensityLevel,
  { bg: string; border: string; glow?: string; label: string }
> = {
  0: {
    bg: "bg-[#141918]",
    border: "border-white/[0.04]",
    label: "No activity",
  },
  1: {
    bg: "bg-[#003D35]",
    border: "border-[#003D35]/80",
    label: "Low activity",
  },
  2: {
    bg: "bg-[#008570]",
    border: "border-[#008570]/80",
    label: "Medium activity",
  },
  3: {
    bg: "bg-[#01d8b4]",
    border: "border-[#01d8b4]",
    glow: "shadow-[0_0_8px_rgba(1,216,180,0.35)]",
    label: "High activity",
  },
  4: {
    bg: "bg-[#00F0C0]",
    border: "border-[#00F0C0]",
    glow: "shadow-[0_0_12px_rgba(0,240,192,0.55)]",
    label: "Peak activity",
  },
};

const AVAILABLE_YEARS = [
  { value: "last", label: "Last Year" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
];

export function GitHubContributionCalendar({
  username = "Atharvkote",
  id = "github-activity",
  className = "",
}: GitHubContributionCalendarProps) {
  const [selectedYear, setSelectedYear] = useState<string>("last");
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryTrigger, setRetryTrigger] = useState<number>(0);

  const [tooltip, setTooltip] = useState<{
    day: ContributionDay;
    level: IntensityLevel;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(
    async (year: string, signal?: AbortSignal) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/github-contributions?username=${encodeURIComponent(username)}&year=${encodeURIComponent(year)}`, {
          signal,
        });

        if (res.ok) {
          const json = (await res.json()) as { success: boolean; data?: GitHubContributionsData };
          if (json.success && json.data) {
            setData(json.data);
            setLoading(false);
            return;
          }
        }

        try {
          const fallbackUrl = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${encodeURIComponent(year)}`;
          const fallbackRes = await fetch(fallbackUrl, { signal });

          if (fallbackRes.ok) {
            const json = (await fallbackRes.json()) as {
              total?: Record<string, number>;
              contributions?: Array<{ date: string; count: number; level: number }>;
            };

            if (json && Array.isArray(json.contributions) && json.contributions.length > 0) {
              const totalContributions =
                typeof json.total?.[year] === "number"
                  ? json.total[year]
                  : json.contributions.reduce((acc, cur) => acc + (cur.count || 0), 0);

              const weeks: ContributionWeek[] = [];
              let currentWeek: ContributionDay[] = [];

              const sorted = [...json.contributions].sort((a, b) => (a.date || "").localeCompare(b.date || ""));

              sorted.forEach((day) => {
                const dateObj = new Date(day.date + "T00:00:00");
                const weekday = dateObj.getDay();

                const levelKey =
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
                  contributionLevel: levelKey,
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

              setData({
                totalContributions,
                year,
                weeks,
                months: [],
              });
              setLoading(false);
              return;
            }
          }
        } catch {
          // Fallback fetch error caught; will proceed to show real unavailable error
        }

        setError("GitHub contribution data is temporarily unavailable from upstream. Please retry shortly.");
        setData(null);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        console.warn("[GitHubContributionCalendar] Network error:", err);
        setError("Network error while connecting to GitHub. Check connection and retry.");
        setData(null);
      } finally {
        setLoading(false);
      }
    },
    [username]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(selectedYear, controller.signal);
    return () => {
      controller.abort();
    };
  }, [selectedYear, fetchData, retryTrigger]);

  const normalizedWeeks = useMemo(() => {
    if (!data?.weeks) return [];

    const dayMap = new Map<string, ContributionDay>();
    data.weeks.forEach((week) => {
      week.contributionDays?.forEach((d) => {
        if (d && d.date) {
          dayMap.set(d.date, d);
        }
      });
    });

    const allDays = Array.from(dayMap.values()).sort((a, b) => a.date.localeCompare(b.date));
    if (allDays.length === 0) return [];

    const weeks: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = new Array(7).fill(null);

    allDays.forEach((day) => {
      const dateObj = new Date(day.date + "T00:00:00");
      const weekday =
        typeof day.weekday === "number" && day.weekday >= 0 && day.weekday < 7
          ? day.weekday
          : dateObj.getDay();

      if (weekday === 0 && currentWeek.some((d) => d !== null)) {
        weeks.push(currentWeek);
        currentWeek = new Array(7).fill(null);
      }

      currentWeek[weekday] = { ...day, weekday };

      if (weekday === 6) {
        weeks.push(currentWeek);
        currentWeek = new Array(7).fill(null);
      }
    });

    if (currentWeek.some((d) => d !== null)) {
      weeks.push(currentWeek);
    }

    return weeks;
  }, [data]);

  const monthLabels = useMemo(() => {
    if (!normalizedWeeks.length) return [];

    const labels: { name: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    normalizedWeeks.forEach((week, weekIndex) => {
      const validDay = week.find((d: ContributionDay | null) => d !== null);
      if (validDay) {
        const dateObj = new Date(validDay.date + "T00:00:00");
        const month = dateObj.getMonth();
        if (month !== lastMonth) {
          labels.push({
            name: dateObj.toLocaleString("en-US", { month: "short" }),
            weekIndex,
          });
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [normalizedWeeks]);

  const handleCellHover = (e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>, day: ContributionDay) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const level =
      typeof day.contributionLevel === "number"
        ? (day.contributionLevel as IntensityLevel)
        : LEVEL_MAP[day.contributionLevel] ??
          (day.contributionCount > 0 ? 2 : 0);

    setTooltip({
      day,
      level,
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 8,
    });
  };

  const handleCellLeave = () => {
    setTooltip(null);
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr + "T00:00:00");
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const profileUrl = portfolioData.socials.github || `https://github.com/${username}`;

  const stats = useMemo(() => {
    let activeDays = 0;
    let maxStreak = 0;
    let currentStreak = 0;
    let runningStreak = 0;

    const allDays: ContributionDay[] = [];
    if (data?.weeks) {
      data.weeks.forEach((w) => {
        w.contributionDays?.forEach((d) => {
          if (d && d.date) allDays.push(d);
        });
      });
      allDays.sort((a, b) => a.date.localeCompare(b.date));

      allDays.forEach((day) => {
        if (day.contributionCount > 0) {
          activeDays++;
          runningStreak++;
          if (runningStreak > maxStreak) maxStreak = runningStreak;
        } else {
          runningStreak = 0;
        }
      });

      for (let i = allDays.length - 1; i >= 0; i--) {
        if (allDays[i].contributionCount > 0) {
          currentStreak++;
        } else if (i === allDays.length - 1) {
          continue;
        } else {
          break;
        }
      }
    }

    return { activeDays, maxStreak, currentStreak };
  }, [data]);

  return (
    <section id={id} className={`py-16 sm:py-20 md:py-24 relative select-none ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8 sm:mb-10"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          06. MY CODE JOURNEY
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          GitHub <span className="badone-font italic font-normal text-primary">Activity</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md mx-auto">
          Authentic open-source activity, commit metrics, and distributed systems development.
        </p>
      </motion.div>

      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs sm:text-sm font-bold text-primary tracking-wider">
            01
          </span>
          <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
            GITHUB
          </span>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("github_profile_click", { url: profileUrl })}
          className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-[13px] text-text-muted hover:text-primary transition-colors duration-200"
        >
          <span>@{username}</span>
          <ExternalLink size={12} />
        </a>
      </div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="relative rounded-2xl border border-white/10 bg-[#000000]/80 backdrop-blur-xl p-3 sm:p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:border-primary/30 transition-colors duration-300"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 rounded-full blur-3xl"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-white/5 relative z-10">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="text-xl sm:text-2xl font-bold font-['Manrope'] text-white tracking-tight">
              {loading ? (
                <span className="inline-block w-16 h-6 bg-white/10 animate-pulse rounded" />
              ) : (
                data?.totalContributions?.toLocaleString() ?? "0"
              )}
            </span>
            <span className="text-xs sm:text-sm text-text-muted font-medium">
              contributions in {selectedYear === "last" ? "the last year" : selectedYear}
            </span>
            {data?.isStale && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Cached
              </span>
            )}
          </div>

          <div
            role="radiogroup"
            aria-label="Filter activity by year"
            className="flex items-center bg-[#141414] p-1 rounded-xl border border-white/10 w-full sm:w-auto overflow-x-auto no-scrollbar justify-between sm:justify-start"
          >
            {AVAILABLE_YEARS.map((yr) => (
              <button
                key={yr.value}
                role="radio"
                aria-checked={selectedYear === yr.value}
                onClick={() => {
                  if (selectedYear !== yr.value) {
                    setSelectedYear(yr.value);
                    trackEvent("github_year_change", { year: yr.value });
                  }
                }}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedYear === yr.value
                    ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(1,216,180,0.5)]"
                    : "text-text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {yr.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          {loading ? (
            <div className="py-6 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2.5 text-xs text-primary font-mono mb-4">
                <RefreshCw size={14} className="animate-spin" />
                <span>Synchronizing GitHub activity...</span>
              </div>
              <div className="w-full overflow-x-auto pb-2 flex justify-center opacity-40">
                <div className="w-fit mx-auto flex gap-[3px]">
                  {Array.from({ length: 52 }).map((_, col) => (
                    <div key={col} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, row) => (
                        <div
                          key={row}
                          className="w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[2.5px] bg-white/10 animate-pulse"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <CalendarIcon size={32} className="text-text-muted/40 mb-3" />
              <p className="text-sm text-text-muted mb-4 max-w-md">{error}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setRetryTrigger((prev) => prev + 1)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/40 text-primary text-xs font-mono hover:bg-primary hover:text-black transition-all duration-200 cursor-pointer"
                >
                  <RefreshCw size={13} />
                  <span>Retry Connection</span>
                </button>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  <span>View on GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ) : (
            <div className="w-full overflow-x-auto pb-3 pt-2 no-scrollbar md:scrollbar-thin md:scrollbar-thumb-white/10 md:scrollbar-track-transparent flex justify-start lg:justify-center">
              <div className="w-fit min-w-fit shrink-0 lg:mx-auto px-1 sm:px-2">
                <div className="flex items-center mb-2 pl-7 sm:pl-8 text-[11px] font-mono text-text-muted/70">
                  <div className="relative w-full h-4">
                    {monthLabels.map((m, idx) => (
                      <span
                        key={idx}
                        className="absolute tracking-tight select-none"
                        style={{
                          left: `${m.weekIndex * 15}px`,
                        }}
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex flex-col gap-[3px] text-[10px] font-mono text-text-muted/60 select-none pt-[1px] w-5 sm:w-6 shrink-0 text-right pr-1">
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]"></span>
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]">Mon</span>
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]"></span>
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]">Wed</span>
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]"></span>
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]">Fri</span>
                    <span className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]"></span>
                  </div>

                  <div className="flex gap-[3px]" role="grid" aria-label="GitHub contribution calendar grid">
                    {normalizedWeeks.map((week, weekIdx) => (
                      <div key={weekIdx} className="flex flex-col gap-[3px]" role="row">
                        {week.map((day: ContributionDay | null, dayIdx: number) => {
                          if (!day) {
                            return (
                              <div
                                key={dayIdx}
                                className="w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[2.5px] opacity-0 pointer-events-none"
                              />
                            );
                          }

                          const level =
                            typeof day.contributionLevel === "number"
                              ? (day.contributionLevel as IntensityLevel)
                              : LEVEL_MAP[day.contributionLevel] ??
                                (day.contributionCount > 0 ? 2 : 0);

                          const style = INTENSITY_STYLES[level] || INTENSITY_STYLES[0];

                          return (
                            <motion.div
                              key={day.date}
                              role="gridcell"
                              tabIndex={0}
                              whileHover={{ scale: 1.3, zIndex: 40 }}
                              transition={{ duration: 0.12 }}
                              onMouseEnter={(e) => handleCellHover(e, day)}
                              onMouseLeave={handleCellLeave}
                              onFocus={(e) => handleCellHover(e, day)}
                              onBlur={handleCellLeave}
                              aria-label={`${day.contributionCount} contributions on ${formatDate(day.date)}`}
                              className={`
                                w-[11px] h-[11px] sm:w-[12px] sm:h-[12px]
                                rounded-[2.5px] border cursor-pointer transition-colors duration-150
                                ${style.bg} ${style.border} ${style.glow ?? ""}
                                hover:border-[#00F0C0] hover:ring-1 hover:ring-[#00F0C0]/50
                                focus:outline-none focus:ring-2 focus:ring-[#00F0C0] focus:z-30
                              `}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                transition={{ duration: 0.12 }}
                className="absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-full px-3 py-2 rounded-xl bg-[#0d0d0d] border border-white/15 text-xs text-white shadow-[0_8px_24px_rgba(0,0,0,0.85)] backdrop-blur-md whitespace-nowrap"
                style={{
                  left: tooltip.x,
                  top: tooltip.y,
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${INTENSITY_STYLES[tooltip.level].bg} ${INTENSITY_STYLES[tooltip.level].glow ?? ""
                      }`}
                  />
                  <span className="font-semibold text-white">
                    {tooltip.day.contributionCount > 0
                      ? `${tooltip.day.contributionCount} contribution${tooltip.day.contributionCount > 1 ? "s" : ""
                      }`
                      : "No contributions"}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-text-muted mt-0.5">
                  {formatDate(tooltip.day.date)}
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0d0d0d]" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex lg:hidden items-center justify-center gap-1.5 text-[10px] font-mono text-text-muted/60 mt-1 pb-1">
            <span>← Swipe horizontally to explore 52 weeks →</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 mt-2 border-t border-white/5 text-xs text-text-muted">
            <span className="text-[11px] text-text-muted/70">
              Activity data synchronized directly from GitHub
            </span>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono mr-1">Less</span>
              {([0, 1, 2, 3, 4] as IntensityLevel[]).map((lvl) => {
                const s = INTENSITY_STYLES[lvl];
                return (
                  <div
                    key={lvl}
                    className={`w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[2.5px] border ${s.bg} ${s.border} ${s.glow ?? ""
                      }`}
                    title={s.label}
                  />
                );
              })}
              <span className="text-[10px] font-mono ml-1">More</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 mt-4 border-t border-white/5">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 flex items-center justify-between">
            <div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-0.5">
                Current Streak
              </div>
              <div className="text-lg sm:text-xl font-bold font-['Manrope'] text-white">
                {loading ? "--" : `${stats.currentStreak} day${stats.currentStreak === 1 ? "" : "s"}`}
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <Flame size={15} />
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 flex items-center justify-between">
            <div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-0.5">
                Longest Streak
              </div>
              <div className="text-lg sm:text-xl font-bold font-['Manrope'] text-white">
                {loading ? "--" : `${stats.maxStreak} day${stats.maxStreak === 1 ? "" : "s"}`}
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Award size={15} />
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5 flex items-center justify-between">
            <div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-0.5">
                Active Days
              </div>
              <div className="text-lg sm:text-xl font-bold font-['Manrope'] text-white">
                {loading ? "--" : `${stats.activeDays} day${stats.activeDays === 1 ? "" : "s"}`}
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <GitCommit size={15} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
