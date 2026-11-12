import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HOUR_MARKERS_12 = [
  { deg: 0 },
  { deg: 30 },
  { deg: 60 },
  { deg: 90 },
  { deg: 120 },
  { deg: 150 },
  { deg: 180 },
  { deg: 210 },
  { deg: 240 },
  { deg: 270 },
  { deg: 300 },
  { deg: 330 },
];

export function LiveClock() {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hour12Deg = ((hours % 12) + minutes / 60 + seconds / 3600) * 30;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const secondDeg = seconds * 6;

  const formattedDigitalTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="order-1 md:col-span-6 lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#0c0c0e]/85 backdrop-blur-xl p-6 sm:p-7 flex flex-col items-center justify-between relative overflow-hidden group hover:border-[#01d8b4]/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.5)] min-h-[420px]"
    >
      <div className="w-full flex items-center justify-between text-xs">
        <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
          CHRONOGRAPH
        </span>
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#01d8b4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#01d8b4] animate-pulse" />
          <span>12-HOUR IST</span>
        </div>
      </div>

      <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-3 flex items-center justify-center">
        <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-[0_16px_36px_rgba(0,0,0,0.95)]">
          <defs>
            <linearGradient id="metalBezel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a7a88" />
              <stop offset="25%" stopColor="#303038" />
              <stop offset="50%" stopColor="#15151a" />
              <stop offset="75%" stopColor="#555562" />
              <stop offset="100%" stopColor="#121216" />
            </linearGradient>

            <radialGradient id="innerDialShadow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#08080a" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>

            <linearGradient id="glassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.04" />
              <stop offset="65%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="swordLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d5d5de" />
            </linearGradient>
            <linearGradient id="swordDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5a5b2" />
              <stop offset="100%" stopColor="#70707c" />
            </linearGradient>

            <filter id="handShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.85" />
            </filter>
            <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#01d8b4" floodOpacity="0.9" />
            </filter>
          </defs>

          <rect x="144" y="2" width="12" height="24" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />
          <rect x="144" y="274" width="12" height="24" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />
          <rect x="2" y="144" width="24" height="12" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />
          <rect x="274" y="144" width="24" height="12" rx="2" fill="#18181f" stroke="#333" strokeWidth="1" />

          <circle cx="150" cy="150" r="136" fill="url(#metalBezel)" stroke="#383844" strokeWidth="1.5" />

          <circle cx="150" cy="150" r="122" fill="#09090c" stroke="#1f1f26" strokeWidth="2" />
          <circle cx="150" cy="150" r="120" fill="url(#innerDialShadow)" />

          {Array.from({ length: 60 }).map((_, i) => {
            const deg = i * 6;
            const isMajor = i % 5 === 0;
            return (
              <line
                key={i}
                x1="150"
                y1={isMajor ? "35" : "38"}
                x2="150"
                y2={isMajor ? "44" : "41"}
                stroke="#ffffff"
                strokeWidth={isMajor ? "1.8" : "0.8"}
                strokeOpacity={isMajor ? "0.8" : "0.25"}
                transform={`rotate(${deg} 150 150)`}
              />
            );
          })}

          {HOUR_MARKERS_12.map((m) => {
            if (m.deg === 0) {
              return (
                <g key={m.deg} transform="rotate(0 150 150)">
                  <rect x="145" y="47" width="4" height="18" rx="1" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))" />
                  <rect x="151" y="47" width="4" height="18" rx="1" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))" />
                </g>
              );
            }
            return (
              <g key={m.deg} transform={`rotate(${m.deg} 150 150)`}>
                <rect
                  x="147.5"
                  y="47"
                  width="5"
                  height="18"
                  rx="1"
                  fill="url(#swordLight)"
                  filter="drop-shadow(0 1px 3px rgba(0,0,0,0.8))"
                />
                <line x1="150" y1="50" x2="150" y2="62" stroke="#ffffff" strokeWidth="1" />
              </g>
            );
          })}

          <circle cx="150" cy="150" r="54" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />

          <path
            d="M 50 100 Q 150 30 250 100 A 120 120 0 0 0 50 100 Z"
            fill="url(#glassGlare)"
            pointerEvents="none"
          />

          <g transform={`rotate(${hour12Deg} 150 150)`} filter="url(#handShadow)">
            <polygon points="150,86 146,138 150,150" fill="url(#swordLight)" />
            <polygon points="150,86 154,138 150,150" fill="url(#swordDark)" />
            <line x1="150" y1="92" x2="150" y2="136" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          <g transform={`rotate(${minuteDeg} 150 150)`} filter="url(#handShadow)">
            <polygon points="150,56 147,138 150,150" fill="url(#swordLight)" />
            <polygon points="150,56 153,138 150,150" fill="url(#swordDark)" />
            <line x1="150" y1="62" x2="150" y2="136" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          <g transform={`rotate(${secondDeg} 150 150)`} filter="url(#tealGlow)">
            <line x1="150" y1="42" x2="150" y2="150" stroke="#01d8b4" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="150" y1="150" x2="150" y2="174" stroke="#01d8b4" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="150" cy="164" r="3" fill="#01d8b4" />
          </g>

          <circle cx="150" cy="150" r="7" fill="#1e1e24" stroke="#777785" strokeWidth="1.5" />
          <circle cx="150" cy="150" r="3.5" fill="#01d8b4" />
          <circle cx="150" cy="150" r="1.5" fill="#ffffff" />
        </svg>
      </div>

      <div className="w-full flex items-center justify-between border-t border-white/[0.08] pt-3 text-xs text-text-muted">
        <span className="font-mono text-xs text-white/90 font-semibold tracking-wider">
          {formattedDigitalTime}
        </span>
        <span className="font-mono text-[11px] text-text-muted">
          PUNE • MINIMAL 12H
        </span>
      </div>
    </motion.div>
  );
}

