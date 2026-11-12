import React from "react";

interface LegalSectionProps {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function LegalSection({
  id,
  number,
  title,
  children,
  className = "",
}: LegalSectionProps) {
  return (
    <section
      id={id}
      data-legal-section
      className={`scroll-mt-28 py-8 first:pt-0 border-b border-white/[0.06] last:border-b-0 ${className}`}
    >
      <div className="flex items-baseline gap-3 mb-4 group">
        <span className="font-mono text-xs sm:text-sm font-bold text-primary tracking-wider shrink-0 select-none">
          {number}
        </span>
        <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-primary-light transition-colors duration-200">
          {title}
        </h2>
      </div>
      <div className="text-text-secondary text-[14.5px] sm:text-[15.5px] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

