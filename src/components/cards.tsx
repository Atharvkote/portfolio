import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";

import {
  Server,
  ShieldCheck,
  Zap,
  Layers,
  Copy,
  Check,
  ArrowUpRight,
  Radio,
  Network,
  Workflow,
  ArrowRightLeft,
  Database,
  KeyRound,
  ScrollText,
  Cpu,
  Book,
} from "lucide-react";
import { FaLinkedinIn, FaDocker, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApachekafka, SiLeetcode } from "react-icons/si";
import { toast } from "sonner";
import CrystalizedBall from "./ui/crystalized-ball";
import Shredder from "./ui/shredder";

export function BackendDevops() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<number>(0);

  // Live real-time clock timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("atharvkote3@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard: atharvkote3@gmail.com");
    setTimeout(() => setCopied(false), 2000);
  };

  // 12-hour normal clock calculations
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // 12-hour hour hand: 360 deg / 12 = 30 deg per hour
  const hour12Deg = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
  // 60-minute minute hand: 360 deg / 60 = 6 deg per minute
  const minuteDeg = (minutes + seconds / 60) * 6;
  // 60-second second hand: 360 deg / 60 = 6 deg per second
  const secondDeg = seconds * 6;

  const formattedDigitalTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  // Tab data with exact items requested by the user
  const backendTabs: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    metric: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      icon: React.ComponentType<{ size?: number; className?: string }>;
    }>;
  }> = [
      {
        id: "architecture",
        label: "Architecture",
        icon: Layers,
        metric: "Modular & Decoupled",
        items: [
          {
            id: "monolith",
            title: "Monolith Architecture",
            desc: "Layered domain structure with high cohesion and fast in-memory execution.",
            icon: Layers,
          },
          {
            id: "microservice",
            title: "Microservices",
            desc: "Independent service boundaries with gRPC/REST APIs and resilient isolation.",
            icon: Network,
          },
          {
            id: "worker-based",
            title: "Worker-Based Architecture",
            desc: "Background job consumers and task queues offloading heavy operations.",
            icon: Workflow,
          },
        ],
      },
      {
        id: "data",
        label: "Data Flow",
        icon: Zap,
        metric: "< 15ms Latency",
        items: [
          {
            id: "async-pipeline",
            title: "Async Data Pipeline",
            desc: "Asynchronous stream ingestion ensuring zero request-response blocking.",
            icon: ArrowRightLeft,
          },
          {
            id: "high-throughput",
            title: "High Throughput Data Pipeline",
            desc: "Connection pooling, batch serialization, and low-latency data throughput.",
            icon: Zap,
          },
          {
            id: "cache-optimization",
            title: "Cache Optimization",
            desc: "Distributed caching with LRU eviction and smart cache invalidation.",
            icon: Database,
          },
        ],
      },
      {
        id: "security",
        label: "Security",
        icon: ShieldCheck,
        metric: "Zero-Trust Guard",
        items: [
          {
            id: "zero-trust",
            title: "Zero Trust Architecture",
            desc: "Mutual TLS, continuous verification, and end-to-end cryptographic guardrails.",
            icon: ShieldCheck,
          },
          {
            id: "iam",
            title: "IAM & Access Control",
            desc: "Granular role-based policies, least-privilege tokens, and secure auth flows.",
            icon: KeyRound,
          },
          {
            id: "log-audits",
            title: "Log Audits & Compliance",
            desc: "Immutable audit trails, structured security logging, and anomaly alerts.",
            icon: ScrollText,
          },
        ],
      },
      {
        id: "scaling",
        label: "Scaling",
        icon: Server,
        metric: "Auto-Scaled Cluster",
        items: [
          {
            id: "kafka",
            title: "Kafka Event Streaming",
            desc: "Partitioned distributed event logs for massive parallel event delivery.",
            icon: SiApachekafka,
          },
          {
            id: "async-processing",
            title: "Async Processing",
            desc: "Non-blocking event loop workers handling concurrent spikes seamlessly.",
            icon: Cpu,
          },
          {
            id: "docker-replication",
            title: "Docker Replication",
            desc: "Container replica sets and horizontal autoscaling across multi-zones.",
            icon: FaDocker,
          },
        ],
      },
    ];

  const socialLinks = [
    {
      name: "GitHub",
      shortName: "GitHub",
      url: "https://github.com/Atharvkote",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      shortName: "Insta",
      url: "https://www.instagram.com/___atharv_81",
      icon: FaInstagram,
    },
    {
      name: "X (Twitter)",
      shortName: "X",
      url: "https://x.com/ImAtharva81",
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      shortName: "LinkedIn",
      url: "https://www.linkedin.com/in/atharvakote",
      icon: FaLinkedinIn,
    },
  ];

  // 12-Hour Batons (Numbers removed from dial as requested)
  const hourMarkers12 = [
    { deg: 0 },
    { deg: 30 },
    { deg: 60 },
    { deg: 90 },
    { deg: 120 },
    { deg: 150 },
    { deg: 180 },
    { deg: 210 },
    { deg: 240 },
    { deg: 270 },
    { deg: 300 },
    { deg: 330 },
  ];

  const activeTabDetails = backendTabs[activeTab];

  return (
    <section id="backend-devops" className="py-20 sm:py-24 relative overflow-hidden select-none">
      {/* ── Section Title & Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          03. ARCHITECTURE & SYSTEMS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Design Principles &amp; <span className="badone-font italic font-normal text-primary">Profiles</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Architecting resilient backend microservices and automated cloud delivery pipelines.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="flex flex-col gap-5 sm:gap-6">

        {/* ========================================================
            TOP ROW:
            1. Left-most (3 cols): Crystalized Ball Component
            2. Middle (6 cols): Main Architecture & Systems Card (with Shredder)
            3. Right-most (3 cols): Contact Card & LinkedIn Card
               aligned vertically on top of one another!
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* 1. LEFT-MOST END (3 COLS): Crystalized Ball Component */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[520px]"
          >
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#01d8b4]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/20 transition-all duration-500" />

            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div>
                <span className="font-mono text-[11px] tracking-wider uppercase text-text-muted">
                  Atharva Kote
                </span>
                <div className="text-white font-medium text-xs flex items-center gap-1.5 mt-0.5">
                  <Radio size={12} className="text-[#01d8b4] animate-pulse" />
                  <span>PUNE, IN • UTC+5:30</span>
                </div>
              </div>

            </div>

            {/* Center WebGL Crystalized Ball */}
            <div className="relative w-full h-[280px] sm:h-[300px] my-auto flex items-center justify-center cursor-grab active:cursor-grabbing">
              <CrystalizedBall
                preset="aurora"
                color="#01d8b4"
                size={0.78}
                interactive={true}
                hoverStrength={0.75}
                glow={0.9}
                particleCount={14000}
                speed={0.95}
                className="w-full h-full"
              />
              <div className="absolute top-1 left-2 text-white/20 font-mono text-[9px] pointer-events-none select-none">
                +
              </div>
              <div className="absolute bottom-1 right-2 text-white/20 font-mono text-[9px] pointer-events-none select-none">
                +
              </div>
            </div>

            {/* Bottom Card Footer - Social Channels (GitHub, Instagram, X, LinkedIn) */}
            <div className="z-10 border-t border-white/[0.08] pt-3">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="flex flex-col items-center justify-center py-2 px-1 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#01d8b4]/60 hover:bg-[#01d8b4]/15 text-text-muted hover:text-[#01d8b4] transition-all duration-200 hover:shadow-[0_0_14px_rgba(1,216,180,0.25)] group/soc cursor-pointer"
                    >
                      <Icon
                        size={15}
                        className="group-hover/soc:scale-115 group-hover/soc:text-[#01d8b4] transition-all"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* 2. MIDDLE (6 COLS): Main Architecture Card with Interactive Shredder */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-6 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[520px]"
          >
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#01d8b4]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/20 transition-all duration-500" />

            <div>
              {/* Header tags & interactive pill buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-primary  bg-linear-to-l from-primary to-bg">
                  <Server size={13} className="text-[#01d8b4]" />
                  <span className="font-mono text-xs text-text tracking-wide uppercase">
                    Architecture & Systems
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {backendTabs.map((tab, i) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(i)}
                      className={`font-mono text-xs px-3 py-1 rounded-md border transition-all cursor-pointer ${activeTab === i
                        ? "border-[#01d8b4] text-text  bg-linear-to-l from-primary to-bg"
                        : "border-white/10 text-text-muted hover:text-white hover:border-white/20 bg-white/[0.02]"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Headline */}
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Resilient systems <span className="badone-font italic font-normal text-[#01d8b4]">you can trust.</span>
                </h3>
              </div>

              <p className="text-text-muted text-xs sm:text-sm mt-1.5 leading-relaxed">
                Clean abstractions, zero-trust cryptographic guardrails, and sub-millisecond async pipelines engineered without unnecessary bloat.
              </p>
            </div>

            {/* Interactive Shredder Component for Tab Items */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col justify-end">
              <Shredder
                key={activeTab}
                items={activeTabDetails.items}
                renderItem={(item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div className="w-full flex items-center gap-3.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-white/10 bg-[#121217]/95 hover:border-[#01d8b4]/50 shadow-[0_4px_16px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing transition-all select-none group/item">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#01d8b4]/10 border border-[#01d8b4]/25 flex items-center justify-center text-[#01d8b4] shrink-0 group-hover/item:border-[#01d8b4]/50 group-hover/item:bg-[#01d8b4]/20 transition-all shadow-[0_0_12px_rgba(1,216,180,0.15)]">
                        <ItemIcon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-sm sm:text-base text-white block leading-snug">
                          {item.title}
                        </span>
                        <span className="text-xs text-text-muted block leading-relaxed mt-0.5 truncate">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  );
                }}
                width={560}
                height={240}
                fallHeight={12}
                slitHeight={0}
                inset={4}
                gap={10}
                slitColor="transparent"
                stripWidth={12}
                feedSpeed={220}
                autoFeed={true}
                loop={true}
                loopAfterDelete={true}
                className="w-full mx-auto"
              />
            </div>
          </motion.div>

          {/* 3. RIGHT-MOST END (3 COLS): Contact Card & LinkedIn Card
              ALIGNED VERTICALLY ON TOP OF ONE ANOTHER! */}
          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 justify-between">

            {/* TOP CARD: Contact & Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[250px]"
            >
              {/* Top Availability Badge */}
              <div className="flex items-center justify-between">
                <div className="  bg-white/10 flex items-center justify-center">
                  <SiGmail className="text-md text-primary" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#01d8b4]/40 bg-[#01d8b4]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#01d8b4] animate-pulse" />
                  <span className="text-[10px] text-text font-medium tracking-wide">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Punchy Text & Email */}
              <div className="my-2">
                <h3 className="font-['Manrope'] font-bold text-base text-white tracking-tight uppercase leading-snug">
                  LET&apos;S BUILD SOMETHING{" "}
                  <span className="badone-font italic font-normal text-[#01d8b4] lowercase block">
                    that actually works.
                  </span>
                </h3>

                {/* Email Tap to Copy */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-2.5 w-full flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#01d8b4]/50 hover:bg-[#01d8b4]/[0.05] transition-all group/btn text-left cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <span className="text-text-muted text-xs">✉</span>
                    <span className="font-mono text-[11px] text-white truncate">
                      atharvkote3@gmail.com
                    </span>
                  </div>
                  {copied ? (
                    <Check size={13} className="text-[#01d8b4] shrink-0" />
                  ) : (
                    <Copy size={13} className="text-text-muted group-hover/btn:text-[#01d8b4] shrink-0 transition-colors" />
                  )}
                </button>
                <p className="text-text-muted text-[9px] font-mono text-center mt-1">
                  TAP TO COPY EMAIL
                </p>
              </div>

              {/* Connect Action Button */}
              <a
                href="#contact"
                className="w-full py-2.5 px-3 rounded-xl bg-primary text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-hover-primary hover:shadow-[0_0_20px_rgba(1,216,180,0.5)] transition-all duration-300"
              >
                <span>CONNECT NOW</span>
                <ArrowUpRight size={13} />
              </a>
            </motion.div>

            {/* BOTTOM CARD: LinkedIn Card (Blue and White Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex-1 rounded-3xl border border-[#0A66C2]/35 bg-[#0c0c12]/90 backdrop-blur-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#0A66C2]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(10,102,194,0.18)] min-h-[250px]"
            >
              {/* LinkedIn Electric Blue Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#0A66C2]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0A66C2]/35 transition-all duration-500" />

              {/* Top Bar with LinkedIn Logo & Pill */}
              <div className="flex items-center justify-between z-10">
                <div className="w-7 h-7 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shadow-[0_0_12px_rgba(10,102,194,0.6)]">
                  <FaLinkedinIn size={14} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/20 text-[#60a5fa] font-mono text-[10px] tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
                  <span>LINKEDIN</span>
                </div>
              </div>

              {/* Content */}
              <div className="my-2 z-10">
                <h3 className="font-['Manrope'] font-bold text-base text-white tracking-tight leading-snug">
                  Let&apos;s Connect{" "}
                  <span className="text-[#3897f0] font-semibold block">
                    on LinkedIn.
                  </span>
                </h3>

                {/* Profile Handle / Status */}
                <div className="mt-2.5 p-2 rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <span className="text-[#3897f0] font-mono text-xs font-semibold">in/</span>
                    <span className="font-mono text-[11px] text-white truncate">atharvakote</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#0A66C2]/30 text-white font-medium">
                    500+
                  </span>
                </div>
                <p className="text-text-muted text-[9px] font-mono text-center mt-1">
                  NETWORKING & TECH UPDATES
                </p>
              </div>

              {/* Blue & White Action Buttons */}
              <div className="z-10 flex flex-col gap-1.5">
                <a
                  href="https://www.linkedin.com/in/atharvakote"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_0_18px_rgba(10,102,194,0.45)] transition-all duration-300"
                >
                  <span>VIEW LINKEDIN</span>
                  <ArrowUpRight size={13} />
                </a>
                {/* <Link
                  to="/links"
                  className="text-[10px] font-mono text-text-muted hover:text-[#3897f0] text-center transition-colors"
                >
                  Or explore all links (/links) &rarr;
                </Link> */}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ========================================================
            BOTTOM ROW:
            1. Left (4 cols): Luxury 12-Hour Aviator Chronograph Clock (No numbers)
            2. Middle (4 cols): Kafka & Redis Event Pub/Sub Architecture
            3. Right (4 cols): Algorithmic Core & LeetCode (200+ Solved)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* MIDDLE (4 cols): Philosophy Quote & GitHub Dual Stack */}
          <div className="order-2 md:col-span-6 lg:col-span-4 flex flex-col gap-4 sm:gap-5 justify-between">
            {/* TOP CARD: Philosophy & Engineering Quote */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[200px]"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#01d8b4]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/20 transition-all duration-500" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

              {/* Top Header Badge */}
              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary  bg-linear-to-l from-primary to-bg">
                  <Book size={12} className="text-[#01d8b4]" />
                  <span className="font-mono text-[10px] text-text tracking-widest uppercase ">
                    Philosophy
                  </span>
                </div>

              </div>

              {/* Quote Typography */}
              <div className="my-auto py-2 z-10 relative">
                <p className=" text-[13.5px] sm:text-xl font-medium text-white/95 leading-relaxed italic">
                  &ldquo;I have no special talent. I am only passionately curious.&rdquo;
                </p>
                <div className="mt-2.5 flex items-center justify-end font-mono text-[10px]">
                  <span className="text-[#01d8b4] font-semibold tracking-wide">
                    — Albert Einstein
                  </span>
                </div>
              </div>

            </motion.div>

            {/* BOTTOM CARD: GitHub Card (Dark Slate & Teal Theme) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0c0c12]/90 backdrop-blur-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[220px]"
            >
              {/* GitHub Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/[0.06] rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/15 transition-all duration-500" />

              {/* Top Bar with GitHub Logo & Pill */}
              <div className="flex items-center justify-between z-10">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-xs shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
                  <FaGithub size={15} />
                </div>

              </div>

              {/* Content */}
              <div className="my-2 z-10">
                <h3 className="font-['Manrope'] font-bold text-base text-white tracking-tight ">
                  Explore Code
                  <span className="text-[#01d8b4] font-semibold block">
                    on GitHub.
                  </span>
                </h3>

                {/* Profile Handle / Status */}
                <div className="mt-2.5 p-2 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <span className="text-[#01d8b4] font-mono text-xs font-semibold">gh/</span>
                    <span className="font-mono text-[11px] text-white truncate">Atharvkote</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#01d8b4]/15 text-[#01d8b4] font-medium border border-[#01d8b4]/30">
                    2440+ COMMITS
                  </span>
                </div>
                <p className="text-text-muted text-[9px] font-mono text-center mt-1">
                  OPEN SOURCE &amp; DISTRIBUTED REPOS
                </p>
              </div>

              {/* Action Button */}
              <div className="z-10 flex flex-col gap-1.5">
                <a
                  href="https://github.com/Atharvkote"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-black hover:bg-[#01d8b4] text-text font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-[0_0_18px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(1,216,180,0.4)] transition-all duration-300 group/btn"
                >
                  <FaGithub size={13} className="group-hover/btn:scale-110 transition-transform" />
                  <span>VIEW GITHUB</span>
                  <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
          {/* LEFT: 12-Hour Luxury Aviator Chronograph (Numbers Removed) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="order-1 md:col-span-6 lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-6 sm:p-7 flex flex-col items-center justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[420px]"
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                CHRONOGRAPH
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#01d8b4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#01d8b4] animate-pulse" />
                <span>12-HOUR IST</span>
              </div>
            </div>

            {/* SVG Luxury Aviator Watch with 4 crosshairs and 12-hour clean dial (No numbers) */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-3 flex items-center justify-center">
              <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_16px_36px_rgba(0,0,0,0.95)]">
                <defs>
                  {/* Outer Beveled Metallic Casing Gradient */}
                  <linearGradient id="metalBezel" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7a7a88" />
                    <stop offset="25%" stopColor="#303038" />
                    <stop offset="50%" stopColor="#15151a" />
                    <stop offset="75%" stopColor="#555562" />
                    <stop offset="100%" stopColor="#121216" />
                  </linearGradient>

                  {/* Inner Rim Highlight Gradient */}
                  <radialGradient id="innerDialShadow" cx="50%" cy="50%" r="50%">
                    <stop offset="70%" stopColor="#08080a" />
                    <stop offset="100%" stopColor="#000000" />
                  </radialGradient>

                  {/* Glass Glare Gradient */}
                  <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
                    <stop offset="35%" stopColor="#ffffff" stopOpacity="0.04" />
                    <stop offset="65%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>

                  {/* 3D Sword Hand Gradients */}
                  <linearGradient id="swordLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#d5d5de" />
                  </linearGradient>
                  <linearGradient id="swordDark" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a5a5b2" />
                    <stop offset="100%" stopColor="#70707c" />
                  </linearGradient>

                  <filter id="handShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.85" />
                  </filter>
                  <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#01d8b4" floodOpacity="0.9" />
                  </filter>
                </defs>

                {/* 4 Outer Crosshair Tabs (at 12, 3, 6, 9) matching reference image */}
                <rect x="144" y="2" width="12" height="24" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />
                <rect x="144" y="274" width="12" height="24" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />
                <rect x="2" y="144" width="24" height="12" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />
                <rect x="274" y="144" width="24" height="12" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />

                {/* Outer Circular Steel Case */}
                <circle cx="150" cy="150" r="136" fill="url(#metalBezel)" stroke="#383844" strokeWidth="1.5" />

                {/* Inner Bevel Rim with Dark Shadow */}
                <circle cx="150" cy="150" r="122" fill="#09090c" stroke="#1f1f26" strokeWidth="2" />
                <circle cx="150" cy="150" r="120" fill="url(#innerDialShadow)" />

                {/* 60 Minute Radial Chapter Ring Ticks */}
                {Array.from({ length: 60 }).map((_, i) => {
                  const deg = i * 6;
                  const isMajor = i % 5 === 0;
                  return (
                    <line
                      key={i}
                      x1="150"
                      y1={isMajor ? "35" : "38"}
                      x2="150"
                      y2={isMajor ? "44" : "41"}
                      stroke="#ffffff"
                      strokeWidth={isMajor ? "1.8" : "0.8"}
                      strokeOpacity={isMajor ? "0.8" : "0.25"}
                      transform={`rotate(${deg} 150 150)`}
                    />
                  );
                })}

                {/* 12 Major 3D Faceted Hour Batons (Clean dial, NO numbers) */}
                {hourMarkers12.map((m) => {
                  if (m.deg === 0) {
                    // Double baton at 12 o'clock
                    return (
                      <g key={m.deg} transform="rotate(0 150 150)">
                        <rect x="145" y="47" width="4" height="18" rx="1" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))" />
                        <rect x="151" y="47" width="4" height="18" rx="1" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))" />
                      </g>
                    );
                  }
                  return (
                    <g key={m.deg} transform={`rotate(${m.deg} 150 150)`}>
                      <rect
                        x="147.5"
                        y="47"
                        width="5"
                        height="18"
                        rx="1"
                        fill="url(#swordLight)"
                        filter="drop-shadow(0 1px 3px rgba(0,0,0,0.8))"
                      />
                      <line x1="150" y1="50" x2="150" y2="62" stroke="#ffffff" strokeWidth="1" />
                    </g>
                  );
                })}

                {/* Inner Subtle Sub-dial Ring */}
                <circle cx="150" cy="150" r="54" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />

                {/* Sapphire Crystal Glass Glare Reflection */}
                <path
                  d="M 50 100 Q 150 30 250 100 A 120 120 0 0 0 50 100 Z"
                  fill="url(#glassGlare)"
                  pointerEvents="none"
                />

                {/* 12-Hour Hour Hand (Faceted 3D Sword Hand) */}
                <g transform={`rotate(${hour12Deg} 150 150)`} filter="url(#handShadow)">
                  {/* Left half highlight */}
                  <polygon points="150,86 146,138 150,150" fill="url(#swordLight)" />
                  {/* Right half shadow */}
                  <polygon points="150,86 154,138 150,150" fill="url(#swordDark)" />
                  {/* Center luminous channel */}
                  <line x1="150" y1="92" x2="150" y2="136" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Slender Minute Hand (Faceted 3D Sword Hand) */}
                <g transform={`rotate(${minuteDeg} 150 150)`} filter="url(#handShadow)">
                  {/* Left half highlight */}
                  <polygon points="150,56 147,138 150,150" fill="url(#swordLight)" />
                  {/* Right half shadow */}
                  <polygon points="150,56 153,138 150,150" fill="url(#swordDark)" />
                  {/* Center luminous channel */}
                  <line x1="150" y1="62" x2="150" y2="136" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                </g>

                {/* Cyber Teal Sweeping Second Hand with Counterweight */}
                <g transform={`rotate(${secondDeg} 150 150)`} filter="url(#tealGlow)">
                  {/* Main needle */}
                  <line x1="150" y1="42" x2="150" y2="150" stroke="#01d8b4" strokeWidth="1.6" strokeLinecap="round" />
                  {/* Counterweight Tail */}
                  <line x1="150" y1="150" x2="150" y2="174" stroke="#01d8b4" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="150" cy="164" r="3" fill="#01d8b4" />
                </g>

                {/* Center Pinion Screw Cap */}
                <circle cx="150" cy="150" r="7" fill="#1e1e24" stroke="#777785" strokeWidth="1.5" />
                <circle cx="150" cy="150" r="3.5" fill="#01d8b4" />
                <circle cx="150" cy="150" r="1.5" fill="#ffffff" />
              </svg>
            </div>

            {/* Bottom Digital Time & Dial Specs */}
            <div className="w-full flex items-center justify-between border-t border-white/[0.08] pt-3 text-xs text-text-muted">
              <span className="font-mono text-xs text-white/90 font-semibold tracking-wider">
                {formattedDigitalTime}
              </span>
              <span className="font-mono text-[11px] text-text-muted">
                PUNE • MINIMAL 12H
              </span>
            </div>
          </motion.div>



          {/* RIGHT (4 cols): Algorithmic Problem Solving & LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="order-3 md:col-span-12 lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#FFA116]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[420px]"
          >
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FFA116]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FFA116]/20 transition-all duration-500" />

            <div>
              {/* Header: 02 LEETCODE (Left) & Profile Link (Right) */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <SiLeetcode className="text-[#FFA116]" />
                  <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                    LEETCODE
                  </span>
                </div>
                <a
                  href="https://leetcode.com/u/AtharvaKote81/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted hover:text-[#FFA116] transition-colors"
                >
                  <span>@AtharvaKote81</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Solved Metric Headline */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#FFA116] font-['Manrope'] tracking-tight">
                  300+
                </span>
                <span className="text-text-muted text-xs sm:text-sm font-medium">
                  problems solved
                </span>
              </div>

              {/* Difficulty Progress Bars */}
              <div className="space-y-3.5 mb-5">
                {/* EASY */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="text-white font-bold tracking-wider">EASY</span>
                    <span className="text-text-muted text-[11px]">144 / 975</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full bg-[#00B8A3] rounded-full shadow-[0_0_10px_rgba(0,184,163,0.5)]"
                      style={{ width: "42%" }}
                    />
                  </div>
                </div>

                {/* MEDIUM */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="text-white font-bold tracking-wider">MEDIUM</span>
                    <span className="text-text-muted text-[11px]">155 / 2,145</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full bg-[#FFA116] rounded-full shadow-[0_0_10px_rgba(255,161,22,0.5)]"
                      style={{ width: "52%" }}
                    />
                  </div>
                </div>

                {/* HARD */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="text-white font-bold tracking-wider">HARD</span>
                    <span className="text-text-muted text-[11px]">15 / 989</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full bg-[#FF375F] rounded-full shadow-[0_0_10px_rgba(255,55,95,0.5)]"
                      style={{ width: "18%" }}
                    />
                  </div>
                </div>
              </div>

              {/* 3 Stats Boxes */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                <div className="p-2.5 sm:p-3 rounded-2xl border border-white/[0.08] bg-black/50 text-left">
                  <div className="font-['Manrope'] text-base sm:text-lg font-bold text-white tracking-tight">
                    1,449
                  </div>
                  <div className="font-mono text-[9px] tracking-wider text-text-muted uppercase mt-0.5">
                    CONTEST RATING
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl border border-white/[0.08] bg-black/50 text-left">
                  <div className="font-['Manrope'] text-base sm:text-lg font-bold text-white tracking-tight">
                    5
                  </div>
                  <div className="font-mono text-[9px] tracking-wider text-text-muted uppercase mt-0.5">
                    CONTESTS
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-2xl border border-white/[0.08] bg-black/50 text-left">
                  <div className="font-['Manrope'] text-base sm:text-lg font-bold text-white tracking-tight">
                    281
                  </div>
                  <div className="font-mono text-[9px] tracking-wider text-text-muted uppercase mt-0.5">
                    ACTIVE DAYS
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Profile CTA Link */}
            <div className="pt-3.5 border-t border-white/[0.08] mt-4">
              <a
                href="https://leetcode.com/u/AtharvaKote81/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-[#FFA116]/40 bg-[#FFA116]/10 hover:bg-[#FFA116]/20 text-[#FFA116] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_18px_rgba(255,161,22,0.35)] transition-all duration-300 group/btn"
              >
                <SiLeetcode size={14} className="group-hover/btn:scale-110 transition-transform" />
                <span>VIEW LEETCODE PROFILE</span>
                <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default BackendDevops;
