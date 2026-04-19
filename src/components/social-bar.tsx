import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "../data/portfolio";
import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { icon: FaGithub, href: portfolioData.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: portfolioData.socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: portfolioData.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: portfolioData.socials.instagram, label: "Instagram" },
  { icon: SiLeetcode, href: portfolioData.socials.leetcode, label: "LeetCode" },
];

export function SocialBar() {
  return (
    <>
      {/* Left — Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        className="fixed bottom-0 left-8 lg:left-12 hidden lg:flex flex-col items-center gap-0 z-30"
      >
        <div className="flex flex-col gap-5 mb-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-text-muted hover:text-primary  hover:-translate-y-[3px] transition-all duration-200 p-1"
            >
              <Icon size={18} className="hover:text-primary" />
            </a>
          ))}
        </div>
        <div className="w-px h-24 bg-text-muted/40" />
      </motion.div>

      {/* Right — Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        className="fixed bottom-0 right-8 lg:right-12 hidden lg:flex flex-col items-center gap-0 z-30"
      >
        <a
          href={`mailto:${portfolioData.email}`}
          className="font-mono text-[12px] tracking-[0.15em] text-text-muted hover:text-primary transition-all duration-200 hover:-translate-y-[3px] mb-5"
          style={{ writingMode: "vertical-rl" }}
        >
          {portfolioData.email}
        </a>
        <div className="w-px h-24 bg-text-muted/40" />
      </motion.div>
    </>
  );
}
