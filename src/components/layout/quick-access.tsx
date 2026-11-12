import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Search,
  X,
  Home,
  Briefcase,
  Code2,
  Mail,
  Link2,
  User,
  Layers,
  Download,
  Copy,
  Send,
  Share2,
  Shield,
  FileText,
  FileCode,
  Cookie,
  Award,
  Sparkles,
  CornerDownLeft,
  ArrowUpDown,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { portfolioData, skillSections } from "../../data/portfolio";
import {
  trackContactClick,
  trackSocialClick,
  trackResumeDownload,
} from "../../lib/analytics";

export type CommandCategory =
  | "Navigation"
  | "Projects"
  | "Skills"
  | "Actions"
  | "Socials";

export interface CommandItem {
  id: string;
  category: CommandCategory;
  title: string;
  subtitle?: string;
  badge?: string;
  keywords?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  perform: () => void;
}

const FILTER_PILLS = ["All", "Projects", "Skills", "Actions", "Navigation"] as const;
type FilterPill = (typeof FILTER_PILLS)[number];

export function QuickAccess() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterPill>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Open / Close trigger handlers
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setActiveFilter("All");
    setSelectedIndex(0);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setActiveFilter("All");
  }, []);

  // Event listener for opening from external triggers (e.g. Navbar button)
  useEffect(() => {
    const handleCustomOpen = () => handleOpen();
    window.addEventListener("open-quick-access", handleCustomOpen);
    return () => window.removeEventListener("open-quick-access", handleCustomOpen);
  }, [handleOpen]);

  // Keyboard shortcut listener (Q, Cmd+K, Ctrl+K, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput =
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA";

      if ((e.key.toLowerCase() === "q" && !isInput) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        if (!isOpen) {
          setQuery("");
          setActiveFilter("All");
          setSelectedIndex(0);
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Focus input automatically when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 60);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Build commands registry
  const allCommands = useMemo<CommandItem[]>(() => {
    const commands: CommandItem[] = [
      // Quick Navigation
      {
        id: "nav-home",
        category: "Navigation",
        title: "Home",
        subtitle: "Return to the homepage hero section",
        badge: "Page",
        keywords: "home hero main landing",
        icon: Home,
        perform: () => {
          navigate("/");
          handleClose();
        },
      },
      {
        id: "nav-work",
        category: "Navigation",
        title: "Work & Projects",
        subtitle: "Browse featured distributed systems and software projects",
        badge: "Page",
        keywords: "work projects showcase applications portfolio",
        icon: Briefcase,
        perform: () => {
          navigate("/work");
          handleClose();
        },
      },
      {
        id: "nav-skills",
        category: "Navigation",
        title: "Skills & Tech Stack",
        subtitle: "Comprehensive overview of technologies, tools and domains",
        badge: "Page",
        keywords: "skills tech technologies stack backend frontend devops",
        icon: Code2,
        perform: () => {
          navigate("/skills");
          handleClose();
        },
      },
      {
        id: "nav-contact",
        category: "Navigation",
        title: "Contact",
        subtitle: "Direct communication channels, inquiries and availability",
        badge: "Page",
        keywords: "contact email touch reach hello message inquire",
        icon: Mail,
        perform: () => {
          navigate("/contact");
          handleClose();
        },
      },
      {
        id: "nav-links",
        category: "Navigation",
        title: "All Links",
        subtitle: "Quick link tree to social profiles, platforms and resumes",
        badge: "Page",
        keywords: "links socials linktree tree profiles",
        icon: Link2,
        perform: () => {
          navigate("/links");
          handleClose();
        },
      },
      {
        id: "nav-about",
        category: "Navigation",
        title: "About Atharva",
        subtitle: "Background, career path and engineering philosophy",
        badge: "Section",
        keywords: "about me bio story background education experience",
        icon: User,
        perform: () => {
          navigate("/#about");
          handleClose();
        },
      },
      {
        id: "nav-architecture",
        category: "Navigation",
        title: "System Architecture",
        subtitle: "Microservices, Kafka streaming and backend infra cards",
        badge: "Section",
        keywords: "architecture backend devops cards systems design",
        icon: Layers,
        perform: () => {
          navigate("/#backend-devops");
          handleClose();
        },
      },

      // Quick Actions
      {
        id: "action-resume",
        category: "Actions",
        title: "Download Resume",
        subtitle: "Official PDF resume (Atharva Kote)",
        badge: "Action",
        keywords: "resume cv download pdf profile document bio",
        icon: Download,
        perform: () => {
          trackResumeDownload();
          const toastId = toast.loading("Downloading resume...");
          const link = document.createElement("a");
          link.href = "/resume.pdf";
          link.download = "Atharva_Kote_Resume.pdf";
          link.click();
          setTimeout(() => {
            toast.success("Resume downloaded!", { id: toastId });
          }, 800);
          handleClose();
        },
      },
      {
        id: "action-copy-email",
        category: "Actions",
        title: "Copy Email Address",
        subtitle: portfolioData.email,
        badge: "Action",
        keywords: "email copy address clipboard gmail contact",
        icon: Copy,
        perform: () => {
          navigator.clipboard.writeText(portfolioData.email).then(() => {
            toast.success("Email copied to clipboard!");
          });
          handleClose();
        },
      },
      {
        id: "action-send-email",
        category: "Actions",
        title: "Compose Email in Webmail",
        subtitle: "Open Gmail compose window with recipient pre-filled",
        badge: "Action",
        keywords: "email send compose write mailto gmail",
        icon: Send,
        perform: () => {
          trackContactClick("email", portfolioData.email);
          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`,
            "_blank"
          );
          handleClose();
        },
      },
      {
        id: "action-copy-url",
        category: "Actions",
        title: "Copy Portfolio URL",
        subtitle: "https://atharvakote.vercel.app",
        badge: "Action",
        keywords: "share link copy url website link",
        icon: Share2,
        perform: () => {
          navigator.clipboard.writeText("https://atharvakote.vercel.app").then(() => {
            toast.success("Portfolio URL copied to clipboard!");
          });
          handleClose();
        },
      },

      // Featured Projects
      ...portfolioData.projects.map((proj) => {
        const slug =
          proj.slug ||
          proj.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

        return {
          id: `proj-${slug}`,
          category: "Projects" as CommandCategory,
          title: proj.title,
          subtitle: proj.badge || proj.tech.slice(0, 4).join(" • "),
          badge: "Project",
          keywords: `${proj.title} ${proj.tech.join(" ")} ${proj.description} ${proj.badge || ""}`,
          icon: Sparkles,
          perform: () => {
            navigate(`/project/${slug}`);
            handleClose();
          },
        };
      }),

      // Skills & Domains
      ...skillSections.map((sec) => ({
        id: `skill-${sec.id}`,
        category: "Skills" as CommandCategory,
        title: sec.title,
        subtitle: sec.skills.slice(0, 5).join(", ") + "...",
        badge: "Skill",
        keywords: `${sec.title} ${sec.skills.join(" ")} ${sec.subtitle}`,
        icon: Code2,
        perform: () => {
          navigate("/skills");
          handleClose();
        },
      })),

      // Legal & Documentation
      {
        id: "legal-privacy",
        category: "Navigation",
        title: "Privacy Policy",
        subtitle: "Data practices, Upstash Redis counter and privacy rights",
        badge: "Legal",
        keywords: "privacy policy data security cookies gdpr",
        icon: Shield,
        perform: () => {
          navigate("/privacy-policy");
          handleClose();
        },
      },
      {
        id: "legal-terms",
        category: "Navigation",
        title: "Terms of Use",
        subtitle: "Terms and conditions governing website interaction",
        badge: "Legal",
        keywords: "terms of use legal disclaimer liability",
        icon: FileText,
        perform: () => {
          navigate("/terms-of-use");
          handleClose();
        },
      },
      {
        id: "legal-license",
        category: "Navigation",
        title: "License & IP",
        subtitle: "MIT License terms for the open-source portfolio repository",
        badge: "Legal",
        keywords: "license mit intellectual property open source github",
        icon: FileCode,
        perform: () => {
          navigate("/license");
          handleClose();
        },
      },
      {
        id: "legal-cookies",
        category: "Navigation",
        title: "Cookie Policy",
        subtitle: "Essential anti-abuse cookies and local storage disclosure",
        badge: "Legal",
        keywords: "cookie policy visitor token localstorage tracking",
        icon: Cookie,
        perform: () => {
          navigate("/cookie-policy");
          handleClose();
        },
      },
      {
        id: "legal-credits",
        category: "Navigation",
        title: "Credits & Attributions",
        subtitle: "React 19, TypeScript, Vite, Tailwind, OGL and open-source tooling",
        badge: "Legal",
        keywords: "credits attributions dependencies libraries frameworks",
        icon: Award,
        perform: () => {
          navigate("/credits");
          handleClose();
        },
      },

      // Socials & External Profiles
      {
        id: "social-github",
        category: "Socials",
        title: "GitHub Profile",
        subtitle: "View repositories, code contributions and stars",
        badge: "External",
        keywords: "github git code repo repositories open source",
        icon: FaGithub,
        perform: () => {
          trackSocialClick("github", portfolioData.socials.github);
          window.open(portfolioData.socials.github, "_blank");
          handleClose();
        },
      },
      {
        id: "social-linkedin",
        category: "Socials",
        title: "LinkedIn Profile",
        subtitle: "Connect professionally on LinkedIn",
        badge: "External",
        keywords: "linkedin network career jobs connection",
        icon: FaLinkedinIn,
        perform: () => {
          trackSocialClick("linkedin", portfolioData.socials.linkedin);
          window.open(portfolioData.socials.linkedin, "_blank");
          handleClose();
        },
      },
      {
        id: "social-leetcode",
        category: "Socials",
        title: "LeetCode Profile",
        subtitle: "View algorithmic problem solving metrics and ratings",
        badge: "External",
        keywords: "leetcode dsa algorithms data structures",
        icon: SiLeetcode,
        perform: () => {
          trackSocialClick("leetcode", portfolioData.socials.leetcode);
          window.open(portfolioData.socials.leetcode, "_blank");
          handleClose();
        },
      },
      {
        id: "social-twitter",
        category: "Socials",
        title: "Twitter / X",
        subtitle: "Follow engineering thoughts and tech updates",
        badge: "External",
        keywords: "twitter x social posts tweets feed",
        icon: FaXTwitter,
        perform: () => {
          trackSocialClick("twitter", portfolioData.socials.twitter);
          window.open(portfolioData.socials.twitter, "_blank");
          handleClose();
        },
      },
      {
        id: "social-instagram",
        category: "Socials",
        title: "Instagram",
        subtitle: "Personal photography and casual updates",
        badge: "External",
        keywords: "instagram photos creative personal",
        icon: FaInstagram,
        perform: () => {
          trackSocialClick("instagram", portfolioData.socials.instagram);
          window.open(portfolioData.socials.instagram, "_blank");
          handleClose();
        },
      },
    ];

    return commands;
  }, [navigate, handleClose]);

  // Filter commands based on search query and active tab filter
  const filteredCommands = useMemo(() => {
    let list = allCommands;

    if (activeFilter !== "All") {
      list = list.filter((c) => c.category === activeFilter);
    }

    const q = query.trim().toLowerCase();
    if (!q) return list;

    return list.filter((cmd) => {
      const inTitle = cmd.title.toLowerCase().includes(q);
      const inSubtitle = cmd.subtitle?.toLowerCase().includes(q);
      const inKeywords = cmd.keywords?.toLowerCase().includes(q);
      const inCategory = cmd.category.toLowerCase().includes(q);
      return inTitle || inSubtitle || inKeywords || inCategory;
    });
  }, [allCommands, query, activeFilter]);

  const safeIndex = Math.min(
    selectedIndex,
    Math.max(0, filteredCommands.length - 1)
  );

  // Group filtered results by category for UI rendering
  const groupedCommands = useMemo(() => {
    const groups: { category: CommandCategory; items: CommandItem[] }[] = [];
    const categoryOrder: CommandCategory[] = [
      "Navigation",
      "Projects",
      "Actions",
      "Skills",
      "Socials",
    ];

    categoryOrder.forEach((cat) => {
      const items = filteredCommands.filter((c) => c.category === cat);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    });

    return groups;
  }, [filteredCommands]);

  // Keyboard navigation within the command palette
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredCommands.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev === 0 ? filteredCommands.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const current = filteredCommands[safeIndex];
      if (current) {
        current.perform();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const activeEl = itemRefs.current[safeIndex];
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [safeIndex]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col items-center pt-[9vh] sm:pt-[13vh] px-4 select-none overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            {/* Floating Spotlight Container (No box background!) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -16 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl relative flex flex-col gap-2.5"
            >
              {/* Ambient floating soft glow behind the search bar */}
              <div
                className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-24 bg-primary/20 rounded-full blur-3xl -z-10"
                aria-hidden="true"
              />

              {/* 1. Standalone Floating Search Bar Capsule */}
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0c0e]/50 backdrop-blur-2xl px-4 sm:px-5 py-3.5 sm:py-4 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(1,216,180,0.12)] flex items-center gap-3.5 focus-within:border-primary/50 focus-within:shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(1,216,180,0.22)] transition-all duration-300">
                <Search
                  size={19}
                  className="text-primary shrink-0 drop-shadow-[0_0_10px_var(--color-primary-glow)]"
                  aria-hidden="true"
                />

                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search projects, skills, commands, or legal docs..."
                  className="w-full bg-transparent text-white text-base sm:text-lg placeholder:text-text-dim/60 border-none !outline-none !ring-0 focus:!outline-none focus:!ring-0 focus-visible:!outline-none focus-visible:!ring-0 shadow-none font-display font-medium"
                  style={{ outline: "none", boxShadow: "none" }}
                  aria-label="Search portfolio commands"
                />

                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="p-1 rounded-md text-text-dim hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                ) : (
                  <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                    <kbd className="px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.03] text-[10.5px] font-mono text-text-dim">
                      ESC
                    </kbd>
                  </div>
                )}
              </div>

              {/* 2. Floating Filter Pills */}
              <div className="flex items-center justify-between px-1 py-1">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  {FILTER_PILLS.map((pill) => {
                    const isActive = activeFilter === pill;
                    return (
                      <button
                        key={pill}
                        type="button"
                        onClick={() => {
                          setActiveFilter(pill);
                          setSelectedIndex(0);
                        }}
                        className={`font-mono text-[10.5px] px-3 py-1 rounded-full border transition-all cursor-pointer whitespace-nowrap backdrop-blur-md ${
                          isActive
                            ? "border-primary/50 bg-primary/15 text-primary font-semibold shadow-[0_0_12px_rgba(1,216,180,0.2)]"
                            : "border-white/[0.08] bg-white/[0.03] text-text-dim hover:text-white hover:border-white/20 hover:bg-white/[0.06]"
                        }`}
                      >
                        {pill}
                      </button>
                    );
                  })}
                </div>

                <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-text-dim shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
                  <span>SPOTLIGHT</span>
                </div>
              </div>

              {/* 3. Floating Results List */}
              <div
                ref={listRef}
                className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/40 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-y-auto px-2 sm:px-3 py-2 space-y-3 max-h-[52vh] scroll-smooth"
              >
                {filteredCommands.length === 0 ? (
                  <div className="py-12 px-4 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mx-auto mb-3 text-text-dim">
                      <Search size={20} />
                    </div>
                    <p className="font-display font-semibold text-white text-sm sm:text-base mb-1">
                      No results found for &ldquo;{query}&rdquo;
                    </p>
                    <p className="text-text-secondary text-xs max-w-sm mx-auto">
                      Try searching for &ldquo;Kafka&rdquo;, &ldquo;Resume&rdquo;, &ldquo;Skills&rdquo;, or &ldquo;Email&rdquo;.
                    </p>
                  </div>
                ) : (
                  groupedCommands.map((group) => (
                    <div key={group.category} className="space-y-1">
                      {/* Section Heading with subtle accent */}
                      <div className="px-3.5 pt-2 pb-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-primary/40" />
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase font-bold text-primary/75">
                          {group.category}
                        </span>
                        <div className="h-px flex-1 bg-white/[0.04]" />
                      </div>

                      {group.items.map((cmd) => {
                        const globalIndex = filteredCommands.findIndex(
                          (c) => c.id === cmd.id
                        );
                        const isSelected = globalIndex === safeIndex;
                        const Icon = cmd.icon;

                        return (
                          <button
                            key={cmd.id}
                            ref={(el) => {
                              itemRefs.current[globalIndex] = el;
                            }}
                            type="button"
                            onClick={() => cmd.perform()}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full flex items-center justify-between gap-3 px-3 sm:px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                              isSelected
                                ? "bg-gradient-to-r from-primary/[0.14] via-primary/[0.05] to-transparent border border-primary/30 shadow-[0_0_20px_rgba(1,216,180,0.08)] text-white"
                                : "border border-transparent hover:border-white/[0.06] hover:bg-white/[0.03] text-text-secondary hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-primary/20 border border-primary/40 text-primary shadow-[0_0_12px_rgba(1,216,180,0.35)]"
                                    : "bg-white/[0.03] text-text-dim border border-white/[0.06] group-hover:text-white"
                                }`}
                              >
                                <Icon size={15} />
                              </div>

                              <div className="min-w-0">
                                <span
                                  className={`font-display text-sm truncate font-medium block leading-tight ${
                                    isSelected ? "text-white font-semibold" : "text-white/85"
                                  }`}
                                >
                                  {cmd.title}
                                </span>
                                {cmd.subtitle && (
                                  <p className="text-[11.5px] font-mono text-text-dim truncate mt-0.5">
                                    {cmd.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {cmd.badge && (
                                <span
                                  className={`font-mono text-[9.5px] px-2 py-0.5 rounded-md border tracking-wider uppercase ${
                                    isSelected
                                      ? "bg-primary/15 border-primary/35 text-primary"
                                      : "bg-white/[0.02] border-white/[0.06] text-text-dim"
                                  }`}
                                >
                                  {cmd.badge}
                                </span>
                              )}

                              {isSelected && (
                                <CornerDownLeft
                                  size={13}
                                  className="text-primary hidden sm:block animate-pulse"
                                  aria-hidden="true"
                                />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* 4. Floating Mini-Footer */}
              <div className="flex items-center justify-between px-3 py-1.5 text-xs font-mono text-text-dim">
                <div className="flex items-center gap-3 sm:gap-4 text-[11px]">
                  <span className="inline-flex items-center gap-1.5">
                    <ArrowUpDown size={12} className="text-primary/80" />
                    <span>Navigate</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CornerDownLeft size={12} className="text-primary/80" />
                    <span>Open</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/[0.04] text-[10px]">
                      ESC
                    </kbd>
                    <span>Close</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-text-dim">
                  <span>{filteredCommands.length} command{filteredCommands.length === 1 ? "" : "s"}</span>
                  <span className="hidden sm:inline">&bull;</span>
                  <span className="hidden sm:inline text-primary/70">Atharva.OS</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default QuickAccess;
