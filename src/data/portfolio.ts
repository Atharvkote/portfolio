import React from "react";
import {
  Code2,
  Server,
  Cloud,
  Braces,
  Sparkles,
  ShieldCheck,
  Zap,
  Network,
  Database,
  Activity,
  Lock,
  QrCode,
  Cpu,
  Radio,
  Layers,
  Workflow,
  ArrowRightLeft,
  KeyRound,
  ScrollText,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaDocker,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiLeetcode,
  SiStackoverflow,
  SiApachekafka,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface LinkItem {
  label: string;
  handle: string;
  href: string;
  icon: IconType | React.FC<{ size?: number; className?: string }>;
}

export interface SkillSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.FC<{ size?: number; className?: string }> | React.ComponentType<{ size?: number; className?: string }>;
  skills: string[];
}

export interface ProjectPillar {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tabTitle: string;
  tabSubtitle: string;
  badge: string;
  title: string;
  slug: string;
  duration: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  link: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  logo: string;
  imagePrimary: string;
  imageSecondary: string;
  imageOne: string;
  imageTwo: string;
  pillars: ProjectPillar[];
}

export interface BackendTabItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface BackendTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  metric: string;
  items: BackendTabItem[];
}

export interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const SkillIcons = {
  Braces: Braces,
  Code2: Code2,
  Server: Server,
  Cloud: Cloud,
};

