import { useState } from "react";
import { ListOrdered, ChevronDown } from "lucide-react";

export interface TOCItem {
  id: string;
  label: string;
  number?: string;
}

interface TOCProps {
  items: TOCItem[];
  activeId: string;
}

export function MobileLegalTableOfContents({ items, activeId }: TOCProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
      setMobileOpen(false);
    }
  };

  const activeIndex = items.findIndex((i) => i.id === activeId);
  const activeItem = items[activeIndex] || items[0];

  return (
    <div className="lg:hidden mb-8 sticky top-20 z-20">
      <div className="rounded-xl border border-white/[0.1] bg-bg-card/95 backdrop-blur-md p-3 shadow-xl">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-3 text-left"
          aria-expanded={mobileOpen}
        >
          <div className="flex items-center gap-2 min-w-0">
            <ListOrdered size={15} className="text-primary shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs text-text-dim uppercase tracking-wider shrink-0">
              Jump to:
            </span>
            <span className="font-display text-xs text-white font-medium truncate">
              {activeItem?.label || "Sections"}
            </span>
          </div>
          <ChevronDown
            size={16}
            className={`text-text-muted transition-transform duration-200 shrink-0 ${
              mobileOpen ? "rotate-180 text-primary" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {mobileOpen && (
          <nav className="mt-3 pt-3 border-t border-white/[0.08] max-h-60 overflow-y-auto space-y-1">
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-text-secondary hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.number && (
                    <span className="font-mono text-[11px] opacity-70 shrink-0">
                      {item.number}
                    </span>
                  )}
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

export function LegalTableOfContents({ items, activeId }: TOCProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <aside className="sticky top-28">
      <div className="rounded-2xl border border-white/[0.08] bg-bg-card/40 backdrop-blur-sm p-5">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <ListOrdered size={14} className="text-primary" aria-hidden="true" />
            <span className="font-mono text-[11px] font-bold text-text-dim uppercase tracking-widest">
              Contents
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-dim">
            {items.length} sections
          </span>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group relative flex items-baseline gap-2.5 px-3 py-2 rounded-lg text-xs leading-snug transition-all duration-200 ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-text-secondary hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.number && (
                  <span
                    className={`font-mono text-[11px] shrink-0 transition-colors ${
                      isActive ? "text-primary" : "text-text-dim group-hover:text-text-muted"
                    }`}
                  >
                    {item.number}
                  </span>
                )}
                <span className="line-clamp-2">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
