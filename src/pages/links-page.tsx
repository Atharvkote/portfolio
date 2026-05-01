import { motion } from "framer-motion";
import { portfolioData, socialLinks, type LinkItem } from "../data/portfolio";
import {
  ArrowUpRight, Mail, Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── Animations ───
const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// ─── Link Card ───
function LinkCard({ item }: { item: LinkItem }) {
  const Icon = item.icon;

  return (
    <motion.a
      variants={fadeUp}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 px-5 py-4 rounded-2xl
                 border border-primary/12 bg-bg-card/30 backdrop-blur-sm
                 hover:border-primary/30 hover:bg-bg-card/50
                 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl bg-primary/8 border border-primary/12
                      flex items-center justify-center shrink-0
                      group-hover:bg-primary/15 transition-colors duration-300">
        <Icon size={18} className="text-text-secondary group-hover:text-primary transition-colors" />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <span className="text-[14px] font-body font-bold text-text-primary block">
          {item.label}
        </span>
        <span className="text-[12px] font-mono text-text-muted">
          {item.handle}
        </span>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={16}
        className="text-text-dim shrink-0
                   group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                   transition-all duration-300"
      />
    </motion.a>
  );
}

// ─── Page ───
export function LinksPage() {
  return (
    <div className="relative bg-bg min-h-screen text-text-primary font-body overflow-x-clip">
      {/* Subtle background glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
        }}
      />

      <main className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center">

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          {/* Avatar */}
          <div className="relative mb-5">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/25
                            shadow-[0_0_40px_rgba(167,139,250,0.1)]">
              <img
                src="https://res.cloudinary.com/dgz7hqbl9/image/upload/q_auto/f_auto/v1776017613/WhatsApp_Image_2026-04-12_at_11.41.15_PM_sxrxmm.jpg"
                alt={portfolioData.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500
                            border-2 border-bg" />
          </div>

          {/* Name */}
          <h1 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2">
            {portfolioData.name}
          </h1>

          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["Developer","Free Lancer", "Software Engineer"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-mono font-bold
                           text-primary border border-primary/20 bg-primary/8"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Quick action buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         border border-primary/25 text-text-primary text-[13px] font-mono font-bold
                         hover:border-primary/50 hover:bg-primary/8 transition-all duration-300"
            >
              <Globe size={14} />
              Website
              <ArrowUpRight size={12} />
            </Link>
            <a
              href={`mailto:${portfolioData.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-primary/15 text-primary text-[13px] font-mono font-bold
                         border border-primary/20
                         hover:bg-primary/25 transition-all duration-300"
            >
              <Mail size={14} />
              {portfolioData.email}
            </a>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
        >
          {socialLinks.map((item) => (
            <LinkCard key={item.label} item={item} />
          ))}
        </motion.div>

        {/* Resume CTA */}
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl
                     border border-primary/20 bg-primary/8 text-primary
                     text-[13px] font-mono font-bold
                     hover:bg-primary/15 hover:border-primary/35 transition-all duration-300"
        >
          Download Resume
          <ArrowUpRight size={14} />
        </motion.a>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-[11px] font-mono text-text-dim text-center"
        >
          © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </motion.p>
      </main>
    </div>
  );
}
