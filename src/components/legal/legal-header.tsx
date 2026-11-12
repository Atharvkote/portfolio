import { Calendar, Clock, ShieldCheck, Globe } from "lucide-react";

interface LegalHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
  lastUpdated?: string;
  readingTime?: string;
  version?: string;
}

export function LegalHeader({
  eyebrow = "LEGAL / DOCUMENTATION",
  title,
  description,
  lastUpdated = "November 13, 2026",
  readingTime = "5 min read",
  version = "v2.0",
}: LegalHeaderProps) {
  return (
    <header className="mb-10 sm:mb-14">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase font-bold">
          {eyebrow}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" />
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
        {title}
      </h1>

      <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-mono text-text-dim">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-bg-card/40">
          <Calendar size={13} className="text-primary" aria-hidden="true" />
          <span>Last updated: {lastUpdated}</span>
        </span>

        {readingTime && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-bg-card/40">
            <Clock size={13} className="text-primary" aria-hidden="true" />
            <span>{readingTime}</span>
          </span>
        )}

        {version && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-bg-card/40">
            <ShieldCheck size={13} className="text-primary" aria-hidden="true" />
            <span>Official {version}</span>
          </span>
        )}

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] bg-bg-card/40">
          <Globe size={13} className="text-primary" aria-hidden="true" />
          <span>atharvakote.vercel.app</span>
        </span>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-primary/30 via-white/[0.08] to-transparent mt-8 sm:mt-10" />
    </header>
  );
}

