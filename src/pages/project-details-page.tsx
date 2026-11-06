import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Navbar } from "../components/navbar";
import { SocialBar } from "../components/social-bar";
import { QuickAccess } from "../components/quick-access";
import { Footer } from "../components/contact";
import TechIcon from "../components/icon-provider";
import { SEO } from "../components/seo";
import { trackEvent } from "../lib/analytics";
import {
  Code, ExternalLink, ChevronRight, ArrowLeft,
  Zap, Calendar, Layers,
} from "lucide-react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.6 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = portfolioData.projects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") === slug
  );

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next/prev project for navigation
  const currentIndex = portfolioData.projects.indexOf(project);
  const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];
  const nextSlug = nextProject.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  return (
    <div className="relative bg-bg min-h-screen text-text-primary overflow-x-clip font-body">
      <SEO
        title={project.title}
        description={project.description}
        path={`/project/${slug}`}
        ogImage={project.imageOne || undefined}
      />
      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 w-full max-w-[1000px] mx-auto px-6 sm:px-10 lg:px-6 pt-28 pb-32">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-[13px] font-mono text-text-muted
                       hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" /> Back to projects
          </Link>
        </motion.div>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest
                               bg-primary/12 text-primary border border-primary/20 flex items-center gap-1">
              <Calendar size={12} aria-hidden="true" /> {project.duration}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-text-primary
                         tracking-tight mb-4 leading-tight max-w-[800px]">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-[15px] leading-relaxed max-w-[700px] mb-6">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View source code for ${project.title} on GitHub`}
                onClick={() => trackEvent("github_click", { project_title: project.title, url: project.github })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/25
                           text-primary text-[13px] font-mono font-bold
                           hover:bg-primary/8 hover:border-primary/40 transition-all duration-300 group"
              >
                <Code size={15} aria-hidden="true" className="group-hover:rotate-6 transition-transform" />
                Source Code
              </a>
            )}
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View live deployment of ${project.title}`}
                onClick={() => trackEvent("project_demo_click", { project_title: project.title, url: project.link })}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-primary text-bg text-[13px] font-mono font-bold
                           hover:bg-primary-light transition-all duration-300 group"
              >
                <ExternalLink size={15} aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* ── Image Gallery ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className={`grid grid-cols-1 ${project.imageTwo ? "md:grid-cols-2" : ""} gap-4 mb-16`}
        >
          {project.imageOne && (
            <motion.div
              variants={scaleIn}
              className={`relative w-full ${project.imageTwo ? "aspect-video" : "aspect-video md:aspect-[21/9]"}
                          rounded-2xl overflow-hidden border border-primary/10 bg-bg-card group`}
            >
              <img
                src={project.imageOne}
                alt={`${project.title} Preview`}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 ease-out
                           group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </motion.div>
          )}
          {project.imageTwo && (
            <motion.div
              variants={scaleIn}
              className="relative w-full aspect-video rounded-2xl overflow-hidden border border-primary/10
                         bg-bg-card group"
            >
              <img
                src={project.imageTwo}
                alt={`${project.title} Interface`}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 ease-out
                           group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </motion.div>
          )}
        </motion.div>

        {/* ── Content Grid: Highlights + Tech ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left: Overview + Highlights */}
          <div className="flex-1 space-y-12">

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers size={16} className="text-primary" />
                </div>
                <h2 className="text-xl font-display font-bold text-text-primary">
                  Overview
                </h2>
              </div>
              <div className="pl-3 border-l-2 border-primary/15 space-y-4">
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {project.description}
                </p>
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  This project represents a critical engineering effort to solve complex scalability
                  and networking challenges, implementing modern technologies at production scale.
                </p>
              </div>
            </motion.section>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap size={16} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-text-primary">
                    Key Highlights
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="flex gap-3 p-4 rounded-xl border border-primary/10 bg-bg-card/25
                                 hover:border-primary/25 transition-all duration-300 group"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-[11px] font-mono font-bold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-text-secondary text-[13px] leading-relaxed
                                       group-hover:text-text-primary transition-colors">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right: Sticky Tech Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticky top-28 rounded-2xl border border-primary/15 bg-bg-card/25
                         backdrop-blur-sm p-5"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-border/50">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code size={16} className="text-primary" />
                </div>
                <h3 className="text-base font-display font-bold text-text-primary">
                  Tech Stack
                </h3>
                <span className="ml-auto text-[11px] font-mono text-text-dim">
                  {project.tech.length} tools
                </span>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {project.tech.map((tech) => (
                  <motion.div
                    key={tech}
                    variants={fadeUp}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg
                               border border-border/50 bg-bg-elevated/30
                               hover:border-primary/20 hover:bg-primary/5
                               transition-all duration-300"
                  >
                    <TechIcon name={tech} size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-mono text-[12px] text-text-secondary
                                     group-hover:text-text-primary transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </aside>
        </div>

        {/* ── Next Project ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-10 border-t border-border/30"
        >
          <span className="font-mono text-[11px] text-text-dim uppercase tracking-widest block mb-3">
            Next Project
          </span>
          <Link
            to={`/project/${nextSlug}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-primary/10 bg-bg-card/20
                       hover:border-primary/30 hover:bg-bg-card/40 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/15
                            flex items-center justify-center shrink-0">
              <TechIcon name={nextProject.logo} size={18} className="opacity-80" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-display font-bold text-text-primary
                             group-hover:text-primary transition-colors line-clamp-1">
                {nextProject.title}
              </h4>
              <p className="text-[12px] text-text-muted line-clamp-1">{nextProject.description}</p>
            </div>
            <ChevronRight
              size={18}
              className="text-text-dim shrink-0
                         group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
            />
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
