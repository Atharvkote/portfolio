import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TbLayoutFilled } from "react-icons/tb";


const NAV_LINKS = [
  { name: "About", href: "/#about", type: "hash" },
  { name: "Skills", href: "/skills", type: "route" },
  { name: "Experience", href: "/#experience", type: "hash" },
  { name: "Work", href: "/work", type: "route" },
  { name: "Contact", href: "/#contact", type: "hash" },
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
            <motion.a
              href="/resume.pdf"
              target="_blank"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="ml-4 border border-primary py-[0.175rem] px-4 rounded-lg hover:bg-gray-600/20 duration-500 transition-colors text-primary text-sm flex items-center gap-1"
            >
              <TbLayoutFilled className="text-lg " /> Quick access <span className="border-2 text-xs font-bold px-[0.125rem] py-0 bg-gray-600/40 rounded ">Q</span>

            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-[60] text-primary p-2"
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
            className="fixed inset-0 z-[55] bg-bg-alt flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="font-mono text-primary text-sm">0{i + 1}.</span>
                <span className="font-display text-2xl font-semibold text-text-primary hover:text-primary transition-colors">
                  {link.name}
                </span>
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="cta-btn mt-4"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
