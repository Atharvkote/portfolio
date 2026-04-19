import { motion } from "framer-motion";

const backendItems = [
  {
    title: "Architecture",
    desc: "Modular, layered architecture ensuring maintainability and reusability.",
  },
  {
    title: "Data Flow",
    desc: "Efficient API and database interaction with clean request/response handling.",
  },
  {
    title: "Security",
    desc: "Input validation, encryption, and auth protocols to protect data and services.",
  },
  {
    title: "Performance",
    desc: "Optimized queries, caching, and async processes for lightning-fast execution.",
  },
];

const devopsItems = [
  {
    title: "Infrastructure as Code",
    desc: "Declarative configurations using tools like Terraform or CloudFormation.",
  },
  {
    title: "CI/CD Pipelines",
    desc: "Automated testing, build, and deployment for rapid delivery cycles.",
  },
  {
    title: "Monitoring",
    desc: "Logging, alerting, and metrics tracking for system reliability.",
  },
  {
    title: "Scalability",
    desc: "Cloud-native tools and container orchestration for on-demand scaling.",
  },
];

const frontendItems = [
  {
    title: "UI Architecture",
    desc: "Component-driven architecture with reusable, scalable design systems and clean separation of concerns.",
  },
  {
    title: "State Management",
    desc: "Efficient global and local state handling using tools like Zustand/Redux for predictable data flow.",
  },
  {
    title: "Performance",
    desc: "Optimized rendering with code-splitting, lazy loading, memoization, and minimal re-renders.",
  },
  {
    title: "UX & Accessibility",
    desc: "Responsive, accessible interfaces with semantic HTML, keyboard navigation, and smooth interactions.",
  },
];

function Card({ index, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex gap-5 hover:border-primary/40 transition-all duration-300"
    >
      {/* Number */}
      <span className="text-5xl font-bold text-primary/60 ">
        {index + 1}
      </span>

      {/* Content */}
      <div>
        <h4 className="text-white font-semibold text-lg mb-1">
          {title}
        </h4>
        <p className="text-text-muted text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function BackendDevops() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">

      <div className="relative z-10 grid md:grid-cols-2 gap-16">

        {/* LEFT - Backend */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="section-heading py-0 my-0"
          >
            <span className="num">01.</span> BACKEND
          </motion.h2>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Resilient, Modular & High-Performance Architecture.
          </h2>

          <p className="text-text-muted mb-8 max-w-md">
            Build robust systems with clean logic, optimized for speed,
            scalability, and security.
          </p>

          <div className="space-y-4">
            {backendItems.map((item, i) => (
              <Card key={i} index={i} {...item} />
            ))}
          </div>
        </div>

        {/* RIGHT - DevOps */}
        <div>
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="section-heading py-0 my-0"
          >
            <span className="num">02.</span> DEVEOPS
          </motion.h2>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Automated, Scalable & CD Pipelines.
          </h2>

          <p className="text-text-muted mb-8 max-w-md">
            Streamlining infrastructure and CI/CD workflows to support seamless development.
          </p>

          <div className="space-y-4">
            {devopsItems.map((item, i) => (
              <Card key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}