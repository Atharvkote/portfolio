import { useEffect, useState } from "react";
import { Keyboard, X, Link2, Briefcase, Code2, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function QuickAccess() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Permanently enforce dark theme
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key.toLowerCase() === "q") {
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      } else if (e.key.toLowerCase() === "l" && isOpen) {
        navigate("/links");
        setIsOpen(false);
      } else if (e.key.toLowerCase() === "w" && isOpen) {
        navigate("/work");
        setIsOpen(false);
      } else if (e.key.toLowerCase() === "s" && isOpen) {
        navigate("/skills");
        setIsOpen(false);
      } else if (e.key.toLowerCase() === "h" && isOpen) {
        navigate("/");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, navigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-bg/40 backdrop-blur-2xl flex flex-col md:flex-row justify-between items-start md:items-center px-8 sm:px-12 py-16 sm:py-20 text-text-primary shadow-2xl shadow-primary/10 select-none overflow-y-auto"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 sm:top-10 sm:right-10 p-3 bg-bg-elevated rounded-xl cursor-pointer border border-border hover:border-primary hover:text-primary transition-all duration-200"
            aria-label="Close Quick Access"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Left: Shortcuts Info */}
          <div className="flex flex-col max-w-sm mb-10 md:mb-0 w-full animate-slide-in">
            <div className="flex items-center gap-3 mb-4">
              <Keyboard className="w-7 h-7 text-bg bg-primary rounded p-1" aria-hidden="true" />
              <h2 className="text-lg font-bold font-display">TIP: Shortcuts</h2>
            </div>
            <p className="text-text-secondary text-sm mb-8 leading-relaxed">
              Navigate the site with ease using keyboard shortcuts.
            </p>

            <div className="space-y-4 font-mono text-sm w-full">
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-text-primary text-xs">Open Quick Access</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold text-primary">
                  Q
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-text-primary text-xs">Close Quick Access</span>
                <div className="flex gap-2 items-center">
                  <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                    Q
                  </kbd>
                  <span className="text-text-muted text-xs">or</span>
                  <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                    Esc
                  </kbd>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-text-primary text-xs">Go to Work Projects</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold text-primary">
                  W
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-text-primary text-xs">Go to Skills & Tech</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold text-primary">
                  S
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-text-primary text-xs">Go to Links</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold text-primary">
                  L
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-2">
                <span className="text-text-primary text-xs">Go to Home</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold text-primary">
                  H
                </kbd>
              </div>
            </div>
          </div>

          {/* Right: Action Center */}
          <div className="flex flex-col gap-6 w-full md:w-[420px] animate-fade-up">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-display">Action Center</h3>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Fast Navigation</span>
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                <button
                  onClick={() => {
                    navigate("/work");
                    setIsOpen(false);
                  }}
                  aria-label="Navigate to work projects"
                  className="group flex flex-col justify-between p-4 sm:p-5 bg-bg-elevated/70 border border-border rounded-xl transition-all duration-200 hover:border-primary/60 hover:bg-bg-hover hover:shadow-[0_0_20px_var(--color-primary-glow)] cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Briefcase className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">W</span>
                  </div>
                  <span className="text-sm font-semibold font-body text-text-primary group-hover:text-primary transition-colors">
                    Work Projects
                  </span>
                </button>

                <button
                  onClick={() => {
                    navigate("/skills");
                    setIsOpen(false);
                  }}
                  aria-label="Navigate to technical skills"
                  className="group flex flex-col justify-between p-4 sm:p-5 bg-bg-elevated/70 border border-border rounded-xl transition-all duration-200 hover:border-primary/60 hover:bg-bg-hover hover:shadow-[0_0_20px_var(--color-primary-glow)] cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Code2 className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">S</span>
                  </div>
                  <span className="text-sm font-semibold font-body text-text-primary group-hover:text-primary transition-colors">
                    Skills & Tech
                  </span>
                </button>

                <button
                  onClick={() => {
                    navigate("/links");
                    setIsOpen(false);
                  }}
                  aria-label="Navigate to all links page"
                  className="group flex flex-col justify-between p-4 sm:p-5 bg-bg-elevated/70 border border-border rounded-xl transition-all duration-200 hover:border-primary/60 hover:bg-bg-hover hover:shadow-[0_0_20px_var(--color-primary-glow)] cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Link2 className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">L</span>
                  </div>
                  <span className="text-sm font-semibold font-body text-text-primary group-hover:text-primary transition-colors">
                    All Links
                  </span>
                </button>

                <button
                  onClick={() => {
                    navigate("/");
                    setIsOpen(false);
                  }}
                  aria-label="Navigate to homepage"
                  className="group flex flex-col justify-between p-4 sm:p-5 bg-bg-elevated/70 border border-border rounded-xl transition-all duration-200 hover:border-primary/60 hover:bg-bg-hover hover:shadow-[0_0_20px_var(--color-primary-glow)] cursor-pointer text-left"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Home className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" aria-hidden="true" />
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">H</span>
                  </div>
                  <span className="text-sm font-semibold font-body text-text-primary group-hover:text-primary transition-colors">
                    Home
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default QuickAccess;
