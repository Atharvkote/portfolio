import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ElectricLogo from "../ui/electric-logo";
import aSvg from "../../assets/a.svg";
import { Zap } from "lucide-react";

interface LoaderProps {
  children: ReactNode;
}

function getStatusText(p: number): string {
  if (p < 25) return "INITIALIZING SYSTEM KERNEL...";
  if (p < 55) return "CALIBRATING ELECTRIC CORES...";
  if (p < 85) return "COMPILING SHADERS & DISTRIBUTED MESH...";
  if (p < 100) return "SYNCHRONIZING ATHARVA KOTE PORTFOLIO...";
  return "SYSTEM READY , WELCOME !!";
}

export function Loader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const statusTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1800;
    let animationFrameId: number;
    let finishTimeoutId: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      const easedProgress = Math.min(100, Math.round((1 - Math.pow(1 - rawProgress, 2.5)) * 100));

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${easedProgress}%`;
      }
      if (percentTextRef.current) {
        percentTextRef.current.textContent = `${easedProgress.toString().padStart(3, "0")}%`;
      }
      if (statusTextRef.current) {
        statusTextRef.current.textContent = getStatusText(easedProgress);
      }

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        finishTimeoutId = setTimeout(() => {
          setLoading(false);
        }, 200);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        cancelAnimationFrame(animationFrameId);
        clearTimeout(finishTimeoutId);
        setLoading(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(finishTimeoutId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="electric-loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-black text-text-primary px-6 py-8 sm:py-12 select-none overflow-hidden cursor-default"
          >
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="relative group text-md flex items-center gap-2.5 font-bold text-text-primary"
            >
              <span className="text-xs font-bold font-mono bg-primary text-black px-2.5 py-1 rounded-lg tracking-wider uppercase shadow-[0_0_14px_var(--color-primary-glow)]">
                /
              </span>
              <span className="font-display tracking-tight text-base font-bold text-text-primary">
                Atharva Kote <span className="text-primary text-xl">.</span>
              </span>
            </motion.a>

            <div className="relative z-10 flex flex-col items-center justify-center my-auto">
              <div className="absolute inset-0 -m-8 sm:-m-12 rounded-full border border-primary/10 animate-[spin_25s_linear_infinite] pointer-events-none" />
              <div className="absolute inset-0 -m-4 sm:-m-6 rounded-full border border-dashed border-primary/15 animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />

              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] flex items-center justify-center">
                <ElectricLogo
                  src={aSvg || "/svg/a.svg"}
                  color="#01d8b4"
                  glowColor="#00F0C0"
                  scale={0.82}
                  intensity={1.3}
                  glow={1.35}
                  thickness={1.6}
                  strands={3}
                  bend={0.75}
                  crackle={1.3}
                  arcs={2}
                  flicker={0.35}
                  fill={0.06}
                  speed={0.5}
                  interactive={true}
                  cursorIntensity={0.85}
                  cursorRadius={90}
                  theme="dark"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-3">
              <div className="w-full flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-primary font-semibold tracking-wide">
                  <Zap size={14} className="text-primary animate-pulse shrink-0" />
                  <span ref={statusTextRef} className="truncate max-w-[240px] sm:max-w-xs">
                    INITIALIZING SYSTEM KERNEL...
                  </span>
                </div>
                <span ref={percentTextRef} className="text-primary font-mono font-bold tracking-widest pl-2">
                  000%
                </span>
              </div>

              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative border border-white/5">
                <div
                  ref={progressBarRef}
                  className="h-full bg-gradient-to-r from-primary/80 via-primary-light to-primary rounded-full relative transition-[width] duration-75 ease-out"
                  style={{ width: "0%" }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#00F0C0]" />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
