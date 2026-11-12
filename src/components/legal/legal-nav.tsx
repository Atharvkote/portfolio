import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

interface DocumentRef {
  title: string;
  href: string;
}

interface LegalNavigationProps {
  prev?: DocumentRef;
  next?: DocumentRef;
}

export function LegalNavigation({ prev, next }: LegalNavigationProps) {
  return (
    <div className="mt-14 pt-8 border-t border-white/[0.08]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {prev ? (
          <Link
            to={prev.href}
            className="group flex flex-col p-4 rounded-xl border border-white/[0.08] bg-bg-card/40 hover:border-primary/30 hover:bg-bg-card/80 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-text-dim uppercase tracking-wider mb-1.5 group-hover:text-primary transition-colors">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Previous Document
            </span>
            <span className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {next && (
          <Link
            to={next.href}
            className="group flex flex-col items-start sm:items-end text-left sm:text-right p-4 rounded-xl border border-white/[0.08] bg-bg-card/40 hover:border-primary/30 hover:bg-bg-card/80 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-text-dim uppercase tracking-wider mb-1.5 group-hover:text-primary transition-colors">
              Next Document
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-primary transition-colors line-clamp-1">
              {next.title}
            </span>
          </Link>
        )}
      </div>

      <div className="flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-bg-card/30 hover:border-primary/40 hover:bg-primary/5 text-text-secondary hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
        >
          <Home size={14} className="text-primary" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

