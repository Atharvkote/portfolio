import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { TbLayoutFilled } from "react-icons/tb";
import { toast } from "sonner";
import { FaGithub, FaHeart, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "../data/portfolio";
import { FaXTwitter } from "react-icons/fa6";
import { trackSocialClick } from "../lib/analytics";


const NAV_LINKS = [
  { name: "About", href: "/#about", type: "hash" },
  { name: "Skills", href: "/skills", type: "route" },
  { name: "Work", href: "/work", type: "route" },
];

const SOCIAL_LINKS = [
  { icon: FaGithub, href: portfolioData.socials.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: portfolioData.socials.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: portfolioData.socials.twitter, label: "Twitter" },
  { icon: FaInstagram, href: portfolioData.socials.instagram, label: "Instagram" },
  { icon: SiLeetcode, href: portfolioData.socials.leetcode, label: "LeetCode" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);


  const handleQuickAccessClick = () => {
    toast.success("Press Q to open Quick Access", { duration: 3000 });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 transition-all duration-300 ${scrolled ? "py-4 " : "py-6"
          }`}
      >
        <nav className="max-w-[1400px] mx-auto border-none flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative group text-md flex items-center gap-1 font-bold text-primary"
          >
            <span className=" text-md font-bold bg-primary text-text-primary px-2  rounded-lg">/</span>
            atharva <span className="text-primary text-2xl">.</span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 font-mono text-[13px] text-text-secondary  transition-colors rounded-md"
              >
                <span className="hover:text-primary duration-100 transition-colors">{link.name}</span>
              </motion.a>
            ))}
            <motion.button
              onClick={handleQuickAccessClick}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="ml-4 border border-primary/70 py-[0.175rem] px-4 rounded-lg hover:bg-gray-600/20 duration-500 transition-colors text-primary/70 text-sm flex items-center gap-1 cursor-pointer"
            >
              <TbLayoutFilled className="text-lg " /> Quick access
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer relative z-[60] text-primary p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-bg flex flex-col md:hidden overflow-hidden"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)" }}
            />

            {/* Top bar */}
            <div className="flex items-center justify-between px-7 pt-14 pb-6">
              <motion.a
                href="#"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative group text-md flex items-center gap-1 font-bold text-primary"
              >
                <span className=" text-md font-bold bg-primary text-text-primary px-2  rounded-lg">/</span>
                atharva <span className="text-primary text-2xl">.</span>
              </motion.a>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-primary text-sm transition-all"
                style={{ border: "1px solid rgba(167,139,250,0.2)", background: "rgba(167,139,250,0.08)" }}
              >
                ✕
              </button>
            </div>

            {/* Divider */}
            <div className="mx-7" style={{ height: "1px", background: "linear-gradient(90deg, rgba(167,139,250,0.25), rgba(167,139,250,0.05) 60%, transparent)" }} />

            {/* Links */}
            <nav className="flex-1 flex flex-col pt-9">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center gap-0 px-7 py-3.5 group transition-colors"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}
                >
                  {/* Active indicator bar */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-r opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(180deg, #a78bfa, #7c3aed)" }}
                  />

                  {/* Number */}
                  <span className=" text-[0.65rem] text-primary opacity-70 tracking-widest min-w-[28px] self-start mt-1.5">
                    0{i + 1}
                  </span>

                  {/* Label + sub-desc */}
                  <div className="flex-1 px-3">
                    <span className="font-display text-[1.45rem] font-bold tracking-[-0.03em] text-text-primary group-hover:text-primary transition-colors leading-none block">
                      {link.name}
                    </span>
                  </div>

                  {/* Arrow */}
                  <span className="text-border-hover group-hover:text-primary transition-all group-hover:translate-x-1 text-sm">
                    <ChevronRight size={18} />
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-7 pb-10 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex gap-3 mb-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    onClick={() => trackSocialClick(s.label, s.href)}
                    className="w-[34px] h-[34px] rounded-lg flex items-center justify-center font-mono text-[0.65rem] text-text-muted transition-all"
                    style={{ border: "1px solid rgba(167,139,250,0.12)", background: "rgba(167,139,250,0.05)" }}
                  >
                    <s.icon size={14} className="text-primary" />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center text-xs gap-2 text-text-primary/70"><FaHeart /> Designed & Built by {portfolioData.name}</div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
