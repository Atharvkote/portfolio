import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { QuickAccess } from "../components/quick-access";
import { Footer } from "../components/contact";
import TechIcon from "../components/icon-provider";
import {
  ChevronRight, Search,
} from "lucide-react";
import { skillSections, type SkillSection } from "../data/portfolio";

// ─── Animation Variants ───
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.6 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const chipPop = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
};

function SkillChip({ name }: { name: string }) {
  return (
    <motion.div
      variants={chipPop}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 24px rgba(167, 139, 250, 0.12), 0 4px 20px rgba(0,0,0,0.25)",
      }}
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl
                 border border-border bg-bg-card/50 backdrop-blur-sm
                 hover:border-primary/25 hover:bg-bg-hover/40
                 transition-all duration-300 cursor-default"
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0
                      bg-primary/8 group-hover:bg-primary/15 transition-colors duration-300">
        <TechIcon name={name} size={15} className="opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="text-[13px] font-body font-medium text-text-secondary
                        group-hover:text-text-primary transition-colors whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}

// ─── Category Accordion Panel ───
function CategoryPanel({ section, isActive, onToggle }: {
  section: SkillSection;
  isActive: boolean;
  onToggle: () => void;
}) {
  const SectionIcon = section.icon;

  return (
    <motion.div
      variants={fadeUp}
      layout
      className="rounded-2xl border border-primary/40 bg-bg-card/25
                overflow-hidden transition-all duration-300"
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full text-left px-5 sm:px-6 py-5 flex items-center gap-4 group cursor-pointer
                   transition-colors duration-200"
      >
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                     transition-all duration-300"
        >
          <SectionIcon
            size={20}
            className="text-primary transition-colors duration-300"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-primary">
              {section.title}
            </span>
            <span className="text-[11px] font-mono text-text-dim">
              — {section.skills.length} tools
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-display font-bold text-text-primary leading-tight">
            {section.subtitle}
          </h3>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-text-muted shrink-0"
        >
          <ChevronRight size={18} />
        </motion.div>
      </button>

      {/* Expandable skills */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-6">
              {/* Description */}
              <p className="text-text-secondary text-[13px] leading-relaxed mb-5
                            pl-3 border-l-2 border-primary/15">
                {section.description}
              </p>

              {/* Skills grid */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-2.5"
              >
                {section.skills.map((skill) => (
                  <SkillChip key={skill} name={skill} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Stats Row ───
function StatsRow() {
  const stats = [
    { label: "Technologies", value: "30+" },
    { label: "Projects Built", value: "10+" },
    { label: "Years Coding", value: "4+" },
    { label: "LeetCode Solved", value: "310+" },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          className="rounded-xl border border-border bg-bg-card/30 backdrop-blur-sm p-4
                     text-center hover:border-primary/20 transition-all duration-300 group"
        >
          <div className="text-2xl md:text-3xl font-display font-bold mb-1 text-primary">
            {s.value}
          </div>
          <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Currently Exploring Marquee ───
function ExploringMarquee() {
  const items = [
    "Rust", "WebAssembly", "tRPC", "Bun", "Deno", "Astro", "gRPC",
    "GraphQL", "Turborepo", "Edge Computing", "AI/ML", "BullMQ",
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-xl border border-border bg-bg-card/25 backdrop-blur-sm p-4 mb-12 overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-3">
        <Search size={14} className="text-primary" />
        <span className="font-mono text-[11px] text-primary font-bold uppercase tracking-widest">
          Currently Exploring
        </span>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-bg-card/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-bg-card/90 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {[...items, ...items].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-mono
                         text-text-secondary border border-border/50 bg-bg-elevated/30
                         hover:text-primary hover:border-primary/20 transition-colors shrink-0"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ───
export function SkillsPage() {
  const [activeSection, setActiveSection] = useState<string>("languages");

  const toggle = (id: string) => {
    setActiveSection((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="relative bg-bg min-h-screen text-text-primary font-body overflow-x-clip">
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 w-full max-w-[820px] mx-auto px-6 sm:px-10 lg:px-6 pt-32 pb-20">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="font-mono text-primary text-sm font-bold uppercase tracking-widest mb-1 block">
            Skills
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-text-primary tracking-tight mb-3">
            Tools & Technologies
          </h1>
          <p className="text-text-secondary text-[15px] leading-relaxed max-w-[600px]">
            A curated look at the technologies I use daily — from core languages
            to scalable architectures and automated cloud infrastructure.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <StatsRow />

        {/* ── Section Panels ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4 mb-12"
        >
          {skillSections.map((sec) => (
            <CategoryPanel
              key={sec.id}
              section={sec}
              isActive={activeSection === sec.id}
              onToggle={() => toggle(sec.id)}
            />
          ))}
        </motion.div>

        {/* ── Exploring ── */}
        <ExploringMarquee />

        {/* ── Quote ── */}
        <div className="max-w-3xl flex flex-col items-center gap-2 text-center  space-y-4">

          {/* Top line */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-6 h-10 bg-gray-700 skew-x-[-20deg] opacity-50"></div>
              <div className="w-6 h-10 bg-gray-700 skew-x-[-20deg] opacity-30"></div>
            </div>

            <p className="text-4xl font-semibold md:text-4xl italic text-gray-400">
              Development: Turning
            </p>
          </div>

          <div className="flex justify-center flex-col gap-3 ">

            {/* Coffee into Code */}
            <div className="flex items-center gap-4 justify-center text-center">
              <div className="h-[2px] w-16 bg-gray-600"></div>

              <h1 className="text-4xl md:text-5xl font-semibold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Coffee
                </span>{" "}
                <span className="text-gray-400">into</span>{" "}
                <span className="text-primary px-3 py-1 rounded-lg">
                  Code
                </span>
              </h1>

              <div className="h-[2px] w-16 bg-gray-600"></div>
            </div>

            {/* then Magic */}
            <h2 className="text-4xl md:text-5xl font-semibold">
              <span className="text-gray-400">then </span>
              <span className="bg-primary text-text-primary px-3 py-1 rounded-lg">
                Magic.
              </span>
            </h2>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
