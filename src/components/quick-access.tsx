import { useEffect, useState } from "react";
import { Keyboard, X, Moon, Link2, Palette, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { COLOR_THEMES, applyColorTheme, getSavedColorTheme } from "../lib/theme";

export function QuickAccess() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const [activeColor, setActiveColor] = useState(() => {
    return getSavedColorTheme();
  });
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toast.warning("Fair warning! Light Attracts Bugs! 🐞");
    }
  }, [darkMode]);

  useEffect(() => {
    applyColorTheme(activeColor);
  }, [activeColor]);

  const handleSelectColor = (themeId: string) => {
    const theme = applyColorTheme(themeId);
    setActiveColor(theme.id);
    toast.success(`Theme set to ${theme.label}!`, { duration: 1800 });
  };

  const handleCycleTheme = () => {
    const currentIndex = COLOR_THEMES.findIndex((t) => t.id === activeColor);
    const nextIndex = (currentIndex + 1) % COLOR_THEMES.length;
    const nextTheme = COLOR_THEMES[nextIndex];
    handleSelectColor(nextTheme.id);
  };

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
      } else if (e.key.toLowerCase() === "d" && isOpen) {
        setDarkMode((prev) => !prev);
      } else if (e.key.toLowerCase() === "t" && isOpen) {
        handleCycleTheme();
      } else if (e.key.toLowerCase() === "l" && isOpen) {
        navigate("/links");
        setIsOpen(false);
      } else if (e.key.toLowerCase() === "w" && isOpen) {
        navigate("/work");
        setIsOpen(false);
      } else if (e.key.toLowerCase() === "s" && isOpen) {
        navigate("/skills");
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeColor]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-bg/20 backdrop-blur-xl flex flex-col md:flex-row justify-between items-start md:items-center px-10 py-20 text-text-primary shadow-2xl shadow-primary/10"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 p-3 bg-bg-elevated rounded-xl cursor-pointer border border-border hover:border-primary hover:text-primary transition-all"
            aria-label="Close Quick Access"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Left: Shortcuts Info */}
          <div className="flex flex-col max-w-sm mb-12 md:mb-0 w-full animate-slide-in">
            <div className="flex items-center gap-3 mb-4">
              <Keyboard className="w-7 h-7 text-bg bg-text-primary rounded p-1" aria-hidden="true" />
              <h2 className="text-lg font-bold font-display">TIP: Shortcuts</h2>
            </div>
            <p className="text-text-secondary text-sm mb-10 leading-relaxed">
              Navigate the site with ease using keyboard shortcuts.
            </p>

            <div className="space-y-6 font-mono text-sm w-full">
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
                <span className="text-text-primary text-xs">Open Quick Access</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                  Q
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
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
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
                <span className="text-text-primary text-xs">Toggle Dark Mode</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                  D
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
                <span className="text-text-primary text-xs">Cycle Theme Color</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                  T
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
                <span className="text-text-primary text-xs">Go to Links</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                  L
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
                <span className="text-text-primary text-xs">Go to Work Projects</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                  W
                </kbd>
              </div>
              <div className="flex justify-between items-center border-b border-border/50 pb-1">
                <span className="text-text-primary text-xs">Go to Skills</span>
                <kbd className="px-2 py-1 bg-bg-elevated border border-border rounded text-xs font-semibold">
                  S
                </kbd>
              </div>
            </div>
          </div>

          {/* Right: Action Center & Theme Selector */}
          <div className="flex flex-col gap-8 w-full md:w-[380px] animate-fade-up">
            <div>
              <h3 className="text-xl font-bold font-display mb-5">Action Center</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setDarkMode((prev) => !prev)}
                  aria-label={`Toggle dark mode, currently ${darkMode ? "On" : "Off"}`}
                  className="flex flex-col justify-between p-5 bg-bg-elevated border border-border rounded-xl transition-all hover:border-primary/50 cursor-pointer text-left"
                >
                  <Moon className="w-6 h-6 mb-8 text-text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold font-body">
                    Dark Mode: {darkMode ? "On" : "Off"}
                  </span>
                </button>
                <button
                  onClick={() => { navigate("/links"); setIsOpen(false); }}
                  aria-label="Navigate to all links page"
                  className="flex flex-col justify-between p-5 bg-bg-elevated border border-border rounded-xl transition-all hover:border-primary/50 cursor-pointer text-left"
                >
                  <Link2 className="w-6 h-6 mb-8 text-text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold font-body">
                    All Links
                  </span>
                </button>
              </div>

              {/* Theme Accent Color Selector */}
              <div className="p-4 bg-bg-elevated border border-border rounded-2xl">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-text-muted flex items-center gap-2">
                    <Palette size={15} className="text-primary" aria-hidden="true" />
                    Primary Color
                  </span>

                </div>

                <div className="grid grid-cols-6 gap-2">
                  {COLOR_THEMES.map((theme) => {
                    const isSelected = activeColor === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => handleSelectColor(theme.id)}
                        onMouseEnter={() => setHoveredColor(theme.id)}
                        onMouseLeave={() => setHoveredColor(null)}
                        aria-label={`Select ${theme.name} theme`}
                        title={`${theme.name} (${theme.label})`}
                        className={`group relative flex items-center justify-center h-10 rounded-xl transition-all duration-200 cursor-pointer ${isSelected
                          ? "bg-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-bg-elevated shadow-sm scale-105"
                          : "hover:bg-white/5 hover:scale-105 border border-white/5 hover:border-white/20"
                          }`}
                      >
                        <span
                          className="w-5 h-5 rounded-md transition-transform duration-200 group-hover:scale-110 flex items-center justify-center shadow-md shrink-0"
                          style={{ backgroundColor: theme.primary }}
                        >
                          {isSelected && (
                            <Check size={12} className="text-white drop-shadow stroke-[3]" aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
