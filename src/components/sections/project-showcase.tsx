import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { RxComponent1 } from "react-icons/rx";
import { BiLinkExternal } from "react-icons/bi";

import { FaGithub } from "react-icons/fa";
import TechIcon from "../ui/icon-provider";
import { trackEvent } from "../../lib/analytics";
import { portfolioData } from "../../data/portfolio";
import Folder, { type FolderEntry } from "../ui/folder";

const PROJECTS = portfolioData.projects;

export function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentProject = PROJECTS[activeIdx];
  const navigate = useNavigate();

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    trackEvent("project_tab_select", { project: PROJECTS[idx].name });
  };

  const handleFolderItemClick = (_item: FolderEntry, index: number) => {
    if (index === 0) {
      trackEvent("project_view_details_click", { project: currentProject.name });
      navigate(`/project/${currentProject.slug}`);
    } else if (index === 1) {
      trackEvent("project_visit_click", {
        project: currentProject.name,
        url: currentProject.liveUrl,
      });
      if (currentProject.liveUrl && currentProject.liveUrl !== "#") {
        window.open(currentProject.liveUrl, "_blank", "noopener,noreferrer");
      } else {
        navigate(`/project/${currentProject.slug}`);
      }
    } else if (index === 2) {
      trackEvent("project_source_doc_click", {
        project: currentProject.name,
        url: currentProject.githubUrl,
      });
      if (currentProject.githubUrl) {
        window.open(currentProject.githubUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  const folderEntries: FolderEntry[] = [
    {
      title: "View Details",
      content: (
        <div className="absolute inset-[3px] rounded-[5px] bg-gradient-to-b from-[#0e1622] via-[#0a111a] to-[#070b10] border border-primary/40 p-3 flex flex-col justify-between group/card cursor-pointer shadow-md select-none transition-all duration-300 hover:border-primary">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold tracking-wider uppercase text-primary/80">
              Case Study
            </span>
          </div>

          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover/card:scale-110 group-hover/card:bg-primary/20 transition-all duration-300 shadow-[0_0_14px_rgba(1,216,180,0.25)]">
              <RxComponent1 size={32} />
            </div>
          </div>

          <div className="pt-1.5 border-t border-white/[0.08]">
            <div className="flex items-center justify-between text-xs font-bold text-white group-hover/card:text-primary transition-colors">
              <span>View Details</span>
              <ArrowUpRight
                size={15}
                className="text-primary transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Visit Project",
      content: (
        <div className="absolute inset-[3px] rounded-[5px] bg-gradient-to-b from-[#0e1622] via-[#0a111a] to-[#070b10] border border-primary/40 p-3 flex flex-col justify-between group/card cursor-pointer shadow-md select-none transition-all duration-300 hover:border-primary">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold tracking-wider uppercase text-primary/80">
              Production
            </span>
          </div>

          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover/card:scale-110 group-hover/card:bg-primary/20 transition-all duration-300 shadow-[0_0_14px_rgba(1,216,180,0.25)]">
              <BiLinkExternal size={32} />
            </div>
          </div>

          <div className="pt-1.5 border-t border-white/[0.08]">
            <div className="flex items-center justify-between text-xs font-bold text-white group-hover/card:text-primary transition-colors">
              <span>Visit Project</span>
              <ExternalLink
                size={15}
                className="text-primary transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Source Code",
      content: (
        <div className="absolute inset-[3px] rounded-[5px] bg-gradient-to-b from-[#0e1622] via-[#0a111a] to-[#070b10] border border-primary/40 p-3 flex flex-col justify-between group/card cursor-pointer shadow-md select-none transition-all duration-300 hover:border-primary">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold tracking-wider uppercase text-zinc-400">
              GitHub
            </span>
          </div>

          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-16 h-16 rounded-xl bg-white/[0.06] border border-white/20 flex items-center justify-center text-white group-hover/card:scale-110 group-hover/card:text-primary group-hover/card:border-primary/40 group-hover/card:bg-primary/10 transition-all duration-300 shadow-[0_0_14px_rgba(255,255,255,0.08)]">
              <FaGithub size={32} />
            </div>
          </div>

          <div className="pt-1.5 border-t border-white/[0.08]">
            <div className="flex items-center justify-between text-xs font-bold text-white group-hover/card:text-primary transition-colors">
              <span>Source Code</span>
              <FaGithub
                size={15}
                className="text-white group-hover/card:text-primary transition-all duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 relative select-none w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          05. FEATURED WORK
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Projects I've <span className="badone-font italic font-normal text-primary">Engineered</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Production systems, event-driven architectures, and AI platforms.
        </p>
      </motion.div>

      <div className="absolute top-1/3 right-0 w-[420px] h-[420px] pointer-events-none -z-10 opacity-40">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 500 60 C 360 80 220 220 180 500"
            stroke="url(#topGlow)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="topGlow" x1="500" y1="60" x2="180" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#01d8b4" stopOpacity="0" />
              <stop offset="0.5" stopColor="#01d8b4" stopOpacity="0.7" />
              <stop offset="1" stopColor="#01d8b4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr_360px] gap-7 lg:gap-8 xl:gap-9 items-center w-full">
        <div className="flex items-center gap-3 w-full">
          <div className="hidden lg:flex flex-col items-center justify-between self-stretch py-4 relative">
            <div className="absolute top-5 bottom-5 w-[1.5px] bg-white/10 z-0" />
            {PROJECTS.map((p, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div key={p.id} className="relative z-10 flex items-center justify-center my-3.5">
                  {isActive ? (
                    <motion.div
                      layoutId="activeSquare"
                      className="w-3 h-3 rounded-[2.5px] bg-primary shadow-[0_0_12px_var(--color-primary)]"
                    />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-[2px] border border-white/25 bg-[#060a0f]" />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 lg:flex lg:flex-col gap-2.5 sm:gap-3 w-full">
            {PROJECTS.map((p, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(idx)}
                  className={`relative w-full text-left rounded-2xl p-3 sm:p-3.5 transition-all duration-300 flex items-center justify-between group cursor-pointer border ${isActive
                    ? "border-primary bg-primary/[0.08] shadow-[0_0_24px_rgba(1,216,180,0.22)]"
                    : "border-white/[0.06] bg-[#0c1015]/75 hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`font-mono text-lg sm:text-xl font-black shrink-0 tracking-tight transition-all duration-200 ${isActive
                        ? "text-primary drop-shadow-[0_0_8px_rgba(1,216,180,0.5)]"
                        : "text-primary/50 group-hover:text-primary"
                        }`}
                    >
                      0{idx + 1}
                    </span>

                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm sm:text-[15px] tracking-tight leading-snug truncate">
                        {p.tabTitle}
                      </h4>
                      <p className="text-zinc-400 text-[11.5px] mt-0.5 font-normal leading-tight truncate">
                        {p.tabSubtitle}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-primary shrink-0 ml-1.5 hidden sm:block"
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full min-w-0 py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
                <span>★</span> {currentProject.badge}
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {currentProject.name}
              </h3>

              <p className="text-zinc-300 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {currentProject.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentProject.tech.map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.04] text-[11.5px] font-medium text-white/90 shadow-sm"
                  >
                    <TechIcon name={tech} size={13} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative w-full flex items-center justify-center py-6 min-h-[320px]">
          <Folder
            key={currentProject.id}
            label={currentProject.tabTitle}
            items={folderEntries}
            onItemClick={handleFolderItemClick}
            variant="solid"
            color="#01d8b4"
            paperColor="#01d8b4"
            size={1.18}
            tabPosition="right"
            layout="spread"
            defaultOpen={true}
            draggable={true}
            zoomOnClick={true}
            peek={true}
            theme="dark"
          />
        </div>
      </div>

      <div className="mt-12 pt-7 border-t border-teal-500/20 relative">
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          >
            {currentProject.pillars.map((pillar, i) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_10px_rgba(1,216,180,0.15)]">
                    <PillarIcon size={16} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs sm:text-[13.5px] tracking-tight leading-snug">
                      {pillar.title}
                    </h5>
                    <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed mt-1 font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
