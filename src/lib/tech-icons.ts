// techIcons.ts
import {
  FaReact, FaNodeJs, FaDocker, FaGithub, FaAws, FaJava, FaJenkins
} from "react-icons/fa";

import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb,
  SiMysql, SiFirebase, SiVercel, SiPython, SiJavascript,
  SiTerraform, SiApachekafka, SiRazorpay, SiJsonwebtokens,
  SiNginx, SiRedis, SiSocketdotio, SiRedux,
  SiGrafana, SiPrometheus, SiGithubactions,

  // ✅ NEW IMPORTS
  SiPostgresql, SiSupabase, SiPrisma,
  SiKubernetes, SiDigitalocean,
  SiHtml5, SiSass,
  SiVite, SiWebpack,
  SiPostman, SiInsomnia,
  SiJest, SiCypress,
  SiLinux, SiUbuntu,
  SiCloudflare,
  SiElectron,
  SiReduxsaga,
  SiZod,
  SiStripe,
  SiOpenai,
  SiPhp,
  SiYaml,
  SiShell,
  SiPytorch
} from "react-icons/si";
import { BsCss , } from "react-icons/bs";
import type { IconType } from "react-icons";
import { QrCode } from "lucide-react";

interface IconItem {
  icon: IconType;
  color: string;
}

export const TECH_ICONS: Record<string, IconItem> = {
  // Languages
  "Java": { icon: FaJava, color: "#ED8B00" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "PHP": { icon: SiPhp, color: "#4F5D95" },
  "YAML": { icon: SiYaml, color: "#DC382D" },
  "Bash": { icon: SiShell, color: "#47A248" },

  
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: BsCss, color: "#1572B6" },
  "SASS": { icon: SiSass, color: "#CC6699" },

  // Frontend
  "React.js": { icon: FaReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "Redux": { icon: SiRedux, color: "#764ABC" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },


  "Vite": { icon: SiVite, color: "#646CFF" },
  "Webpack": { icon: SiWebpack, color: "#8DD6F9" },
  "Electron": { icon: SiElectron, color: "#47848F" },

  // State Mgmt Advanced
  "Redux Thunk": { icon: SiRedux, color: "#764ABC" },
  "Redux Saga": { icon: SiReduxsaga, color: "#999999" },

  // Backend
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  "Socket.io": { icon: SiSocketdotio, color: "#ffffff" },
  "JWT-RS256": { icon: SiJsonwebtokens, color: "#000000" },

  // Databases
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Redis": { icon: SiRedis, color: "#DC382D" },

  
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },

  // DevOps
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "Jenkins": { icon: FaJenkins, color: "#D24939" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Terraform": { icon: SiTerraform, color: "#646CFF" },
  "AWS EC2": { icon: FaAws, color: "#FF9900" },
  "AWS S3": { icon: FaAws, color: "#FF9900" },
  "NGINX": { icon: SiNginx, color: "#009639" },

  
  "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
  "DigitalOcean": { icon: SiDigitalocean, color: "#0080FF" },
  "Cloudflare": { icon: SiCloudflare, color: "#F38020" },
  "Linux": { icon: SiLinux, color: "#FCC624" },
  "Ubuntu": { icon: SiUbuntu, color: "#E95420" },

  // Monitoring
  "Prometheus": { icon: SiPrometheus, color: "#E6522C" },
  "Grafana": { icon: SiGrafana, color: "#F46800" },
  "Loki": { icon: SiGrafana, color: "#F46800" },

  // Testing / API Tools
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Insomnia": { icon: SiInsomnia, color: "#4000BF" },
  "Jest": { icon: SiJest, color: "#C21325" },
  "Cypress": { icon: SiCypress, color: "#17202C" },

  // Others
  "Kafka": { icon: SiApachekafka, color: "#FFFFFF" },
  "Apache Kafka": { icon: SiApachekafka, color: "#FFFFFF" },
  "Razorpay": { icon: SiRazorpay, color: "#0C2451" },
  "Stripe": { icon: SiStripe, color: "#635BFF" },
  "Zod": { icon: SiZod, color: "#3E67B1" },
  "OpenAI": { icon: SiOpenai, color: "#412991" },
  "PyTorch": { icon: SiPytorch, color: "#FF6C37" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "QR/Barcode Systems": { icon: QrCode, color: "#ffffff" },

  // Version Control
  "GitHub": { icon: FaGithub, color: "#ffffff" },
};

export function getTechIcon(techName: string) {
  return TECH_ICONS[techName];
}