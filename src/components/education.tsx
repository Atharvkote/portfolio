import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export function Education() {
  return (
    <section className="py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-heading mb-12"
      >
        <span className="num">03.</span> Education
      </motion.h2>

      {/* Horizontal Timeline Container */}
      <div className="relative w-full pt-24 md:pt-20">
        {/* Main timeline line */}
        <div className="absolute top-12 md:top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20 rounded-full" />

        {/* Education items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Timeline dot and connector */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                {/* Vertical line from timeline to dot */}
                <div className="w-0.5 h-7 bg-primary/50" />
                {/* Dot on timeline */}
                <div className="w-3 h-3 rounded-full bg-primary border-2 border-bg ring-2 ring-primary/30 shadow-lg shadow-primary/40" />
              </div>

              {/* Card content */}
              <div className=" p-5 md:p-6 h-full rounded-xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-all duration-300 ">
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap size={20} className="text-primary mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm md:text-base text-text-primary leading-snug">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <p className="text-text-secondary text-sm font-medium mb-4 pb-4 border-b border-primary/10">
                  {edu.school}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">Period</span>
                    <span className="text-xs font-mono text-text-primary">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">Result</span>
                    <span className="text-xs font-mono text-primary font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
