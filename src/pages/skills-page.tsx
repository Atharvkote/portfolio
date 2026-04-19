import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolio";

const data = portfolioData.skillsDetailed;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function SkillsPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* Fixed Back Nav */}
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
            <a href="#overview" className="hover:text-primary transition-colors">Overview</a>
            <a href="#proficiency" className="hover:text-primary transition-colors">Proficiency</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-6 pt-32 pb-20">
        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-primary text-sm mb-3">SKILLS</p>
          <h1 className="font-display text-[clamp(36px,6vw,56px)] font-extrabold tracking-tight mb-4">
            Skills & Tools
          </h1>
          <p className="text-text-secondary text-lg max-w-[600px]">
            A glance at my technical expertise across different areas of software development.
          </p>
        </motion.div>

        {/* ── Quote Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          id="overview"
          className="glass-card p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute top-6 left-8 text-6xl text-primary/20 font-display font-black leading-none">"</div>
          <p className="relative z-10 font-display text-[clamp(22px,4vw,36px)] font-bold leading-[1.3] tracking-tight italic">
            <span className="text-text-primary">Development: Turning </span>
            <span className="text-primary">Coffee </span>
            <span className="text-text-primary">into </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Code </span>
            <span className="text-text-primary">then </span>
            <span className="text-text-bright font-extrabold not-italic">Magic.</span>
          </p>
        </motion.div>

        {/* ── Architecture Columns ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {data.columns.map((col, colIdx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + colIdx * 0.15, duration: 0.6 }}
              className="glass-card p-6 md:p-8 !transform-none hover:!translate-y-0"
            >
              {/* Column Header */}
              <p className="font-mono text-xs text-text-muted tracking-[0.2em] uppercase mb-4">
                {col.title}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 leading-tight">
                {col.headline}
              </h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                {col.description}
              </p>

              {/* Numbered Items */}
              <div className="space-y-6">
                {col.items.map((item) => (
                  <div key={item.num} className="flex gap-5 group">
                    <div className="shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center font-display font-bold text-sm text-primary group-hover:bg-primary/10 transition-colors">
                      {item.num}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Proficiency Bars ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="proficiency"
        >
          <h2 className="section-heading mb-12">
            <span className="num">✦</span> Proficiency
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {data.categories.map((cat, catIdx) => (
              <motion.div
                key={cat.name}
                custom={catIdx}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-5"
              >
                <h3 className="font-display text-lg font-semibold text-text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cat.name}
                </h3>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-1.5">
                        <span className="font-mono text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-text-muted">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
