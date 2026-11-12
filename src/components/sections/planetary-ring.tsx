
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useReducedMotion,
} from "framer-motion";

export function PlanetaryRing() {
  const shouldReduceMotion = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 180,
    mass: 0.5,
  });

  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 200,
  });

  const energy = useTransform(
    [smoothProgress, smoothVelocity],
    ([progress, velocity]: number[]) => {
      const base = Math.min(progress / 0.4, 1);

      const boost = shouldReduceMotion
        ? 0
        : Math.min(Math.abs(velocity) / 1600, 1) * 0.18;

      return Math.min(1, base + boost);
    }
  );

  const lineOpacity = useTransform(
    energy,
    [0, 1],
    [0.8, 1]
  );

  const glowFilter = useTransform(energy, (value) => {
    const e = shouldReduceMotion ? 0 : value;

    const s1 = 8 + e * 3;
    const s2 = 20 + e * 10;
    const s3 = 40 + e * 20;
    const s4 = 75 + e * 25;
    const s5 = 110 + e * 35;

    const a1 = 0.75 + e * 0.2;
    const a2 = 0.45 + e * 0.25;
    const a3 = 0.25 + e * 0.2;
    const a4 = 0.13 + e * 0.12;
    const a5 = 0.06 + e * 0.08;

    return [
      `drop-shadow(0 0 ${s1}px rgba(0, 217, 181, ${a1}))`,
      `drop-shadow(0 0 ${s2}px rgba(0, 217, 181, ${a2}))`,
      `drop-shadow(0 0 ${s3}px rgba(0, 217, 181, ${a3}))`,
      `drop-shadow(0 0 ${s4}px rgba(0, 217, 181, ${a4}))`,
      `drop-shadow(0 0 ${s5}px rgba(0, 217, 181, ${a5}))`,
    ].join(" ");
  });

  return (
    <div
      aria-hidden="true"
      className="
        absolute inset-0
        w-full h-full
        pointer-events-none
        select-none
        overflow-visible
      "
      style={{
        zIndex: 0,
      }}
    >

      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full overflow-visible"
      >
        <defs>
          <filter
            id="planetary-neon"
            x="-20%"
            y="-600%"
            width="140%"
            height="1300%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="65"
              result="wide"
            />
            <feComponentTransfer in="wide" result="wideDim">
              <feFuncA type="linear" slope="0.12" />
            </feComponentTransfer>

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="32"
              result="medium"
            />
            <feComponentTransfer in="medium" result="mediumDim">
              <feFuncA type="linear" slope="0.22" />
            </feComponentTransfer>

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="inner"
            />
            <feComponentTransfer in="inner" result="innerDim">
              <feFuncA type="linear" slope="0.45" />
            </feComponentTransfer>

            <feMerge>
              <feMergeNode in="wideDim" />
              <feMergeNode in="mediumDim" />
              <feMergeNode in="innerDim" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M -40 205 Q 720 68 1480 205"
          fill="none"
          stroke="#00D9B5"
          strokeWidth="2.8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{
            opacity: lineOpacity,
            filter: glowFilter,
          }}
        />
      </svg>

    </div>
  );
}
