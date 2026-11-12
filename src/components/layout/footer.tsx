import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { trackSocialClick } from "../../lib/analytics";
import { VisitorCounter } from "../sections/visitor-counter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full pt-12 pb-10 px-4 sm:px-6 md:px-0 max-w-[1100px] mx-auto select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.45 }}
        className="rounded-[8px] sm:rounded-[16px] bg-[#0c0c0e]/95 border border-white/[0.08] backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-11 shadow-[0_16px_48px_rgba(0,0,0,0.6)] relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#01d8b4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 relative z-10">

          <div className="lg:col-span-5 flex flex-col text-center md:text-left md:justify-start">
            <h2 className="font-bonheur text-6xl sm:text-7xl md:text-8xl lg:text-[88px] select-none -ml-1 py-1 drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)]">
              Atharva Kote
            </h2>

            <p className="text-text-muted text-xs sm:text-sm leading-relaxed mt-3 sm:mt-4 max-w-sm font-['Manrope']">
              Building digital experiences that matter, one line of code at a time.
              Crafting interfaces that feel alive, solving problems that make a difference,
              and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 mx-auto md:mx-0 gap-6 sm:gap-6 lg:gap-8">

            <div>
              <h3 className="font-mono text-xs sm:text-sm font-semibold text-white tracking-wide mb-3 sm:mb-4">
                General
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-text-muted">
                <li>
                  <a href="/#hero" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <a href="/#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/links" className="hover:text-white transition-colors">
                    Socials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs sm:text-sm font-semibold text-white tracking-wide mb-3 sm:mb-4">
                About
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-text-muted">
                <li>
                  <a href="/#about" className="hover:text-white transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <a href="/#backend-devops" className="hover:text-white transition-colors">
                    Architecture
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs sm:text-sm font-semibold text-white tracking-wide mb-3 sm:mb-4">
                Connect
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-text-muted">
                <li>
                  <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSocialClick("github", portfolioData.socials.github)}
                    className="hover:text-[#01d8b4] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSocialClick("linkedin", portfolioData.socials.linkedin)}
                    className="hover:text-[#0A66C2] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioData.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSocialClick("twitter", portfolioData.socials.twitter)}
                    className="hover:text-white transition-colors"
                  >
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioData.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSocialClick("instagram", portfolioData.socials.instagram)}
                    className="hover:text-[#E4405F] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={portfolioData.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackSocialClick("leetcode", portfolioData.socials.leetcode)}
                    className="hover:text-[#FFA116] transition-colors"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs sm:text-sm font-semibold text-white tracking-wide mb-3 sm:mb-4">
                Legal
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-[13px] text-text-muted">
                <li>
                  <Link to="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link to="/license" className="hover:text-white transition-colors">
                    License
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/credits" className="hover:text-white transition-colors">
                    Credits &amp; Attributions
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div className="border-t border-white/[0.08] mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono relative z-10">
          <div className="flex items-center gap-3">
            <VisitorCounter />
          </div>

          <div className="flex items-center gap-2 text-center text-text-secondary text-xs">
            <span>&copy; {currentYear} Atharva Kote.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">Crafted with precision &amp; care.</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;

