import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { recordVisitor } from "../lib/visitor";
import { Users } from "lucide-react";

interface VisitorCounterProps {
  className?: string;
}

export function VisitorCounter({ className = "" }: VisitorCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadCount() {
      try {
        const result = await recordVisitor();
        if (isMounted && result && typeof result.uniqueVisitors === "number") {
          setCount(result.uniqueVisitors);
        }
      } catch {
        // Safe silent fail
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadCount();

    return () => {
      isMounted = false;
    };
  }, []);

  // Graceful loading skeleton
  if (isLoading) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/15 bg-primary/5 text-text-muted font-mono text-[11px] sm:text-xs select-none animate-pulse ${className}`}
        aria-label="Loading unique visitor count"
      >
        <Users size={13} className="text-primary/60 shrink-0" aria-hidden="true" />
        <span className="w-16 h-3 bg-primary/10 rounded" />
      </div>
    );
  }

  // Graceful error fallback: if API or Redis is unavailable, hide smoothly without breaking the layout
  if (count === null) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-text-secondary font-mono text-[11px] sm:text-xs transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_-3px_var(--color-primary-glow)] select-none ${className}`}
      aria-label={`${count.toLocaleString()} unique website visitors`}
      title="Lifetime unique visitors tracked in Upstash Redis"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Users size={13} className="text-primary shrink-0" aria-hidden="true" />
      <span>
        <strong className="text-text-primary font-semibold">
          {count.toLocaleString()}
        </strong>{" "}
        <span className="text-text-muted">unique visitors</span>
      </span>
    </motion.div>
  );
}

export default VisitorCounter;

