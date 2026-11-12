import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X, User, Code2, Briefcase } from "lucide-react";
import { TbLayoutFilled } from "react-icons/tb";
import { FaGithub, FaHeart, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { portfolioData } from "../../data/portfolio";
import { FaXTwitter } from "react-icons/fa6";
import { trackSocialClick } from "../../lib/analytics";


const NAV_LINKS = [
  { name: "About", href: "/#about", icon: User },
  { name: "Skills", href: "/skills", icon: Code2 },
  { name: "Work", href: "/work", icon: Briefcase },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const isScrolled = y > 50;
          const isVisible = y < lastYRef.current || y < 80;

          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          setVisible((prev) => (prev !== isVisible ? isVisible : prev));

          lastYRef.current = y;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);


  const handleQuickAccessClick = () => {
    window.dispatchEvent(new CustomEvent("open-quick-access"));
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
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative group text-md flex items-center gap-0.5 font-bold text-text-primary"
          >
            <img src="/image/Logo-T.png" height={20} width={20} alt="Logo" />
            <span className="font-barone tracking-tight text-base font-bold text-text-primary">
              BOVE & BEYOND<span className="text-primary text-xl">.</span>
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative group flex items-center gap-2 px-3.5 py-1.5 font-body font-medium text-[14px] tracking-wide text-text-secondary hover:text-text-primary rounded-lg transition-all duration-200 hover:bg-white/[0.04] border border-transparent hover:border-primary/25 hover:shadow-[0_0_16px_var(--color-primary-glow)]"
                >
                  <Icon
                    size={14}
                    aria-hidden="true"
                    className="text-primary/70 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                  <span>{link.name}</span>

                  <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              );
            })}
            <motion.button
              onClick={handleQuickAccessClick}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              aria-label="Open Quick Access panel"
              className="relative group ml-3 flex items-center gap-2 px-3.5 py-1.5 font-body font-medium text-[14px] tracking-wide text-text-secondary hover:text-text-primary rounded-lg transition-all duration-200 hover:bg-white/[0.04] border border-primary/40 hover:border-primary/80 hover:shadow-[0_0_18px_var(--color-primary-glow)] cursor-pointer"
            >
              <TbLayoutFilled aria-hidden="true" className="text-primary/70 group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-0.5 transition-all duration-200 text-base" />
              <span>Quick access</span>

              <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer relative z-[60] text-primary p-2"
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[55] bg-bg flex flex-col md:hidden overflow-hidden"
          >

            <div className="flex items-center justify-between px-7 pt-14 pb-6">
              <motion.a
                href="/"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative group text-md flex items-center gap-0.5 font-bold text-text-primary"
              >
                <img src="/image/Logo-T.png" height={20} width={20} alt="Logo" />
                <span className="font-barone tracking-tight text-base font-bold text-text-primary">
                  BOVE & BEYOND<span className="text-primary text-xl">.</span>
                </span>
              </motion.a>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-primary text-sm transition-all"
                style={{ border: "1px solid var(--color-border)", background: "var(--color-primary-glow)" }}
              >
                ✕
              </button>
            </div>

            <div className="mx-7" style={{ height: "1px", background: "linear-gradient(90deg, var(--color-primary), transparent)" }} />

            <nav className="flex-1 flex flex-col pt-9">
              {NAV_LINKS.map((link, i) => {
                const Icon = link.icon;
                return (
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
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] rounded-r opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "linear-gradient(180deg, var(--color-primary), var(--color-primary-dark))" }}
                    />

                    <span className=" text-[0.65rem] text-primary opacity-70 tracking-widest min-w-[28px] self-start mt-1.5 font-mono">
                      0{i + 1}
                    </span>

                    <div className="flex-1 flex items-center gap-3 px-3">
                      <Icon size={20} aria-hidden="true" className="text-primary/70 group-hover:text-primary transition-colors" />
                      <span className="font-body text-[1.45rem] font-bold tracking-[-0.02em] text-text-primary group-hover:text-primary transition-colors leading-none block">
                        {link.name}
                      </span>
                    </div>

                    <span className="text-border-hover group-hover:text-primary transition-all group-hover:translate-x-1 text-sm">
                      <ChevronRight size={18} aria-hidden="true" />
                    </span>
                  </motion.a>
                );
              })}
            </nav>

            <div className="px-7 pb-10 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex gap-3 mb-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Atharva Kote on ${s.label}`}
                    onClick={() => trackSocialClick(s.label, s.href)}
                    className="w-[34px] h-[34px] rounded-lg flex items-center justify-center font-mono text-[0.65rem] text-text-muted transition-all"
                    style={{ border: "1px solid var(--color-border)", background: "var(--color-primary-glow)" }}
                  >
                    <s.icon size={14} className="text-primary" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center text-xs gap-2 text-text-primary/70"><FaHeart aria-hidden="true" /> Designed & Built by {portfolioData.name}</div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
