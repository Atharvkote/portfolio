import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaHeart, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import { FaMessage } from "react-icons/fa6";
import { Link2 } from "lucide-react";
import { trackContactClick, trackSocialClick } from "../lib/analytics";
import { VisitorCounter } from "./VisitorCounter";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="max-w-[600px] mx-auto text-center"
      >
        <p className="font-mono text-primary text-sm mb-4">06. What's Next?</p>
        <h2 className="font-display text-[clamp(36px,6vw,56px)] font-bold tracking-tight mb-6">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-12">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Say Hello (Gmail Compose) */}
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
            onClick={() => trackContactClick("email", portfolioData.email)}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative inline-block group"
          >
            <span className="relative z-10 px-6 py-3 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary/30 text-text-primary overflow-hidden inline-block">
              {/* Background layer */}
              <span className="absolute inset-0 bg-bg z-0 transition-all duration-300 group-hover:scale-105"></span>

              {/* Text */}
              <span className="relative z-10 font-medium">
                Say Hello <FaMessage className="inline-block ml-1 text-base text-primary" aria-hidden="true" />
              </span>
            </span>

            {/* Shadow / offset layer */}
            <span className="absolute inset-0 border border-primary/30 rounded-lg translate-x-1 translate-y-1 transition-all duration-300 group-hover:bg-primary"></span>
          </motion.a>

          {/* All Links page */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="relative inline-block"
          >
            <Link
              to="/links"
              className="relative inline-block group"
            >
              <span className="relative z-10 px-6 py-3 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary/30 text-text-primary overflow-hidden inline-block">
                {/* Background layer */}
                <span className="absolute inset-0 bg-bg z-0 transition-all duration-300 group-hover:scale-105"></span>

                {/* Text */}
                <span className="relative z-10 font-medium">
                  All Links <Link2 className="inline-block ml-1 text-lg text-primary" aria-hidden="true" />
                </span>
              </span>

              {/* Shadow / offset layer */}
              <span className="absolute inset-0 border border-primary/30 rounded-lg translate-x-1 translate-y-1 transition-all duration-300 group-hover:bg-primary"></span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.7 }}
      className="relative z-10 py-8 px-6 text-center">
      {/* Mobile-only social links */}
      <div className="flex justify-center gap-6 mb-5 lg:hidden">
        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Atharva Kote on GitHub"
          onClick={() => trackSocialClick("github", portfolioData.socials.github)}
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <FaGithub size={20} aria-hidden="true" />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Atharva Kote on LinkedIn"
          onClick={() => trackSocialClick("linkedin", portfolioData.socials.linkedin)}
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <FaLinkedinIn size={20} aria-hidden="true" />
        </a>
        <a
          href={portfolioData.socials.twitter}
          target="_blank"
          rel="noreferrer"
          aria-label="Atharva Kote on Twitter"
          onClick={() => trackSocialClick("twitter", portfolioData.socials.twitter)}
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <FaTwitter size={20} aria-hidden="true" />
        </a>
      </div>

      <div className="flex justify-center mb-4">
        <VisitorCounter />
      </div>

      <a
        href={portfolioData.socials.github}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-xs  flex items-center gap-2 justify-center text-text-primary hover:text-primary transition-colors leading-relaxed"
      >
        <p className="flex items-center gap-2 text-text-primary"><FaHeart aria-hidden="true" /> Designed & Built by {portfolioData.name}</p>
      </a>
    </motion.div>
  );
}
