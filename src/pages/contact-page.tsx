import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/navbar";
import { SocialBar } from "../components/layout/social-bar";
import { QuickAccess } from "../components/layout/quick-access";
import { Footer } from "../components/layout/footer";
import { SEO } from "../components/layout/seo";
import { portfolioData } from "../data/portfolio";
import { FaMessage, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Send,
} from "lucide-react";
import { trackContactClick, trackSocialClick } from "../lib/analytics";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-primary/20 selection:text-primary relative overflow-x-clip">
      {/* Background glow matching the dark theme */}
      <div
        className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-primary/[0.03] rounded-full blur-[140px] -z-10"
        aria-hidden="true"
      />

      <SEO
        title="Contact | Atharva Kote"
        description="Get in touch with Atharva Kote. Open for backend engineering roles, distributed systems collaborations, and software consulting."
        path="/contact"
      />

      <Navbar />
      <SocialBar />
      <QuickAccess />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase font-bold">
              08. WHAT'S NEXT?
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-4"
          >
            Get In <span className="badone-font italic font-normal text-primary">Touch</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            I'm actively exploring new engineering opportunities, distributed systems projects, and open-source collaborations. My inbox is always open.
          </motion.p>
        </motion.div>

        {/* Primary Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl sm:rounded-3xl border border-primary/25 bg-gradient-to-b from-bg-card/90 via-bg-card/50 to-bg-elevated/30 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_60px_rgba(1,216,180,0.06)] mb-10 text-center relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-36 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-5 text-primary">
              <Mail size={26} />
            </div>

            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Drop Me an Email
            </h2>

            <p className="text-text-secondary text-xs sm:text-sm mb-6 leading-relaxed">
              Whether you have a question, an opportunity, or just want to say hi, I&apos;ll do my best to get back to you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
                onClick={() => trackContactClick("email", portfolioData.email)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-black font-display font-bold text-sm tracking-wide shadow-[0_0_24px_rgba(1,216,180,0.3)] transition-all duration-300"
              >
                <span>Say Hello</span>
                <Send size={15} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 bg-bg-card/60 hover:border-primary/30 text-text-secondary hover:text-white font-mono text-xs transition-all duration-200"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-primary" />
                    <span className="text-primary">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{portfolioData.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-2xl border border-white/[0.08] bg-bg-card/40 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 text-primary mb-2">
              <MapPin size={16} />
              <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
                Location
              </span>
            </div>
            <p className="font-display font-semibold text-white text-sm">
              Pune, Maharashtra, India
            </p>
            <p className="text-text-secondary text-xs mt-1">Available for remote roles</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/[0.08] bg-bg-card/40 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 text-primary mb-2">
              <Clock size={16} />
              <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
                Response Time
              </span>
            </div>
            <p className="font-display font-semibold text-white text-sm">
              Within 24 Hours
            </p>
            <p className="text-text-secondary text-xs mt-1">Monday &ndash; Saturday</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/[0.08] bg-bg-card/40 backdrop-blur-sm">
            <div className="flex items-center gap-2.5 text-primary mb-2">
              <FaMessage size={14} />
              <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
                Status
              </span>
            </div>
            <p className="font-display font-semibold text-white text-sm">
              Open to Opportunities
            </p>
            <p className="text-text-secondary text-xs mt-1">Backend & Distributed Systems</p>
          </div>
        </div>

        {/* Social Connections */}
        <div className="p-6 rounded-2xl border border-white/[0.08] bg-bg-card/30 backdrop-blur-sm">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-text-dim mb-4 text-center">
            Connect Across Platforms
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick("linkedin", portfolioData.socials.linkedin)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-bg-card/40 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 text-text-secondary hover:text-white transition-all text-xs font-mono"
            >
              <FaLinkedinIn size={14} className="text-[#0A66C2]" />
              <span>LinkedIn</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick("github", portfolioData.socials.github)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-bg-card/40 hover:border-primary/50 hover:bg-primary/10 text-text-secondary hover:text-white transition-all text-xs font-mono"
            >
              <FaGithub size={14} className="text-primary" />
              <span>GitHub</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <a
              href={portfolioData.socials.twitter}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackSocialClick("twitter", portfolioData.socials.twitter)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.08] bg-bg-card/40 hover:border-white/30 hover:bg-white/[0.05] text-text-secondary hover:text-white transition-all text-xs font-mono"
            >
              <FaXTwitter size={14} />
              <span>Twitter / X</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;
