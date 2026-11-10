import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Code2,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Network,
  Database,
  Activity,
  Cpu,
  Radio,
  QrCode,
  Lock,
  Server,
  Cloud,
} from "lucide-react";
import { RxComponent1 } from "react-icons/rx";
import { BiLinkExternal } from "react-icons/bi";

import { FaGithub } from "react-icons/fa";
import TechIcon from "./icon-provider";
import { trackEvent } from "../lib/analytics";
import { portfolioData } from "../data/portfolio";
import Folder, { type FolderEntry } from "./ui/folder";

interface Pillar {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

interface ProjectShowcaseItem {
  id: string;
  name: string;
  tabTitle: string;
  tabSubtitle: string;
  badge: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  slug: string;
  imagePrimary: string;
  imageSecondary: string;
  pillars: Pillar[];
}

const rawProjects = portfolioData.projects;

const getSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const PROJECTS: ProjectShowcaseItem[] = [
  // 1. JQube — AI-Assisted DevSecOps Platform (Featured)
  {
    id: "jqube",
    name: "JQube",
    tabTitle: "JQube",
    tabSubtitle: "AI DevSecOps Platform",
    badge: "FEATURED PROJECT",
    description:
      rawProjects[0]?.description ||
      "A policy-controlled, AI-assisted DevSecOps platform that detects vulnerabilities and generates verified remediation PRs for GitHub workflows.",
    tech: rawProjects[0]?.tech || [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "PostgreSQL",
      "Redis",
      "Apache Kafka",
      "GitHub Actions",
    ],
    liveUrl: rawProjects[0]?.link || "https://github.com/Atharvkote",
    githubUrl: rawProjects[0]?.github || "https://github.com/Atharvkote",
    slug: getSlug(rawProjects[0]?.title || "JQube"),
    imagePrimary: "/jqube.png",
    imageSecondary: "/jqube-preview.png",
    pillars: [
      {
        icon: Code2,
        title: "Automated Scanning",
        desc: "SAST scans with Semgrep, Gitleaks and Trivy.",
      },
      {
        icon: Sparkles,
        title: "AI Remediation",
        desc: "Generate, validate and raise secure pull requests.",
      },
      {
        icon: ShieldCheck,
        title: "Policy Control",
        desc: "Enforce security and review policies at organization level.",
      },
      {
        icon: Zap,
        title: "Asynchronous & Scalable",
        desc: "Queue-based, resilient and production ready.",
      },
    ],
  },

  // 2. VenDeX — Distributed Microservices Architecture with Apache Kafka
  {
    id: "vendex",
    name: "VenDeX",
    tabTitle: "VenDeX",
    tabSubtitle: "Kafka Microservices Mesh",
    badge: "EVENT-DRIVEN ARCHITECTURE",
    description:
      rawProjects[1]?.description ||
      "High-throughput event-driven microservices architecture powered by Apache Kafka, Redis cluster caching, and Kong API Gateway with sub-20ms distributed message dispatch.",
    tech: rawProjects[1]?.tech.slice(0, 8) || [
      "Node.js",
      "Express.js",
      "Apache Kafka",
      "Redis",
      "Docker",
      "MongoDB",
      "Kong API Gateway",
      "JWT-RS256",
    ],
    liveUrl: rawProjects[1]?.link || "https://github.com/Atharvkote",
    githubUrl: rawProjects[1]?.github || "https://github.com/Atharvkote",
    slug: getSlug(rawProjects[1]?.title || "VenDeX"),
    imagePrimary: "/vednex2.png",
    imageSecondary:
      "https://res.cloudinary.com/dgz7hqbl9/image/upload/v1776587018/copy_of_screenshot_2026-03-22_232641_n4ppii_de8edb.png",
    pillars: [
      {
        icon: Network,
        title: "Kafka Event Streaming",
        desc: "10,000+ messages/min across 3-node quorum cluster.",
      },
      {
        icon: Database,
        title: "Redis Cache-Aside",
        desc: "70% latency cut via pub/sub caching & invalidation.",
      },
      {
        icon: Lock,
        title: "Zero-Trust RS256",
        desc: "Asymmetric cryptographic inter-service authentication.",
      },
      {
        icon: Activity,
        title: "Full Observability",
        desc: "Prometheus, Grafana and Loki tracing pipeline.",
      },
    ],
  },

  // 3. ConcertSync — Ticket Booking Platform for Live Concerts
  {
    id: "concertsync",
    name: "ConcertSync",
    tabTitle: "ConcertSync",
    tabSubtitle: "Live Concert Ticketing",
    badge: "HIGH-CONCURRENCY TICKETING",
    description:
      rawProjects[2]?.description ||
      "Scalable full-stack ticketing platform engineered for high-concurrency seat reservation, offline HMAC-SHA256 encrypted QR gate verification, and real-time sales analytics.",
    tech: rawProjects[2]?.tech || [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "AWS S3",
      "Socket.io",
      "Docker",
    ],
    liveUrl: rawProjects[2]?.link || "https://github.com/Atharvkote",
    githubUrl: rawProjects[2]?.github || "https://github.com/Atharvkote",
    slug: getSlug(rawProjects[2]?.title || "ConcertSync"),
    imagePrimary: "/Ticket.jpg",
    imageSecondary: "/Ticket-1.jpg",
    pillars: [
      {
        icon: QrCode,
        title: "Offline HMAC QR Scans",
        desc: "Turnstile verification in < 180ms slashing gate delay by 60%.",
      },
      {
        icon: Lock,
        title: "Atomic Seat Holds",
        desc: "Concurrency-safe TTL locks preventing double bookings.",
      },
      {
        icon: Server,
        title: "11,000+ Ingress Peak",
        desc: "High availability during flash registration drops.",
      },
      {
        icon: Cloud,
        title: "AWS EC2 Deployment",
        desc: "Containerized micro-services with automated S3 snapshots.",
      },
    ],
  },

  // 4. FoodDash AI — AI-Powered Contactless Ordering & Recommendation System
  {
    id: "fooddash",
    name: "FoodDash AI",
    tabTitle: "FoodDash AI",
    tabSubtitle: "Dining & Smart Kitchen",
    badge: "EDGE AI & REAL-TIME DINING",
    description:
      rawProjects[3]?.description ||
      "Contactless dining and smart kitchen platform with QR-based instant ordering, client-side TensorFlow.js recommendation engine, and real-time WebSocket kitchen display.",
    tech: rawProjects[3]?.tech.slice(0, 8) || [
      "Next.js",
      "Express.js",
      "MongoDB",
      "TensorFlow.js",
      "Socket.io",
      "Razorpay API",
      "Tailwind CSS",
      "Firebase",
    ],
    liveUrl: rawProjects[3]?.link || "https://github.com/Atharvkote",
    githubUrl: rawProjects[3]?.github || "https://github.com/Atharvkote",
    slug: getSlug(rawProjects[3]?.title || "FoodDash AI"),
    imagePrimary: "/FD-1.png",
    imageSecondary: "/FD-2.png",
    pillars: [
      {
        icon: Cpu,
        title: "Client-Side TensorFlow.js",
        desc: "On-device AI recommendation model serving picks in < 120ms.",
      },
      {
        icon: Zap,
        title: "35% Faster Turnover",
        desc: "QR self-ordering pipeline eliminating ordering friction.",
      },
      {
        icon: ShieldCheck,
        title: "Idempotent Webhooks",
        desc: "500+ live transactions with 99.8% Razorpay success rate.",
      },
      {
        icon: Radio,
        title: "Real-Time KDS Push",
        desc: "Instant WebSocket synchronization directly to kitchen stations.",
      },
    ],
  },
];

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
      // 1. View Details
      trackEvent("project_view_details_click", { project: currentProject.name });
      navigate(`/project/${currentProject.slug}`);
    } else if (index === 1) {
      // 2. Visit Project
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
      // 3. Source Doc
      trackEvent("project_source_doc_click", {
        project: currentProject.name,
        url: currentProject.githubUrl,
      });
      if (currentProject.githubUrl) {
        window.open(currentProject.githubUrl, "_blank", "noopener,noreferrer");
      }
    }
  };

  // ── 3 Action Cards inside the Primary Color Folder (Icons only, no images) ──
  const folderEntries: FolderEntry[] = [
    // Card 1: View Details
    {
      title: "View Details",
      content: (
        <div className="absolute inset-[3px] rounded-[5px] bg-gradient-to-b from-[#0e1622] via-[#0a111a] to-[#070b10] border border-primary/40 p-3 flex flex-col justify-between group/card cursor-pointer shadow-md select-none transition-all duration-300 hover:border-primary">
          {/* Top Tag */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold tracking-wider uppercase text-primary/80">
              Case Study
            </span>
          </div>

          {/* Center Icon */}
          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover/card:scale-110 group-hover/card:bg-primary/20 transition-all duration-300 shadow-[0_0_14px_rgba(1,216,180,0.25)]">
              <RxComponent1 size={32} />
            </div>
          </div>

          {/* Bottom Label & Action */}
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

    // Card 2: Visit Project
    {
      title: "Visit Project",
      content: (
        <div className="absolute inset-[3px] rounded-[5px] bg-gradient-to-b from-[#0e1622] via-[#0a111a] to-[#070b10] border border-primary/40 p-3 flex flex-col justify-between group/card cursor-pointer shadow-md select-none transition-all duration-300 hover:border-primary">
          {/* Top Tag & Live Badge */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold tracking-wider uppercase text-primary/80">
              Production
            </span>
          </div>

          {/* Center Icon */}
          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover/card:scale-110 group-hover/card:bg-primary/20 transition-all duration-300 shadow-[0_0_14px_rgba(1,216,180,0.25)]">
              <BiLinkExternal size={32} />
            </div>
          </div>

          {/* Bottom Label & Action */}
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

    // Card 3: Source Code
    {
      title: "Source Code",
      content: (
        <div className="absolute inset-[3px] rounded-[5px] bg-gradient-to-b from-[#0e1622] via-[#0a111a] to-[#070b10] border border-primary/40 p-3 flex flex-col justify-between group/card cursor-pointer shadow-md select-none transition-all duration-300 hover:border-primary">
          {/* Top Tag */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold tracking-wider uppercase text-zinc-400">
              GitHub
            </span>
          </div>

          {/* Center Icon */}
          <div className="flex flex-col items-center justify-center my-auto py-1">
            <div className="w-16 h-16 rounded-xl bg-white/[0.06] border border-white/20 flex items-center justify-center text-white group-hover/card:scale-110 group-hover/card:text-primary group-hover/card:border-primary/40 group-hover/card:bg-primary/10 transition-all duration-300 shadow-[0_0_14px_rgba(255,255,255,0.08)]">
              <FaGithub size={32} />
            </div>
          </div>

          {/* Bottom Label & Action */}
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
      {/* ── Section Title & Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          03. FEATURED WORK
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Projects I've <span className="badone-font italic font-normal text-primary">Engineered</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Production systems, event-driven architectures, and AI platforms.
        </p>
      </motion.div>

      {/* ── Ambient Background Cyber Curved Light Rays ── */}
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

      {/* ══════════════════════════════════════════════════════════════
          MAIN 3-COLUMN SHOWCASE (PERFECTLY EVEN & BALANCED SPACING)
          Column 1 (260px)  ─── gap-8 ───  Column 2 (1fr)  ─── gap-8 ───  Column 3 (Folder)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr_360px] gap-7 lg:gap-8 xl:gap-9 items-center w-full">
        {/* ════════════════════════════════════════════════════
            COLUMN 1: VERTICAL PROJECT TAB SELECTOR (LEFT)
            Numbers in primary text with monospace font
        ════════════════════════════════════════════════════ */}
        <div className="flex items-center gap-3 w-full">
          {/* Milestone Step Indicator Spine */}
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

          {/* Vertical Stack of Project Tabs */}
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
                    {/* Numbers in primary text with monospace font */}
                    <span
                      className={`font-mono text-lg sm:text-xl font-black shrink-0 tracking-tight transition-all duration-200 ${isActive
                        ? "text-primary drop-shadow-[0_0_8px_rgba(1,216,180,0.5)]"
                        : "text-primary/50 group-hover:text-primary"
                        }`}
                    >
                      0{idx + 1}
                    </span>

                    {/* Titles */}
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-sm sm:text-[15px] tracking-tight leading-snug truncate">
                        {p.tabTitle}
                      </h4>
                      <p className="text-zinc-400 text-[11.5px] mt-0.5 font-normal leading-tight truncate">
                        {p.tabSubtitle}
                      </p>
                    </div>
                  </div>

                  {/* Active Arrow Indicator */}
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

        {/* ════════════════════════════════════════════════════
            COLUMN 2: ACTIVE PROJECT DETAILS (MIDDLE)
            Clean info presentation; redundant action buttons removed
        ════════════════════════════════════════════════════ */}
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
              {/* Featured Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-[11px] font-bold tracking-wider uppercase">
                <span>★</span> {currentProject.badge}
              </div>

              {/* Project Title */}
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {currentProject.name}
              </h3>

              {/* Description */}
              <p className="text-zinc-300 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {currentProject.description}
              </p>

              {/* Tech Stack Pills */}
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

        {/* ════════════════════════════════════════════════════
            COLUMN 3: PRIMARY COLOR FOLDER (RIGHT)
            Holding 3 interactive action links:
            1. View Details | 2. Visit Project | 3. Source Doc
        ════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════
          BOTTOM FEATURE PILLARS (4-COL BALANCED GRID)
      ════════════════════════════════════════════════════ */}
      <div className="mt-12 pt-7 border-t border-teal-500/20 relative">
        {/* Subtle horizontal cyan glow line */}
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
