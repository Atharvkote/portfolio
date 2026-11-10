import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaAws,
  FaJava,
  FaJenkins,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiApachekafka,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiPython,
  SiVite,
  SiExpress,
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiPostgresql,
  SiGithubactions,
  SiRabbitmq,
  SiOwasp,
  SiBurpsuite,
  SiKalilinux,
  SiMetasploit,
  SiWireshark,
  SiSplunk,
  SiElasticsearch,
  SiAnthropic,
  SiOllama,
  SiFramer,
  SiSwagger,
  SiPostman,
  SiFlyway,
  SiShadcnui,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import {
  Monitor,
  Database,
  Cloud,
  Network,
  Shield,
  Code2,
  Bot,
  Zap,
  Terminal,
  ArrowRightLeft,
  Eye,
  ShieldAlert,
  Server,
} from "lucide-react";
import type { IconType } from "react-icons";

// ─── Precision Pill Component (No Truncation) ───
interface TechPillProps {
  name: string;
  icon: IconType | React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color?: string;
  className?: string;
}

function TechPill({ name, icon: Icon, color, className = "" }: TechPillProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -1 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0c1212]/90 border border-white/[0.08] hover:border-[#01d8b4]/50 hover:bg-[#01d8b4]/10 transition-all duration-200 shadow-sm cursor-default group shrink-0 ${className}`}
    >
      <Icon
        size={15}
        style={{ color: color || "#01d8b4" }}
        className="shrink-0 transition-transform group-hover:scale-110"
      />
      <span className="font-['Manrope'] text-xs font-medium text-white/90 group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}

// ─── Main TechStack Component ───
export function TechStack() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative select-none">
      {/* ── Section Title & Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-14"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          02. CORE COMPETENCIES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          The Magic<span className="badone-font italic font-normal text-primary"> Behind</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 max-w-md sm:max-w-lg mx-auto leading-relaxed">
          Technologies I use to build, secure, and ship scalable systems.
        </p>
      </motion.div>

      {/* ── Clean Bento Grid Layout ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* ════════════════════════════════════════════════════
            1. BACKEND (Tall Card: Left side, spans 4 cols & 2 rows)
            Theme: Spring Boot (#6db33f)
            10 Pills arranged symmetrically in 5 pairs
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-4 lg:row-span-2 rounded-3xl border border-[#6db33f]/30 bg-gradient-to-b from-[#06180f]/95 via-[#08120d]/90 to-[#050c08]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#6db33f]/70 transition-all duration-300 shadow-[0_8px_36px_rgba(10,35,20,0.65)] hover:shadow-[0_12px_44px_rgba(109,179,63,0.22)]"
        >
          {/* Spring Boot Green Ambient Glow */}
          <div className="absolute -top-16 -left-16 w-52 h-52 bg-[#6db33f]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#6db33f]/30 transition-all duration-500" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#6db33f]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Spring Leaf Background Watermark */}
          <SiSpringboot
            size={180}
            className="absolute -bottom-10 -right-10 text-[#6db33f]/[0.05] pointer-events-none select-none group-hover:text-[#6db33f]/[0.08] transition-colors duration-500"
          />

          <div className="flex flex-col justify-between h-full relative z-10">
            <div>
              {/* Spring Boot Header Badge */}
              <div className="flex items-center gap-2 mb-2">
                <Server size={14} className="text-[#6db33f]" />
                <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                  BACKEND ENGINEERING
                </span>
              </div>

              {/* Title & Description with Spring Green Accent */}
              <div className="mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Node &amp; <span className="badone-font italic font-normal text-[#6db33f]">Spring Boot</span>
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed mt-1">
                  Enterprise microservices, distributed workflows, and cloud-native backends engineered with Spring Boot.
                </p>
              </div>

              {/* 11 Tech Pills arranged in balanced layout */}
              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <TechPill name="Spring Boot" icon={SiSpringboot} color="#6db33f" className="border-[#6db33f]/30 bg-[#6db33f]/10" />
                  <TechPill name="Spring Security" icon={SiSpringsecurity} color="#6db33f" className="border-[#6db33f]/30 bg-[#6db33f]/10" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <TechPill name="Spring Data JPA" icon={Database} color="#6db33f" className="border-[#6db33f]/20" />
                  <TechPill name="Hibernate" icon={SiHibernate} color="#bfa15f" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <TechPill name="Flyway" icon={SiFlyway} color="#CC0000" />
                  <TechPill name="REST APIs" icon={ArrowRightLeft} color="#01d8b4" />
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/[0.06]">
                  <TechPill name="Node.js" icon={FaNodeJs} color="#68a063" />
                  <TechPill name="Express" icon={SiExpress} color="#ffffff" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <TechPill name="Swagger Docs" icon={SiSwagger} color="#85EA2D" />
                  <TechPill name="Postman" icon={SiPostman} color="#FF6C37" />
                </div>
                <div className="pt-1 border-t border-white/[0.06]">
                  <TechPill name="Socket.IO" icon={SiSocketdotio} color="#ffffff" className="w-full justify-center" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            2. FRONTEND (Top Middle Card: 5 cols)
            Theme: React (#61DAFB)
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="lg:col-span-5 rounded-3xl border border-[#61DAFB]/25 bg-gradient-to-b from-[#04121a]/95 via-[#061017]/90 to-[#04090e]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#61DAFB]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(4,20,30,0.65)] hover:shadow-[0_12px_44px_rgba(97,218,251,0.18)]"
        >
          {/* React Cyan Ambient Glow */}
          <div className="absolute -top-14 -right-14 w-48 h-48 bg-[#61DAFB]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#61DAFB]/25 transition-all duration-500" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#61DAFB]/10 rounded-full blur-2xl pointer-events-none" />

          {/* React Logo Watermark */}
          <FaReact
            size={170}
            className="absolute -bottom-10 -right-10 text-[#61DAFB]/[0.05] pointer-events-none select-none group-hover:text-[#61DAFB]/[0.09] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Monitor size={14} className="text-[#61DAFB]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                FRONTEND
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Component Design &amp; <span className="badone-font italic font-normal text-[#61DAFB]">Styling</span>
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mt-0.5">
                Modern, responsive and performant web interfaces.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <TechPill name="React" icon={FaReact} color="#61DAFB" className="border-[#61DAFB]/30 bg-[#61DAFB]/10" />
              <TechPill name="Next.js" icon={SiNextdotjs} color="#ffffff" />
              <TechPill name="Vite" icon={SiVite} color="#bd34fe" />
              <TechPill name="Tailwind CSS" icon={SiTailwindcss} color="#06B6D4" />
              <TechPill name="shadcn/ui" icon={SiShadcnui} color="#ffffff" />
              <TechPill name="Framer Motion" icon={SiFramer} color="#F0047F" />
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="lg:col-span-3 rounded-3xl border border-[#336791]/30 bg-gradient-to-b from-[#07131e]/95 via-[#060e17]/90 to-[#04080e]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#4183ba]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(7,20,32,0.65)] hover:shadow-[0_12px_44px_rgba(51,103,145,0.22)]"
        >
          {/* PostgreSQL Blue Ambient Glow */}
          <div className="absolute -bottom-12 -right-12 w-44 h-44 bg-[#336791]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#4183ba]/25 transition-all duration-500" />
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#336791]/10 rounded-full blur-2xl pointer-events-none" />

          {/* PostgreSQL Elephant Watermark */}
          <SiPostgresql
            size={170}
            className="absolute -bottom-8 -right-8 text-[#336791]/[0.06] pointer-events-none select-none group-hover:text-[#4183ba]/[0.10] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Database size={14} className="text-[#4183ba]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                DATABASES
              </span>
            </div>

            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                SQL &amp; <span className="badone-font italic font-normal text-[#2496ED]">No-SQL</span>
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                Relational schemas, NoSQL documents &amp; migration tooling.
              </p>
            </div>

            {/* 4 Database Tech Pills */}
            <div className="grid grid-cols-2 gap-2">
              <TechPill name="PostgreSQL" icon={SiPostgresql} color="#4183ba" className="border-[#336791]/40 bg-[#336791]/15" />
              <TechPill name="MongoDB" icon={SiMongodb} color="#47A248" />
              <TechPill name="Redis" icon={SiRedis} color="#DC382D" />
              <TechPill name="MySQL" icon={SiMysql} color="#00758F" />
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            4. DEVOPS & CLOUD (Middle Center Card: 5 cols)
            Theme: Docker (#2496ED)
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="lg:col-span-5 rounded-3xl border border-[#2496ED]/25 bg-gradient-to-b from-[#041322]/95 via-[#06111e]/90 to-[#030910]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#2496ED]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(4,20,40,0.65)] hover:shadow-[0_12px_44px_rgba(36,150,237,0.18)]"
        >
          {/* Docker Blue Ambient Glow */}
          <div className="absolute -top-14 -right-14 w-48 h-48 bg-[#2496ED]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#2496ED]/25 transition-all duration-500" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2496ED]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Docker Whale Watermark */}
          <FaDocker
            size={170}
            className="absolute -bottom-8 -right-8 text-[#2496ED]/[0.05] pointer-events-none select-none group-hover:text-[#2496ED]/[0.09] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Cloud size={14} className="text-[#2496ED]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                DEVOPS &amp; MONITORING
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Deployment &amp; <span className="badone-font italic font-normal text-[#2496ED]">CI</span>
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed mt-0.5">
                Build, deploy and scale with modern DevOps practices.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <TechPill name="Docker" icon={FaDocker} color="#2496ED" className="border-[#2496ED]/30 bg-[#2496ED]/10" />
              <TechPill name="AWS" icon={FaAws} color="#FF9900" />
              <TechPill name="Jenkins" icon={FaJenkins} color="#D24939" />
              <TechPill name="GitHub Actions" icon={SiGithubactions} color="#2088FF" />
              <TechPill name="Prometheus" icon={SiPrometheus} color="#E6522C" />
              <TechPill name="Grafana" icon={SiGrafana} color="#F46800" />
              <TechPill name="Loki" icon={SiGrafana} color="#FFA033" />
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            5. MESSAGING & STREAMING (Middle Right Card: 3 cols)
            Theme: Apache Kafka (#ffffff)
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-3 rounded-3xl border border-white/20 bg-gradient-to-b from-[#141416]/95 via-[#101012]/90 to-[#09090a]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-white/50 transition-all duration-300 shadow-[0_8px_32px_rgba(20,20,20,0.65)] hover:shadow-[0_12px_44px_rgba(255,255,255,0.12)]"
        >
          {/* Kafka Silver/White Glow */}
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/[0.08] rounded-full blur-2xl pointer-events-none group-hover:bg-white/[0.14] transition-all duration-500" />
          <div className="absolute -top-10 -left-10 w-28 h-28 bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

          {/* Apache Kafka Logo Watermark */}
          <SiApachekafka
            size={160}
            className="absolute -bottom-8 -right-8 text-white/[0.05] pointer-events-none select-none group-hover:text-white/[0.09] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Network size={14} className="text-white/80" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                MESSAGING & STREAMING
              </span>
            </div>

            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Brokers &amp; <span className="badone-font italic font-normal text-white">Queues</span>
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                Event pub/sub &amp; high-throughput stream ingestion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <TechPill name="Kafka" icon={SiApachekafka} color="#ffffff" className="border-white/30 bg-white/10" />
              <TechPill name="RabbitMQ" icon={SiRabbitmq} color="#FF6600" />
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            6. SECURITY & TOOLS (Bottom Left: 5 cols)
            Theme: Kali Linux (#557C94)
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="lg:col-span-5 rounded-3xl border border-[#557C94]/30 bg-gradient-to-b from-[#07131d]/95 via-[#060e16]/90 to-[#04080e]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#2596CD]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(7,19,29,0.65)] hover:shadow-[0_12px_44px_rgba(85,124,148,0.22)]"
        >
          {/* Kali Linux Ambient Glow */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#557C94]/18 rounded-full blur-3xl pointer-events-none group-hover:bg-[#2596CD]/25 transition-all duration-500" />
          <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#557C94]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Kali Dragon Watermark */}
          <SiKalilinux
            size={170}
            className="absolute -bottom-8 -right-8 text-[#557C94]/[0.06] pointer-events-none select-none group-hover:text-[#2596CD]/[0.10] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} className="text-[#557C94]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                SECURITY &amp; TOOLS
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Pen-Testing &amp; <span className="badone-font italic font-normal text-[#557C94]">CTI</span>
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                Application security, network auditing, and threat detection.
              </p>
            </div>

            {/* 3x3 Security Grid without truncation */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <TechPill name="OWASP Top 10" icon={SiOwasp} color="#ffffff" />
              <TechPill name="Burp Suite" icon={SiBurpsuite} color="#FF6633" />
              <TechPill name="Nmap" icon={Eye} color="#00F0C0" />
              <TechPill name="Kali Linux" icon={SiKalilinux} color="#557C94" className="border-[#557C94]/40 bg-[#557C94]/15" />
              <TechPill name="Metasploit" icon={SiMetasploit} color="#2596CD" />
              <TechPill name="Wireshark" icon={SiWireshark} color="#1679A7" />
              <TechPill name="Splunk>" icon={SiSplunk} color="#65A637" />
              <TechPill name="Snort®" icon={ShieldAlert} color="#FF6B8B" />
              <TechPill name="ELK Stack" icon={SiElasticsearch} color="#005571" />
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            7. LANGUAGES (Bottom Middle: 3 cols)
            Theme: Java Red (#EF4444 / #EA2D2E)
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.28 }}
          className="lg:col-span-3 rounded-3xl border border-[#EF4444]/30 bg-gradient-to-b from-[#1c0808]/95 via-[#140606]/90 to-[#0c0303]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#EF4444]/70 transition-all duration-300 shadow-[0_8px_32px_rgba(28,8,8,0.65)] hover:shadow-[0_12px_44px_rgba(239,68,68,0.22)]"
        >
          {/* Java Red Ambient Glow */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#EF4444]/18 rounded-full blur-2xl pointer-events-none group-hover:bg-[#EF4444]/28 transition-all duration-500" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#EF4444]/12 rounded-full blur-2xl pointer-events-none" />

          {/* Java Coffee Cup Watermark */}
          <FaJava
            size={160}
            className="absolute -bottom-8 -right-8 text-[#EF4444]/[0.06] pointer-events-none select-none group-hover:text-[#EF4444]/[0.10] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Code2 size={14} className="text-[#EF4444]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                LANGUAGES
              </span>
            </div>

            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Coding Basic
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                Core typed and scripting languages for production code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <TechPill name="Java" icon={FaJava} color="#EF4444" className="border-[#EF4444]/40 bg-[#EF4444]/15" />
              <TechPill name="JavaScript" icon={SiJavascript} color="#F7DF1E" />
              <TechPill name="TypeScript" icon={SiTypescript} color="#3178C6" />
              <TechPill name="Python" icon={SiPython} color="#3776AB" />
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════
            8. AI CODING AGENTS (Bottom Right: 4 cols)
            Theme: Claude (#D97706)
        ════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="lg:col-span-4 rounded-3xl border border-[#D97706]/25 bg-gradient-to-b from-[#180d07]/95 via-[#130a05]/90 to-[#0a0502]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#D97706]/65 transition-all duration-300 shadow-[0_8px_32px_rgba(24,13,7,0.65)] hover:shadow-[0_12px_44px_rgba(217,119,6,0.18)]"
        >
          {/* Claude Warm Terracotta Ambient Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D97706]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D97706]/25 transition-all duration-500" />
          <div className="absolute -top-10 -left-10 w-28 h-28 bg-[#D97706]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Anthropic Claude Watermark */}
          <SiAnthropic
            size={160}
            className="absolute -bottom-8 -right-8 text-[#D97706]/[0.05] pointer-events-none select-none group-hover:text-[#D97706]/[0.09] transition-colors duration-500"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Bot size={14} className="text-[#D97706]" />
              <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                AI CODING AGENTS
              </span>
            </div>

            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                AI Assisted &amp; <span className="badone-font italic font-normal text-[#D97706]">Development</span>
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mt-0.5">
                Autonomous workflows and pair programming agents.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <TechPill name="Claude" icon={SiAnthropic} color="#D97706" className="border-[#D97706]/30 bg-[#D97706]/10" />
              <TechPill name="GitHub Copilot" icon={FaGithub} color="#ffffff" />
              <TechPill name="Cursor" icon={Terminal} color="#ffffff" />
              <TechPill name="Ollama" icon={SiOllama} color="#ffffff" />
              <TechPill name="Antigravity" icon={Zap} color="#01d8b4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default TechStack;
