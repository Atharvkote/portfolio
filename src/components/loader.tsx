import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  children: ReactNode;
}

export function Loader({ children }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Hexagon Logo */}
            <motion.svg
              width="300"
              height="330"
              viewBox="0 0 84 96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.polygon
                points="42 3 81 24 81 72 42 93 3 72 3 24"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.image
                href="/A.png"
                x="20"
                y="25"
                width="40"
                height="40"
                preserveAspectRatio="xMidYMid meet"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </motion.svg>

            {/* Loading bar */}
            <div className="w-32 h-[2px] bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