export const portfolioData = {
  name: "Atharva Kote",
  role: "Software Engineering Student | Problem Solver | Tech Enthusiast",
  email: "atharvkote3@gmail.com",
  socials: {
    github: "https://github.com/Atharvkote",
    linkedin: "https://www.linkedin.com/in/atharvakote",
    twitter: "https://twitter.com/ImAtharva81",
    leetcode: "https://leetcode.com/u/AtharvaKote81/",
    instagram: "https://www.instagram.com/___atharv_81",
    stackoverflow: "https://stackoverflow.com/users/21648924/atharva-kote",
  },
  about:
    "Passionate about building impactful software that bridges technology and real-world challenges. Expertise in web development, cloud computing, DevOps, and cybersecurity. Dedicated to crafting scalable and user-centric solutions.",
  skills: [
    {
      category: "Backend Engineering",
      items: [
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "Flyway",
        "REST APIs",
        "Node.js",
        "Express",
        "Swagger Docs",
        "Postman",
        "Socket.IO",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      category: "DevOps & Monitoring",
      items: ["Docker", "AWS", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Loki"],
    },
    {
      category: "Messaging & Streaming",
      items: ["Apache Kafka", "RabbitMQ"],
    },
    {
      category: "Security & Tools",
      items: [
        "OWASP Top 10",
        "Burp Suite",
        "Nmap",
        "Kali Linux",
        "Metasploit",
        "Wireshark",
        "Splunk",
        "Snort",
        "ELK Stack",
      ],
    },
    {
      category: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      category: "AI Coding Agents",
      items: ["Claude", "GitHub Copilot", "Cursor", "Ollama", "Antigravity"],
    },
  ],
  skillsDetailed: {
    quote: "Development: Turning Coffee into Code then Magic.",
    columns: [
      {
        title: "FRONTEND",
        headline: "Pixel-Perfect, Interactive & Responsive Interfaces.",
        description:
          "Crafting intuitive user experiences with modern frameworks, animations, and responsive design.",
        items: [
          {
            num: 1,
            title: "Component Design",
            description:
              "Reusable, composable UI components built with React and Next.js for scalable frontends.",
          },
          {
            num: 2,
            title: "State Management",
            description:
              "Efficient state handling with Context API, Zustand, and server-side rendering patterns.",
          },
          {
            num: 3,
            title: "Responsive Design",
            description:
              "Mobile-first layouts with Tailwind CSS, CSS Grid, and Flexbox for every screen size.",
          },
          {
            num: 4,
            title: "Animations & UX",
            description:
              "Smooth micro-interactions and scroll-driven animations with Framer Motion and CSS.",
          },
        ],
      },
      {
        title: "BACKEND",
        headline: "Resilient, Modular & High-Performance Architecture.",
        description:
          "Build robust systems with clean logic, optimised for speed, scalability, and security.",
        items: [
          {
            num: 1,
            title: "Architecture",
            description:
              "Modular, layered architecture ensuring maintainability and reusability across services.",
          },
          {
            num: 2,
            title: "Data Flow",
            description:
              "Efficient API and database interactions with clean request/response handling patterns.",
          },
          {
            num: 3,
            title: "Security",
            description:
              "Input validation, encryption, and auth protocols to protect data and services.",
          },
          {
            num: 4,
            title: "Microservices",
            description:
              "Decoupled service architecture with independent deployment, scaling, and fault isolation.",
          },
          {
            num: 5,
            title: "Performance",
            description:
              "Connection pooling, caching, and async processing for lightning-fast execution.",
          },
        ],
      },
      {
        title: "DEVOPS",
        headline: "Automated, Scalable & CD Pipelines.",
        description:
          "Streamlining infrastructure and CI/CD workflows to support seamless development.",
        items: [
          {
            num: 1,
            title: "Infrastructure as Code",
            description:
              "Declarative configurations using tools like Terraform & CloudFormation.",
          },
          {
            num: 2,
            title: "CI/CD Pipelines",
            description:
              "Automated testing, build, and deployment for rapid delivery cycles.",
          },
          {
            num: 3,
            title: "Monitoring",
            description:
              "Logging, alerting, and metrics tracking for system reliability.",
          },
          {
            num: 4,
            title: "Scalability",
            description:
              "Cloud-native tools and container orchestration for on-demand scaling.",
          },
        ],
      },
    ],
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Java", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "TypeScript", level: 80 },
          { name: "PHP", level: 70 },
          { name: "SQL", level: 85 },
          { name: "Python", level: 75 },
        ],
      },
      {
        name: "Frontend",
        skills: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "HTML/CSS", level: 95 },
          { name: "Tailwind CSS", level: 92 },
          { name: "shadcn/ui", level: 88 },
          { name: "Framer Motion", level: 82 },
        ],
      },
      {
        name: "Backend & Database",
        skills: [
          { name: "Spring Boot", level: 90 },
          { name: "Spring Security", level: 85 },
          { name: "Hibernate / JPA", level: 85 },
          { name: "Node.js", level: 85 },
          { name: "Express.js", level: 82 },
          { name: "PostgreSQL", level: 88 },
          { name: "Redis", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "REST APIs", level: 90 },
        ],
      },
      {
        name: "DevOps & Tools",
        skills: [
          { name: "Docker", level: 82 },
          { name: "Apache Kafka", level: 85 },
          { name: "GitHub Actions", level: 85 },
          { name: "AWS EC2 / S3", level: 80 },
          { name: "Linux / Kali Linux", level: 82 },
          { name: "Prometheus & Grafana", level: 78 },
        ],
      },
    ],
  },
  experience: [
    {
      company: "Google Developer Student Club",
      role: "Competitive Programmer",
      period: "November 2024 — Present",
      type: "Community",
      image: "/image/gdsc.png",
      link: "https://www.linkedin.com/company/google-developer-group-sanjivani-coe",
      description: [
        "Organized a 5-week competitive programming series with 100+ weekly participants, designing multiple HackerRank-style contests.",
        "Built and scaled a mentorship network, increasing club event participation by 40% while mentoring peers in Data Structures & Algorithms.",
        "Facilitated technical sessions on Cybersecurity, Google Cloud Platform, and emerging technologies for 50+ students.",
        "Solved 240+ LeetCode problems, strengthening advanced algorithmic and problem-solving skills.",
      ],
    },
    {
      company: "Sanjivani University",
      role: "Technical Co-Lead",
      period: "February 2025 — March 2025",
      type: "Leadership",
      image: "/image/university.png",
      link: "https://www.sanjivaniuniversity.edu.in/",
      description: [
        "Co-led development and deployment of a full-scale ticket booking platform handling 11,000+ user registrations and 2,000+ ticket sales.",
        "Collaborated on system design and ensured platform stability during high-traffic usage for a large-scale live concert event.",
        "Coordinated on-ground operations including wristband distribution and resolved 100+ real-time attendee queries.",
        "Bridged technical and operational execution by contributing to platform development, logistics planning, and live event coordination.",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Hons. in Cybersecurity",
      school: "Sanjivani College of Engineering, Kopargaon",
      university: "Savitribai Phule Pune University (SPPU)",
      period: "2023 — Present",
      score: "CGPA: 8.7",
      status: "Currently Pursuing",
      highlights: [
        "Specialization in Cybersecurity and Threat Analysis",
        "Distributed Systems, Cloud and Microservices",
        "Data Structures and Algorithmic Problem Solving",
      ],
    },
    {
      degree: "Higher Secondary Education (HSC)",
      stream: "Science",
      school: "Sanjivani Junior College, Kopargaon",
      board: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
      period: "2021 — 2023",
      score: "80.89%",
      status: "Completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      stream: "General Education",
      school: "Saibaba English Medium School, Shirdi",
      board: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
      period: "2010 — 2021",
      score: "87.89%",
      status: "Completed",
    },
  ],
  projects: [
    {
      id: "jqube",
      name: "JQube",
      tabTitle: "JQube",
      tabSubtitle: "AI DevSecOps Platform",
      badge: "FEATURED PROJECT",
      title: "JQube — AI-Assisted DevSecOps Platform",
      slug: "jqube",
      duration: "Jan 2026 – Present",
      description:
        "A policy-controlled, AI-assisted DevSecOps platform that detects vulnerabilities and generates verified remediation PRs for GitHub workflows.",
      highlights: [
        "Automated SAST scans with Semgrep, Gitleaks, and Trivy",
        "AI remediation: Generate, validate and raise secure pull requests",
        "Enforce organizational security and review policies",
        "Asynchronous & scalable queue-based scan pipeline with Kafka",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "PostgreSQL",
        "Redis",
        "Apache Kafka",
        "GitHub Actions",
      ],
      github: "https://github.com/Atharvkote",
      link: "https://github.com/Atharvkote",
      liveUrl: "https://github.com/Atharvkote",
      githubUrl: "https://github.com/Atharvkote",
      featured: true,
      logo: "ShieldCheck",
      imagePrimary: "/image/jqube.png",
      imageSecondary: "/image/jqube-preview.png",
      imageOne: "/image/jqube.png",
      imageTwo: "/image/jqube-preview.png",
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

    {
      id: "vendex",
      name: "VenDeX",
      tabTitle: "VenDeX",
      tabSubtitle: "Kafka Microservices Mesh",
      badge: "EVENT-DRIVEN ARCHITECTURE",
      title: "VenDeX — Kafka Microservices Mesh",
      slug: "vendex",
      duration: "Ongoing",
      description:
        "High-throughput event-driven microservices architecture powered by Apache Kafka, Redis cluster caching, and Kong API Gateway with sub-20ms distributed message dispatch.",
      highlights: [
        "Improved response times by 70% using Redis caching",
        "Handled 10,000+ messages per minute via 3-node Kafka cluster",
        "Implemented JWT-RS256 secure inter-service authentication",
        "Centralized routing with Kong API Gateway",
        "Built CI/CD pipelines using Jenkins and GitHub Actions",
        "Integrated Prometheus, Grafana, and Loki for monitoring",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "Apache Kafka",
        "Redis",
        "Docker",
        "MongoDB",
        "Kong API Gateway",
        "JWT-RS256",
      ],
      github: "https://github.com/Atharvkote",
      link: "https://github.com/Atharvkote",
      liveUrl: "https://github.com/Atharvkote",
      githubUrl: "https://github.com/Atharvkote",
      featured: true,
      logo: "Kafka",
      imagePrimary: "/image/vednex2.png",
      imageSecondary:
        "https://res.cloudinary.com/dgz7hqbl9/image/upload/v1776587018/copy_of_screenshot_2026-03-22_232641_n4ppii_de8edb.png",
      imageOne: "/image/vednex2.png",
      imageTwo:
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

    {
      id: "concertsync",
      name: "ConcertSync",
      tabTitle: "ConcertSync",
      tabSubtitle: "Live Concert Ticketing",
      badge: "HIGH-CONCURRENCY TICKETING",
      title: "ConcertSync — Live Concert Ticketing Platform",
      slug: "concertsync",
      duration: "Feb 2025 – Mar 2025",
      description:
        "Scalable full-stack ticketing platform engineered for high-concurrency seat reservation, offline HMAC-SHA256 encrypted QR gate verification, and real-time sales analytics.",
      highlights: [
        "Handled 11,000+ user registrations with high availability",
        "Reduced entry delays by 60% using barcode verification",
        "Processed 2,000+ ticket transactions with real-time analytics",
        "Optimized backend for peak concurrent traffic handling",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS EC2",
        "AWS S3",
        "Socket.io",
        "Docker",
      ],
      github: "https://github.com/Atharvkote",
      link: "https://github.com/Atharvkote",
      liveUrl: "https://github.com/Atharvkote",
      githubUrl: "https://github.com/Atharvkote",
      featured: true,
      logo: "React.js",
      imagePrimary: "/image/Ticket.jpg",
      imageSecondary: "/image/Ticket-1.jpg",
      imageOne: "/image/Ticket.jpg",
      imageTwo: "/image/Ticket-1.jpg",
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

    {
      id: "fooddash",
      name: "FoodDash AI",
      tabTitle: "FoodDash AI",
      tabSubtitle: "Dining & Smart Kitchen",
      badge: "EDGE AI & REAL-TIME DINING",
      title: "FoodDash AI — Contactless Dining & Kitchen Platform",
      slug: "fooddash-ai",
      duration: "Apr 2025 – Jun 2025",
      description:
        "Contactless dining and smart kitchen platform with QR-based instant ordering, client-side TensorFlow.js recommendation engine, and real-time WebSocket kitchen display.",
      highlights: [
        "Improved table turnover by 35%",
        "Built AI recommendation engine using TensorFlow.js",
        "Processed 500+ transactions with 99.8% success rate",
        "Implemented real-time order tracking with Socket.io",
        "Integrated TOTP-based authentication and Razorpay payments",
      ],
      tech: [
        "Next.js",
        "Express.js",
        "MongoDB",
        "TensorFlow.js",
        "Socket.io",
        "Razorpay API",
        "Tailwind CSS",
        "Firebase",
      ],
      github: "https://github.com/Atharvkote",
      link: "https://github.com/Atharvkote",
      liveUrl: "https://github.com/Atharvkote",
      githubUrl: "https://github.com/Atharvkote",
      featured: true,
      logo: "PyTorch",
      imagePrimary: "/image/FD-1.png",
      imageSecondary: "/image/FD-2.png",
      imageOne: "/image/FD-1.png",
      imageTwo: "/image/FD-2.png",
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
  ] as ProjectItem[],
};

export const backendTabs: BackendTab[] = [
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

export const aboutCarouselItems: CarouselItem[] = [
  {
    src: "https://res.cloudinary.com/dgz7hqbl9/image/upload/w_600,c_limit,q_auto,f_auto/v1776017613/WhatsApp_Image_2026-04-12_at_11.41.15_PM_sxrxmm.jpg",
    alt: "Atharva Kote — Java Backend Developer",
    title: "Atharva Kote",
    subtitle: "Software Engineer",
  },
  {
    src: "/image/boat.jpg",
    alt: "Mountain sunset horizon",
    title: "Horizons",
    subtitle: "Exploration",
  },
  {
    src: "/image/green.png",
    alt: "Milky way over snowy mountain peaks",
    title: "Night Sky",
    subtitle: "Vision",
  },
];

export const skillSections: SkillSection[] = [
  {
    id: "backend",
    title: "Scalable Architecture",
    subtitle: "Resilient & High-Performance Systems",
    description:
      "Building event-driven microservices, real-time communication layers, caching pipelines, and robust API architectures designed for scale.",
    icon: SkillIcons.Server,
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "Flyway",
      "Node.js",
      "Express",
      "REST APIs",
      "Socket.IO",
      "Apache Kafka",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Swagger Docs",
      "Postman",
    ],
  },
  {
    id: "frontend",
    title: "Front-End",
    subtitle: "Pixel-Perfect & Interactive UIs",
    description:
      "Crafting responsive, animated, and accessible user interfaces with modern component-driven frameworks.",
    icon: SkillIcons.Code2,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "HTML/CSS",
      "Bootstrap",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Monitoring",
    subtitle: "Automated CI/CD & Infrastructure",
    description:
      "Containerization, orchestration, monitoring, and cloud-native infrastructure for zero-downtime delivery.",
    icon: SkillIcons.Cloud,
    skills: [
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "AWS S3",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "NGINX",
      "Cloudflare",
      "Prometheus",
      "Grafana",
      "Loki",
      "Linux",
      "Ubuntu",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity & Tools",
    subtitle: "Application Security & Threat Detection",
    description:
      "Penetration testing, application security, network auditing, and real-time threat detection.",
    icon: ShieldCheck,
    skills: [
      "OWASP Top 10",
      "Burp Suite",
      "Nmap",
      "Kali Linux",
      "Metasploit",
      "Wireshark",
      "Splunk",
      "Snort",
      "ELK Stack",
      "JWT-RS256",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    subtitle: "Core Programming Languages",
    description:
      "The foundational languages I write production code in — from systems to scripting to full-stack web.",
    icon: SkillIcons.Braces,
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "YAML", "Bash"],
  },
  {
    id: "ai",
    title: "AI & Modern Tooling",
    subtitle: "Autonomous Agents & Machine Learning",
    description:
      "Client-side ML models, AI-assisted development workflows, and pair-programming agents.",
    icon: Zap,
    skills: ["TensorFlow.js", "Claude", "GitHub Copilot", "Cursor", "Ollama", "Antigravity"],
  },
];

export const socialLinks: LinkItem[] = [
  {
    label: "GitHub",
    handle: "@Atharvkote",
    href: portfolioData.socials.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "@atharvakote",
    href: portfolioData.socials.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "X (Twitter)",
    handle: "@ImAtharva81",
    href: portfolioData.socials.twitter,
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    handle: "@___atharv_81",
    href: portfolioData.socials.instagram,
    icon: FaInstagram,
  },
  {
    label: "LeetCode",
    handle: "@AtharvaKote81",
    href: portfolioData.socials.leetcode,
    icon: SiLeetcode,
  },
  {
    label: "Stack Overflow",
    handle: "@atharva-kote",
    href: portfolioData.socials.stackoverflow,
    icon: SiStackoverflow,
  },
];
