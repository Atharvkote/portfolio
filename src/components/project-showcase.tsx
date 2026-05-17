import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import TechIcon from "./icon-provider";
import { BsCursorFill } from "react-icons/bs";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = portfolioData.projects[active];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-0">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="section-heading"
      >
        <span className="num">04.</span> Featured Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 max-w-[1200px]"
      >

        {/* LEFT */}
        <div className="relative flex flex-wrap lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l-2 border-text-muted/15 lg:min-w-[180px] shrink-0 pb-4 lg:pb-0">

          <div
            className="hidden lg:block absolute left-[-2px] w-[2px] h-[42px] bg-primary rounded-full transition-all duration-300"
            style={{ top: active * 42 }}
          />

          <div
            className="lg:hidden absolute bottom-[-2px] h-[2px] bg-primary rounded-full transition-all duration-300"
            style={{
              left: `calc(${active * 100}% + ${active * 12}px)`,
              width: `calc(100% / ${portfolioData.projects.length} - ${(portfolioData.projects.length - 1) * 12 / portfolioData.projects.length}px)`
            }}
          />

          {portfolioData.projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 lg:flex-none no-scrollbar cursor-pointer px-3 sm:px-5 py-2.5 text-center lg:text-left text-xs text-text-primary/30 sm:text-xl font-extrabold transition-all duration-200 ${active === i
                ? "bg-primary/5 text-text-primary/90"
                : "text-text-muted hover:text-primary hover:bg-primary/[0.03]"
                }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>

        {/* MIDDLE */}
        <div className="lg:pl-8 flex-1 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 sm:space-y-6"
            >

              <div className="relative w-full flex flex-col gap-10 text-center items-center cursor-pointer bg-bg  border-2 border-primary-dim/10 rounded-xl p-4 sm:p-6 lg:p-5">

                <div className="relative w-full max-w-[420px] h-[200px] group">

                  <div className="
      absolute left-1/2 -translate-x-[60%] bottom-0
      w-[85%] h-fit
      rounded-2xl overflow-hidden
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      transform -rotate-3
      transition-all duration-500 ease-out 
      group-hover:-translate-x-[70%] group-hover:-rotate-6 group-hover:scale-[1.03]
    ">
                    <img
                      src={project.imageTwo}
                      alt="Back Preview"
                      className="w-full h-full  object-cover"
                    />
                  </div>

                  {/* FRONT IMAGE */}
                  <div className="
      absolute left-1/2 -translate-x-[40%] bottom-0 
      w-[90%] h-fit
      rounded-2xl overflow-hidden
      border border-white/10
      shadow-[0_30px_80px_rgba(0,0,0,0.7)]
      transform rotate-2
      transition-all duration-500 ease-out
      group-hover:-translate-x-[30%] group-hover:rotate-4 group-hover:scale-[1.04]
    ">
                    <img
                      src={project.imageOne}
                      alt="Main Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-display flex items-start gap-2 text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                {/* <div className="absolute inset-0 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary" /> */}

              </div>

              {/* TEXT */}
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                <div className="flex-1">
                
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* HIGHLIGHTS */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 text-xs border w-full border-white/10 rounded-lg px-3 sm:px-4 py-2 sm:py-2 hover:border-primary/30 transition-colors"
                  >
                    <p className="font-mono flex items-center gap-2 text-text-secondary">
                      <BsCursorFill className="text-primary" /> {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex flex-row gap-3 pt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-mono text-xs sm:text-sm flex-1"
                >
                  <FaGithub className="w-4 h-4" /> Code
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-mono text-xs sm:text-sm flex-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT */}
        <div className="relative mt-4 lg:mt-0 lg:border-l-2 border-text-muted/15 lg:pl-8 lg:min-w-[150px] border-t lg:border-t-0 pt-4 lg:pt-0">
          <div className="lg:pl-6">
            <h4 className="font-mono text-xs text-primary uppercase tracking-widest mb-4 sm:mb-6 font-bold">
              Tech Stack
            </h4>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:space-y-3"
              >
                {project.tech.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">▹</span>
                    <span className="font-mono flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                      <TechIcon name={tech} size={16} /> {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </motion.div>
    </section>
  );
}