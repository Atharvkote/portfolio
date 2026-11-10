import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  ShieldCheck,
  Building2,
  Sparkles,
  School,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Education() {
  const [btech, hsc, ssc] = portfolioData.education;

  return (
    <section id="education" className="py-20 md:py-28 relative">
      {/* ── Section Title & Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          07. ACADEMIC FOUNDATION
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Academic <span className="badone-font italic font-normal text-primary">Journey</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Computer engineering fundamentals, academic achievements, and continuous technical growth.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch max-w-[1100px] mx-auto pr-3 pb-4">
        {/* LEFT COLUMN: Featured Engineering Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 relative group h-full flex flex-col"
        >
          {/* Front Content Card */}
          <div className="relative z-10 h-full rounded-xl bg-bg-card border-1 border-primary/20 p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-primary tracking-wider uppercase">
                    01 // Undergrad Degree
                  </span>
                  <span className="text-white/20">•</span>
                  <GraduationCap size={18} className="text-primary" />
                </div>


              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight mb-3">
                {btech.degree}
              </h3>

              {/* Specialization Badge */}
              {btech.specialization && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/25 text-primary font-mono text-xs sm:text-sm font-semibold mb-6">
                  <ShieldCheck size={16} className="text-primary shrink-0" />
                  <span>{btech.specialization}</span>
                </div>
              )}

              {/* College & University */}
              <div className="space-y-1.5 mb-6 text-sm sm:text-base">
                <div className="flex items-start gap-2.5 text-text-primary font-medium">
                  <Building2 size={17} className="text-primary mt-0.5 shrink-0" />
                  <span>{btech.school}</span>
                </div>
                {btech.university && (
                  <p className="text-text-muted text-xs sm:text-sm pl-7 font-mono">
                    Affiliation: {btech.university}
                  </p>
                )}
              </div>

              {/* Key Coursework / Specializations */}
              {btech.highlights && (
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <p className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={13} className="text-primary" /> Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {btech.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-text-secondary group-hover:border-primary/20 transition-colors"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Stats Footer */}
            <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/10 mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-text-muted uppercase tracking-wider">
                    Period
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-text-primary">
                    {btech.period}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Award size={18} />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-text-muted uppercase tracking-wider">
                    Result
                  </span>
                  <span className="font-mono text-xs sm:text-base font-bold text-primary">
                    {btech.score}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Signature Offset Border Effect */}
          <div className="absolute inset-0 border-1 border-primary/30 rounded-xl translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary" />
        </motion.div>

        {/* RIGHT COLUMN: HSC & SSC Stack */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-8 h-full justify-between">
          {/* TOP RIGHT: HSC */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 relative group flex flex-col"
          >
            {/* Front Card */}
            <div className="relative z-10 h-full rounded-xl bg-bg-card border-1 border-primary/20 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-primary/70 tracking-wider uppercase">
                    02 // Higher Secondary
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-text-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5">
                    <CheckCircle2 size={11} className="text-primary/70" /> Completed
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-1">
                  {hsc.degree}
                </h3>
                {hsc.stream && (
                  <span className="inline-block text-xs font-mono text-primary/80 mb-3">
                    Stream: {hsc.stream}
                  </span>
                )}

                {/* College & Board */}
                <div className="space-y-1 text-xs sm:text-sm text-text-secondary mb-4">
                  <div className="flex items-start gap-2 text-text-primary font-medium">
                    <School size={15} className="text-primary/70 mt-0.5 shrink-0" />
                    <span>{hsc.school}</span>
                  </div>
                  {hsc.board && (
                    <p className="text-[11px] font-mono text-text-muted pl-6 leading-relaxed">
                      {hsc.board}
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs mt-auto">
                <span className="text-text-muted flex items-center gap-1.5">
                  <Calendar size={13} className="text-primary/60" /> {hsc.period}
                </span>
                <span className="text-primary font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                  Score: {hsc.score}
                </span>
              </div>
            </div>

            {/* Signature Offset Border Effect */}
            <div className="absolute inset-0 border-1 border-primary/30 rounded-xl translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary" />
          </motion.div>

          {/* BOTTOM RIGHT: SSC */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex-1 relative group flex flex-col"
          >
            {/* Front Card */}
            <div className="relative z-10 h-full rounded-xl bg-bg-card border-1 border-primary/20 p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-semibold text-primary/70 tracking-wider uppercase">
                    03 // Secondary School
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-text-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5">
                    <CheckCircle2 size={11} className="text-primary/70" /> Completed
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                  {ssc.degree}
                </h3>

                {/* School & Board */}
                <div className="space-y-1 text-xs sm:text-sm text-text-secondary mb-4">
                  <div className="flex items-start gap-2 text-text-primary font-medium">
                    <School size={15} className="text-primary/70 mt-0.5 shrink-0" />
                    <span>{ssc.school}</span>
                  </div>
                  {ssc.board && (
                    <p className="text-[11px] font-mono text-text-muted pl-6 leading-relaxed">
                      {ssc.board}
                    </p>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs mt-auto">
                <span className="text-text-muted flex items-center gap-1.5">
                  <Calendar size={13} className="text-primary/60" /> {ssc.period}
                </span>
                <span className="text-primary font-semibold px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                  Score: {ssc.score}
                </span>
              </div>
            </div>

            {/* Signature Offset Border Effect */}
            <div className="absolute inset-0 border-1 border-primary/30 rounded-xl translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
