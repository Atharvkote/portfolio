import { useState } from "react";
import { motion } from "framer-motion";
import { SiGmail } from "react-icons/si";

import {
  Server,
  Copy,
  Check,
  ArrowUpRight,
  Radio,
  Book,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { toast } from "sonner";
import CrystalizedBall from "../ui/crystalized-ball";
import Shredder from "../ui/shredder";
import { backendTabs, portfolioData } from "../../data/portfolio";
import { LiveClock } from "./live-clock";

export function BackendDevops() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("atharvkote3@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard: atharvkote3@gmail.com");
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      shortName: "GitHub",
      url: portfolioData.socials.github,
      icon: FaGithub,
    },
    {
      name: "Instagram",
      shortName: "Insta",
      url: portfolioData.socials.instagram,
      icon: FaInstagram,
    },
    {
      name: "X (Twitter)",
      shortName: "X",
      url: portfolioData.socials.twitter,
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      shortName: "LinkedIn",
      url: portfolioData.socials.linkedin,
      icon: FaLinkedinIn,
    },
  ];

  const activeTabDetails = backendTabs[activeTab];

  return (
    <section id="backend-devops" className="py-20 sm:py-24 relative overflow-hidden select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          02. ARCHITECTURE & SYSTEMS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Design Principles &amp; <span className="badone-font italic font-normal text-primary">Profiles</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Architecting resilient backend microservices and automated cloud delivery pipelines.
        </p>
      </motion.div>

      <div className="flex flex-col gap-5 sm:gap-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[520px]"
          >
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#01d8b4]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/20 transition-all duration-500" />

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

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="lg:col-span-6 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[520px]"
          >
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#01d8b4]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/20 transition-all duration-500" />

            <div>
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

              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Resilient systems <span className="badone-font italic font-normal text-[#01d8b4]">you can trust.</span>
                </h3>
              </div>

              <p className="text-text-muted text-xs sm:text-sm mt-1.5 leading-relaxed">
                Clean abstractions, zero-trust cryptographic guardrails, and sub-millisecond async pipelines engineered without unnecessary bloat.
              </p>
            </div>

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

          <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 justify-between">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[250px]"
            >
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

              <div className="my-2">
                <h3 className="font-['Manrope'] font-bold text-base text-white tracking-tight uppercase leading-snug">
                  LET&apos;S BUILD SOMETHING{" "}
                  <span className="badone-font italic font-normal text-[#01d8b4] lowercase block">
                    that actually works.
                  </span>
                </h3>

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

              <a
                href="#contact"
                className="w-full py-2.5 px-3 rounded-xl bg-primary text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-hover-primary hover:shadow-[0_0_20px_rgba(1,216,180,0.5)] transition-all duration-300"
              >
                <span>CONNECT NOW</span>
                <ArrowUpRight size={13} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex-1 rounded-3xl border border-[#0A66C2]/35 bg-[#0c0c12]/90 backdrop-blur-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#0A66C2]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(10,102,194,0.18)] min-h-[250px]"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#0A66C2]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#0A66C2]/35 transition-all duration-500" />

              <div className="flex items-center justify-between z-10">
                <div className="w-7 h-7 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center font-bold text-xs shadow-[0_0_12px_rgba(10,102,194,0.6)]">
                  <FaLinkedinIn size={14} />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/20 text-[#60a5fa] font-mono text-[10px] tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse" />
                  <span>LINKEDIN</span>
                </div>
              </div>

              <div className="my-2 z-10">
                <h3 className="font-['Manrope'] font-bold text-base text-white tracking-tight leading-snug">
                  Let&apos;s Connect{" "}
                  <span className="text-[#3897f0] font-semibold block">
                    on LinkedIn.
                  </span>
                </h3>

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
              </div>
            </motion.div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          <div className="order-2 md:col-span-6 lg:col-span-4 flex flex-col gap-4 sm:gap-5 justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[200px]"
            >
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#01d8b4]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/20 transition-all duration-500" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-primary  bg-linear-to-l from-primary to-bg">
                  <Book size={12} className="text-[#01d8b4]" />
                  <span className="font-mono text-[10px] text-text tracking-widest uppercase ">
                    Philosophy
                  </span>
                </div>

              </div>

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

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="flex-1 rounded-3xl border border-white/[0.08] bg-[#0c0c12]/90 backdrop-blur-xl p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[220px]"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/[0.06] rounded-full blur-3xl pointer-events-none group-hover:bg-[#01d8b4]/15 transition-all duration-500" />

              <div className="flex items-center justify-between z-10">
                <div className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-xs shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
                  <FaGithub size={15} />
                </div>

              </div>

              <div className="my-2 z-10">
                <h3 className="font-['Manrope'] font-bold text-base text-white tracking-tight ">
                  Explore Code
                  <span className="text-[#01d8b4] font-semibold block">
                    on GitHub.
                  </span>
                </h3>

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
          <LiveClock />

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.28 }}
            className="order-3 md:col-span-12 lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#FFA116]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[420px]"
          >
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#FFA116]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FFA116]/20 transition-all duration-500" />

            <div>
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

              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#FFA116] font-['Manrope'] tracking-tight">
                  300+
                </span>
                <span className="text-text-muted text-xs sm:text-sm font-medium">
                  problems solved
                </span>
              </div>

              <div className="space-y-3.5 mb-5">
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
