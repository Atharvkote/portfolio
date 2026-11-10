import { motion } from "framer-motion";
import { Navbar } from "../components/layout/navbar";
import { SocialBar } from "../components/layout/social-bar";
import { QuickAccess } from "../components/layout/quick-access";
import { Footer } from "../components/layout/contact";
import { portfolioData } from "../data/portfolio";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import TechIcon from "../components/ui/icon-provider";
import { SEO } from "../components/layout/seo";
import { trackProjectClick } from "../lib/analytics";

// ─── Animation Variants ───
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.6 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

// ─── Project Card ───
function ProjectCard({ project }: {
  project: (typeof portfolioData.projects)[number];
}) {
  const slug = project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <motion.div variants={fadeUp}>
      <Link
        to={`/project/${slug}`}
        onClick={() => trackProjectClick(project.title, `/project/${slug}`)}
        className="group relative block rounded-2xl border border-primary/15 bg-bg-card/25 backdrop-blur-sm
                   overflow-hidden transition-all duration-400
                   hover:border-primary/35 hover:shadow-[0_0_48px_rgba(167,139,250,0.06)]"
      >
        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="flex items-center gap-1 text-[11px] font-mono text-text-dim">
              <Calendar size={10} aria-hidden="true" />
              {project.duration}
            </span>
          </div>

          {/* Logo + Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15 flex items-center
                            justify-center shrink-0 mt-0.5
                            group-hover:bg-primary/15 transition-colors duration-300">
              <TechIcon name={project.logo} size={18} className="opacity-80" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-display font-bold text-text-primary leading-tight
                             group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>
            </div>
          
          </div>

          {/* Description */}
          <p className="text-[13px] text-text-secondary leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono
                           text-text-muted bg-bg-elevated/50 border border-border/50
                           group-hover:border-primary/15 transition-colors"
              >
                <TechIcon name={tech} size={12} />
                {tech}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-mono
                               text-primary bg-primary/8 border border-primary/15">
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Stats Row ───
function ProjectStats() {
  const stats = [
    { label: "Total Projects", value: `${portfolioData.projects.length}` },
    { label: "Featured", value: `${portfolioData.projects.filter(p => p.featured).length}` },
    { label: "Technologies Used", value: `${new Set(portfolioData.projects.flatMap(p => p.tech)).size}+` },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 mb-10"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          className="px-4 py-2.5 rounded-xl border border-primary/15 bg-bg-card/25 backdrop-blur-sm
                     flex items-center gap-3"
        >
          <span className="text-lg font-display font-bold text-primary">{s.value}</span>
          <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">{s.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Page ───
export default function WorkPage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary font-body overflow-x-clip">
      <SEO
        title="Featured Engineering Projects"
        description="Portfolio of software engineering projects, distributed systems with Apache Kafka, concert ticketing platforms, and scalable backends by Atharva Kote."
        path="/work"
      />
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 w-full max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-6 pt-32 pb-32">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="font-mono text-primary text-sm font-bold uppercase tracking-widest mb-1 block">
            Work
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-text-primary tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-text-secondary text-[15px] leading-relaxed max-w-[600px]">
            A showcase of my engineering work — from distributed microservices
            to full-stack platforms built for scale.
          </p>
        </motion.div>

        {/* ── Stats ── */}
        <ProjectStats />

        {/* ── Project Grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* ── View All CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="View all repositories by Atharva Kote on GitHub"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/25
                       text-primary text-[13px] font-mono font-bold
                       hover:bg-primary/8 hover:border-primary/40 transition-all duration-300"
          >
            View all on GitHub <ChevronRight size={14} aria-hidden="true" />
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
