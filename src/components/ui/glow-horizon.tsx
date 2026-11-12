"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const DEFAULT_DURATION = 2;

export type GlowHorizonVariant = "top" | "bottom" | "left" | "right";

const VARIANTS: Record<
  GlowHorizonVariant,
  {
    axis: "x" | "y";
    scaleAxis: "scaleX" | "scaleY";
    enterPct: string;
    restPct: string;
  }
> = {
  top:    { axis: "y", scaleAxis: "scaleY", enterPct: "-100%", restPct: "-42%" },
  bottom: { axis: "y", scaleAxis: "scaleY", enterPct:  "100%", restPct:  "50%" },
  left:   { axis: "x", scaleAxis: "scaleX", enterPct:  "100%", restPct:  "50%" },
  right:  { axis: "x", scaleAxis: "scaleX", enterPct: "-100%", restPct: "-50%" },
};

export interface GlowHorizonProps {
  className?: string;
  variant?: GlowHorizonVariant;

  colors?: [string, string, string, string];

  lightColor?: string;
  highlightColor?: string;
  coreColor?: string;
  core?: string;

  primaryColor?: string;
  primary?: string;

  darkerColor?: string;
  darker?: string;

  bgColor?: string;
  bg?: string;

  boxShadow?: string;

  duration?: number;
  enterPct?: string;
  restPct?: string;
}

export function GlowHorizonFM({
  className,
  variant = "top",
  colors,
  lightColor,
  highlightColor,
  coreColor,
  core,
  primaryColor,
  primary,
  darkerColor,
  darker,
  bgColor,
  bg,
  boxShadow,
  duration = DEFAULT_DURATION,
  enterPct: customEnterPct,
  restPct: customRestPct,
}: GlowHorizonProps) {
  const c1 = colors?.[0] ?? lightColor ?? highlightColor ?? coreColor ?? core ?? "#00F0C0";
  const c2 = colors?.[1] ?? primaryColor ?? primary ?? "#01d8b4";
  const c3 = colors?.[2] ?? darkerColor ?? darker ?? "#003D35";
  const c4 = colors?.[3] ?? bgColor ?? bg ?? "#000000";

  const { axis, scaleAxis, enterPct: defaultEnterPct, restPct: defaultRestPct } = VARIANTS[variant];
  const enterPct = customEnterPct ?? defaultEnterPct;
  const restPct = customRestPct ?? defaultRestPct;

  const defaultShadow = {
    top: `0px -4px 24px 0px rgba(0, 240, 192, 0.65)`,
    bottom: `0px 4px 24px 0px rgba(0, 240, 192, 0.65)`,
    left: `-4px 0px 24px 0px rgba(0, 240, 192, 0.65)`,
    right: `4px 0px 24px 0px rgba(0, 240, 192, 0.65)`,
  }[variant];

  const finalShadow = boxShadow ?? defaultShadow;

  return (
    <motion.div
      className={
        "absolute pointer-events-none " +
        (variant === "top" || variant === "bottom"
          ? "w-[240vw] sm:w-[160vw] md:w-full min-w-[720px] md:min-w-0 left-1/2 -translate-x-1/2 h-[110vh] sm:h-[105vh] md:h-full "
          : "w-full h-[240vh] sm:h-[160vh] md:h-full min-h-[720px] md:min-h-0 top-1/2 -translate-y-1/2 ") +
        (className ?? "")
      }
      style={{ isolation: "isolate" }}
      initial={{ [axis]: enterPct, [scaleAxis]: 1.5, opacity: 0, filter: "blur(15px)" }}
      animate={{ [axis]: restPct,  [scaleAxis]: 1,   opacity: 1, filter: "blur(0px)"  }}
      transition={{ duration, ease: EASE }}
    >
      <Arc
        variant={variant}
        color={c1}
        size="132%"
        boxShadow={finalShadow}
        delay={1.2}
        duration={duration}
      />

      <Arc
        variant={variant}
        color={c2}
        size="120%"
        initialOffset="10%"
        blur={31}
        delay={0.6}
        duration={duration}
      />

      <Arc
        variant={variant}
        color={c3}
        size="124%"
        initialOffset="10%"
        blur={21}
        delay={0}
        duration={duration}
      />

      <Arc
        variant={variant}
        color={c4}
        size="120%"
        initialOffset="10%"
        blur={51}
        delay={0}
        duration={duration}
      />
    </motion.div>
  );
}

function Arc({
  variant,
  color,
  size,
  initialOffset,
  blur,
  boxShadow,
  delay,
  duration = DEFAULT_DURATION,
}: {
  variant: GlowHorizonVariant;
  color: string;
  size: string;
  initialOffset?: string;
  blur?: number;
  boxShadow?: string;
  delay: number;
  duration?: number;
}) {
  const scale = parseFloat(size) / 100;
  const { axis, enterPct } = VARIANTS[variant];
  const sign = enterPct.startsWith("-") ? -1 : 1;
  const startPct = initialOffset
    ? `${sign * Math.abs(parseFloat(initialOffset) - 50)}%`
    : undefined;

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 rounded-[100%]"
      style={{
        scale,
        background: color,
        ...(blur !== undefined && { filter: `blur(${blur}px)` }),
        ...(boxShadow && { boxShadow }),
      }}
      initial={startPct ? { [axis]: startPct } : false}
      animate={startPct ? { [axis]: 0 } : undefined}
      transition={{ duration, ease: EASE, delay }}
    />
  );
}

export default GlowHorizonFM;
