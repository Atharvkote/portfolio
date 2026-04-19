import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Calendar, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function ExperiencePage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 md:px-12 lg:px-16 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <svg width="36" height="40" viewBox="0 0 84 96" className="group-hover:drop-shadow-[0_0_12px_rgba(167,139,250,0.4)] transition-all duration-300">
              <polygon points="42 3 81 24 81 72 42 93 3 72 3 24" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <text x="42" y="58" textAnchor="middle" fill="var(--color-primary)" fontFamily="var(--font-display)" fontSize="32" fontWeight="700">A</text>
            </svg>
            <span className="font-mono text-sm text-text-muted group-hover:text-primary transition-colors">← Back</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 font-mono text-[13px] text-text-secondary">
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-6 pt-32 pb-20">
        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="font-mono text-primary text-sm mb-3">WORK</p>
          <h1 className="font-display text-[clamp(36px,6vw,56px)] font-extrabold tracking-tight mb-4">
            Experience
          </h1>
          <p className="text-text-secondary text-lg max-w-[600px] mb-4">
            A glance at my professional and academic experience.
          </p>
        </motion.div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="glass-card px-6 py-4 flex flex-wrap gap-8 mb-16 !transform-none hover:!translate-y-0"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono text-xs text-text-muted">Started in profession since</span>
            <span className="font-mono text-sm text-text-primary font-medium">2024</span>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase size={14} className="text-primary" />
            <span className="font-mono text-xs text-text-muted">Total Roles</span>
            <span className="font-mono text-sm text-text-primary font-medium">{portfolioData.experience.length}</span>
          </div>
        </motion.div>

        {/* ── Experience Section ── */}
        <section id="experience" className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            <span className="num">01.</span> Work Experience
          </motion.h2>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 md:p-8 group !transform-none hover:!translate-y-0 hover:border-primary/20"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="tag text-[10px]">{exp.type}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-medium mt-1 flex items-center gap-1.5">
                      {exp.company}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-text-muted shrink-0 bg-bg-elevated px-3 py-1.5 rounded-full">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 border-l-2 border-primary/10 pl-5">
                  {exp.description.map((d, j) => (
                    <li
                      key={j}
                      className="relative text-text-secondary text-[15px] leading-relaxed pl-2"
                    >
                      <span className="absolute -left-[25px] top-[10px] w-2 h-2 rounded-full bg-primary/40" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Education Section ── */}
        <section id="education">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            <span className="num">02.</span> Education
          </motion.h2>

          {/* Timeline */}
          <div className="relative max-w-[750px]">
            <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

            <div className="space-y-10">
              {portfolioData.education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-14 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[8px] md:left-[12px] top-1 w-[15px] h-[15px] rounded-full border-2 border-primary bg-bg group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-full bg-primary" />
                  </div>

                  <div className="glass-card p-5 md:p-6 !transform-none hover:!translate-y-0">
                    <h3 className="font-display text-lg font-semibold text-text-primary leading-snug mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-text-secondary text-sm mb-3">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-4 font-mono text-xs text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {edu.period}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-text-muted/40" />
                      <span className="text-primary font-medium">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
