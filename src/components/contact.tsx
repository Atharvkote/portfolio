import { motion } from "framer-motion";
import { FaGithub, FaHeart, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { portfolioData } from "../data/portfolio";
import { FaMessage } from "react-icons/fa6";

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
        <a
          target="_blank"
          rel="noreferrer"
          href={`mailto:${portfolioData.email}`} className="text-primary border-2 border-primary rounded-md px-6 py-1 w-1/2 mx-auto flex gap-2 items-center justify-center">
          Say Hello <FaMessage size={18} className="ml-2 text-primary" />
        </a>
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
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <FaGithub size={20} />
        </a>
        <a
          href={portfolioData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href={portfolioData.socials.twitter}
          target="_blank"
          rel="noreferrer"
          className="text-text-muted hover:text-primary transition-colors p-1"
        >
          <FaTwitter size={20} />
        </a>
      </div>

      <a
        href={portfolioData.socials.github}
        target="_blank"
        rel="noreferrer"
        className="font-mono text-xs  flex items-center gap-2 justify-center text-text-primary hover:text-primary transition-colors leading-relaxed"
      >
        <p className="flex items-center gap-2 text-text-primary"><FaHeart /> Designed & Built by {portfolioData.name}</p>
      </a>
    </motion.div>
  );
}
