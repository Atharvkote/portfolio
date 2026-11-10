import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Link } from "react-router-dom";

export function Experience() {
  const [active, setActive] = useState(0);
  const exp = portfolioData.experience[active];

  return (
    <section id="experience" className="py-24 md:py-32">
      {/* ── Section Title & Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          04. CAREER & EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Where I've <span className="badone-font italic font-normal text-primary">Worked</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Production software engineering, team collaboration, and real-world system deployments.
        </p>
      </motion.div>

      {/* Main Layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="flex flex-col md:flex-row gap-10 max-w-[1000px]"
      >
        {/* LEFT: Tabs */}
        <div className="relative flex flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-text-muted/15 md:min-w-[180px] shrink-0">
          {/* Indicator */}
          <div
            className="hidden md:block absolute left-[-2px] w-[2px] h-[42px] bg-primary rounded-full transition-all duration-300"
            style={{ top: active * 42 }}
          />
          <div
            className="md:hidden absolute bottom-[-2px] h-[2px] bg-primary rounded-full transition-all duration-300"
            style={{ left: active * 140, width: 140 }}
          />

          {portfolioData.experience.map((e, i) => (
            <button
              key={e.company}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-left font-mono text-[13px] min-w-[140px] md:min-w-0 transition-all duration-200 whitespace-nowrap ${
                active === i
                  ? "text-primary bg-primary/5"
                  : "text-text-muted hover:text-primary hover:bg-primary/[0.03]"
              }`}
            >
              {e.company}
            </button>
          ))}
        </div>

        {/* MIDDLE: Content */}
        <div className="md:pl-8 flex-1 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-display text-xl font-semibold text-text-primary mb-1">
                {exp.role}{" "}
                <span className="text-primary">@ {exp.company}</span>
              </h3>

              <p className="font-mono text-xs text-text-muted mb-6">
                {exp.period}
              </p>

              <ul className="space-y-4">
                {exp.description.map((d, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-text-secondary text-[15px] leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 shrink-0 text-xs">
                      ▹
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <Link to={exp.link} target="_blank" rel="noopener noreferrer" >
        <AnimatePresence mode="wait">
          <motion.div
            key={exp.image}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-fit group mx-auto md:mx-0 w-[200px] md:w-full max-w-[200px]">
              <div className="relative z-10 rounded-lg overflow-hidden aspect-square border-2 border-primary/15 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />

                {/* IMAGE (dynamic) */}
                <img
                  src={exp.image}
                  alt={exp.company}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary" />
            </div>
          </motion.div>
        </AnimatePresence>
        </Link>
      </motion.div>
    </section>
  );
}