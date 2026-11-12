import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../../data/portfolio";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        <span className="num">05.</span> Some Things I've Built
      </motion.h2>

      <div className="space-y-28 md:space-y-36">
        {portfolioData.projects.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-12 items-center"
            >
              <div
                className={`col-span-12 md:col-span-7 relative group rounded-lg overflow-hidden aspect-[16/10] ${isEven ? "md:col-start-1" : "md:col-start-6"
                  } row-start-1`}
              >
                <a href={project.link} target="_blank" rel="noreferrer" className="block w-full h-full">
                  <div className="absolute inset-0 bg-primary/25 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img
                    src={project.imageOne}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.03] group-hover:scale-100"
                  />
                </a>
              </div>

              <div
                className={`col-span-12 md:col-span-7 relative z-20  flex flex-col ${isEven
                  ? "md:col-start-6 md:items-end md:text-right"
                  : "md:col-start-1 md:items-start md:text-left"
                  } mt-[-20px] md:mt-0`}
              >
                <p className="font-mono text-primary text-xs mb-2 tracking-wider">
                  Featured Project
                </p>
                <h3 className="font-display text-2xl md:text-[28px] font-bold text-text-primary mb-5 hover:text-primary transition-colors">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="glass-card p-5 md:p-6 mb-5 !rounded-lg text-text-secondary text-sm leading-relaxed !transform-none hover:!translate-y-0 w-full md:w-auto">
                  {project.description}
                </div>

                <ul
                  className={`flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-text-muted mb-5 ${isEven ? "md:justify-end" : "md:justify-start"
                    }`}
                >
                  {project.tech.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 group">
                      <span className="text-primary text-[10px] group-hover:translate-x-0.5 transition-transform">▹</span>
                      <span className="group-hover:text-text-primary transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                  <a
                    href={project.github || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors p-1"
                    aria-label="View source"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors p-1"
                    aria-label="View live"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
