import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaDocker, FaGithub, FaLinux, FaAws, FaJava,
  FaJenkins,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiFirebase, SiArduino, SiEspressif, SiPython,
  SiJavascript, SiPostman, SiGit,
  SiTerraform,
  SiApachekafka,
  SiRazorpay,
  SiJsonwebtokens,
  SiNginx,
  SiRedis,
  SiSocketdotio,
  SiFastapi,
  SiRedux,
  SiPlatformio,
  SiWireshark,
  SiMetasploit,
  SiKalilinux,
  SiBurpsuite,
  SiOwasp,
  SiVim,
  SiSentry,
  SiGrafana,
  SiPrometheus,
  SiGithubactions,
  SiHackthebox,
  SiGnubash,
  SiYaml,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { QrCodeIcon, ScanFace } from "lucide-react";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const techStack: TechItem[] = [
  // Programming Languages
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "YAML", icon: SiYaml, color: "#CB171E" },
  { name: "Bash", icon: SiGnubash, color: "#4EAA25" },

  // Frontend
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },

  // Backend & APIs
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "REST APIs", icon: SiFastapi, color: "#009688" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
  { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
  { name: "Razorpay", icon: SiRazorpay, color: "#0C2451" },
  { name: "Kafka", icon: SiApachekafka, color: "#231F20" },

  // Databases
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },

  // DevOps & Cloud
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "Jenkins", icon: FaJenkins, color: "#D24939" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Terraform", icon: SiTerraform, color: "#646CFF" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "NGINX", icon: SiNginx, color: "#009639" },
  { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
  { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  { name: "Loki", icon: SiGrafana, color: "#F46800" },
  { name: "Sentry", icon: SiSentry, color: "#362D59" },
  { name: "Vim", icon: SiVim, color: "#019733" },

  // Security & Testing
  { name: "Penetration Testing", icon: SiHackthebox, color: "#9FEF00" },
  { name: "Web Security", icon: SiOwasp, color: "#000000" },
  { name: "OWASP Top 10", icon: SiOwasp, color: "#000000" },
  { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633" },
  { name: "Kali Linux", icon: SiKalilinux, color: "#557C94" },
  { name: "Metasploit", icon: SiMetasploit, color: "#2596CD" },
  { name: "Nmap", icon: ScanFace, color: "#214478" },
  { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
  { name: "SQL Injection Testing", icon: SiMysql, color: "#4479A1" },
  { name: "XSS Detection", icon: SiJavascript, color: "#F7DF1E" },

  // Tools & Workflow
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },

  // Systems & IoT
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "Arduino", icon: SiArduino, color: "#00979D" },
  { name: "ESP32", icon: SiEspressif, color: "#E7352C" },
  { name: "Embedded Systems", icon: SiPlatformio, color: "#F5822A" },
  { name: "QR/Barcode Systems", icon: QrCodeIcon, color: "#ffffff" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function TechStack() {
  return (
    <section className="py-4 md:py-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="num">02.</span> My Tech Stack
        </motion.h2>

      <div className="max-w-[1000px] mx-auto text-center">

        {/* Tech Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={badgeVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 0 20px ${tech.color}15, 0 4px 16px rgba(0,0,0,0.3)`,
              }}
              className="glass-card cursor-pointer flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-bg-card border border-border hover:border-border-hover transition-all duration-200 cursor-default group"
            >
              <tech.icon
                size={16}
                style={{ color: tech.color }}
                className="shrink-0 group-hover:drop-shadow-[0_0_6px_var(--tw-shadow-color)] transition-all"
              />
              <span className="font-body text-[13px] text-text-secondary group-hover:text-text-primary transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
