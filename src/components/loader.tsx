import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  children: ReactNode;
}

export function Loader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 flex items-center bg-bg text-text-primary justify-center pointer-events-auto"
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Hexagon Logo */}
              <motion.svg
                width="240"
                height="300"
                viewBox="0 0 84 96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                role="img"
                aria-label="Atharva Kote logo animation"
              >
                <motion.polygon
                  points="42 3 81 24 81 72 42 93 3 72 3 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M42 26.5 L57.87 64.5 L49.73 64.5 L48.26 60.74 L35.74 60.74 L34.27 64.5 L26.34 64.5 Z M42 44.04 L38.66 53.64 L45.34 53.64 Z"
                  fill="var(--color-primary)"
                  fillRule="evenodd"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                  style={{ transformOrigin: "42px 48px" }}
                />
              </motion.svg>

              {/* Loading bar */}
              <div
                className="w-32 h-[2px] rounded-full overflow-hidden"
                style={{ backgroundColor: "var(--color-border)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
