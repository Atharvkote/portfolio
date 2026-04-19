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
    { category: "Languages", items: ["Java", "JavaScript", "PHP", "SQL"] },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      category: "Tools",
      items: ["IoT (Arduino, ESP32)", "Cloud Computing", "DSA (200+ LeetCode)", "Bootstrap"],
    },
  ],
  // ── Detailed Skills for Skills Page ──
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
    // Full categorized skills list
    categories: [
      {
        name: "Programming Languages",
        skills: [
          { name: "Java", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "TypeScript", level: 75 },
          { name: "PHP", level: 70 },
          { name: "SQL", level: 80 },
          { name: "Python", level: 65 },
        ],
      },
      {
        name: "Frontend",
        skills: [
          { name: "React", level: 88 },
          { name: "Next.js", level: 80 },
          { name: "HTML/CSS", level: 95 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Bootstrap", level: 85 },
          { name: "Framer Motion", level: 70 },
        ],
      },
      {
        name: "Backend & Database",
        skills: [
          { name: "Node.js", level: 82 },
          { name: "Express.js", level: 80 },
          { name: "MySQL", level: 78 },
          { name: "Firebase", level: 75 },
          { name: "MongoDB", level: 70 },
          { name: "REST APIs", level: 85 },
        ],
      },
      {
        name: "DevOps & Tools",
        skills: [
          { name: "Git & GitHub", level: 90 },
          { name: "Docker", level: 65 },
          { name: "Linux", level: 70 },
          { name: "VS Code", level: 95 },
          { name: "Arduino / ESP32", level: 80 },
          { name: "Cloud Computing", level: 72 },
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
      image: "/gdsc.png",
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
      image: "/university.png",
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
      school: "Sanjivani College of Engineering, Kopargaon",
      degree: "B.E. in Computer Engineering",
      period: "2023 — Present",
      score: "CGPA: 8.7",
    },
    {
      school: "Sanjivani Junior College, Kopargaon",
      degree: "HSC (Science)",
      period: "2021 — 2023",
      score: "80.89%",
    },
    {
      school: "Saibaba English Medium School, Shirdi",
      degree: "SSC",
      period: "2010 — 2021",
      score: "87.89%",
    },
  ],
  projects: [
    {
      "logo":"Kafka",
      "title": "Distributed Microservices Architecture with Apache Kafka",
      "duration": "Ongoing",
      "description": "Event-driven microservices system with Kafka-based communication, Redis caching, and full observability stack.",
      "highlights": [
        "Improved response times by 70% using Redis caching",
        "Handled 10,000+ messages per minute via 3-node Kafka cluster",
        "Implemented JWT-RS256 secure inter-service authentication",
        "Centralized routing with Kong API Gateway",
        "Built CI/CD pipelines using Jenkins and GitHub Actions",
        "Integrated Prometheus, Grafana, and Loki for monitoring"
      ],
      "tech": [
        "React.js",
        "Node.js",
        "Express.js",
        "Redis",
        "Apache Kafka",
        "Socket.io",
        "Docker",
        "MongoDB",
        "AWS EC2",
        "AWS S3",
        "Kong API Gateway",
        "Jenkins",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
        "Loki",
        "JWT-RS256"
      ],
      "github": "https://github.com/Atharvkote",
      "link": "#",
      "featured": true,
      "imageOne": "https://res.cloudinary.com/dgz7hqbl9/image/upload/v1776587018/copy_of_screenshot_2026-03-22_232641_n4ppii_de8edb.png",
      "imageTwo": "https://res.cloudinary.com/dgz7hqbl9/image/upload/v1776587018/copy_of_screenshot_2026-03-22_232641_n4ppii_de8edb.png"
    },
    {
      "logo":"React.js",
      "title": "Ticket Booking Platform for Live Concerts",
      "duration": "Feb 2025 – Mar 2025",
      "description": "Scalable full-stack ticketing platform with barcode-based entry verification, dynamic seat allocation, and real-time analytics dashboards.",
      "highlights": [
        "Handled 11,000+ user registrations with high availability",
        "Reduced entry delays by 60% using barcode verification",
        "Processed 2,000+ ticket transactions with real-time analytics",
        "Optimized backend for peak concurrent traffic handling"
      ],
      "tech": [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "AWS EC2",
        "AWS S3",
        "Socket.io",
        "QR/Barcode Systems",
        "Docker"
      ],
      "github": "https://github.com/Atharvkote",
      "link": "#",
      "featured": true
    },
    {
      "logo":"AI",
      "title": "AI-Powered Contactless Ordering & Recommendation System",
      "duration": "Apr 2025 – Jun 2025",
      "description": "Contactless dining platform with QR-based ordering and AI-driven menu recommendations.",
      "highlights": [
        "Improved table turnover by 35%",
        "Built AI recommendation engine using TensorFlow.js",
        "Processed 500+ transactions with 99.8% success rate",
        "Implemented real-time order tracking with Socket.io",
        "Integrated TOTP-based authentication and Razorpay payments"
      ],
      "tech": [
        "Next.js",
        "Express.js",
        "MongoDB",
        "Razorpay API",
        "Socket.io",
        "Tailwind CSS",
        "Firebase",
        "REST APIs",
        "TensorFlow.js"
      ],
      "github": "https://github.com/Atharvkote",
      "link": "#",
      "featured": true
    }

  ]
};
