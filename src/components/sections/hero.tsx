import { motion, type Variants } from "framer-motion";
import { ChevronRight, Layers } from "lucide-react";
import { MdOutlineFileDownload } from "react-icons/md";
import { toast } from "sonner";
import { trackResumeDownload } from "../../lib/analytics";
import GlowHorizonFM from "../ui/glow-horizon";
import { FaTerminal } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Hero() {
  const handleResumeDownload = () => {
    trackResumeDownload();
    const toastId = toast.loading("Downloading resume...");
    setTimeout(() => {
      toast.success("Resume downloaded!", { id: toastId });
    }, 2000);
  };

  return (
    <section
      id="hero"
      className="w-full min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 pb-4 sm:pb-6 relative overflow-hidden text-center bg-black select-none"
    >

      {/* Vertically Centered Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center w-full my-auto z-10 py-4 sm:py-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Software Engineer Pill Badge */}
          <motion.div
            variants={item}
            className="inline-flex bg-linear-to-l from-primary to-bg items-center gap-2.5 px-4 py-1.5 rounded-md "
          >
            <FaTerminal className="text-primary" />
            <span className="  text-xs sm:text-sm font-medium tracking-wide text-[#F5F5F5]">
              Software Engineer
            </span>
          </motion.div>

          {/* Main Headline: ATHARVA Image with Kote Signature Overlay */}
          <motion.div
            variants={item}
            className="relative flex flex-col items-center justify-center w-full mt-2 mb-10 sm:mb-14 pb-2 sm:pb-4"
          >
            <h1 className="sr-only">Atharva Kote - Software Engineer</h1>
            <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[680px] lg:max-w-[840px] xl:max-w-[920px] px-2 flex justify-center">
              <img
                src="/ATHARVA.png"
                alt="ATHARVA"
                className="w-full h-auto select-none pointer-events-none drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)] filter brightness-105"
                draggable={false}
              />
            </div>

            {/* Overlay Signature: Kote */}
            <div
              className="absolute top-[52%] left-1/2 flex flex-col items-center pointer-events-none z-10"
              style={{ transform: "translate(-44%, -8%) rotate(-6deg)" }}
            >
              <span className="font-['Allura'] text-[clamp(4.5rem,12vw,10.5rem)] text-[#01d8b4] whitespace-nowrap leading-none select-none drop-shadow-[0_0_35px_rgba(0,240,192,0.65)]">
                Kote
              </span>
              {/* Tapered signature swoosh underline */}
              <svg
                viewBox="0 0 260 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[180px] sm:w-[240px] md:w-[290px] h-auto -mt-5 sm:-mt-10 ml-8 text-[#01d8b4] drop-shadow-[0_0_20px_rgba(0,240,192,0.6)]"
              >
                <path
                  d="M6 18C45 13 110 8 185 11C215 12 245 15 256 19C240 18 190 14 140 16C90 18 35 22 10 24C7 24 5 21 6 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </motion.div>

          {/* Tagline — Ample top margin ensures clean separation without text collision */}
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center max-w-2xl mx-auto z-10"
          >
            <p className="font-['Manrope'] font-semibold text-[11px] sm:text-xs md:text-[13px] tracking-[0.35em] text-[#92999A] uppercase mb-2">
              I DESIGN AND BUILD SYSTEMS THAT
            </p>
            <h2 className="badone-font italic font-semibold text-[clamp(1.9rem,4.4vw,3.8rem)] text-white leading-tight">
              solve real <span className="text-[#01d8b4] drop-shadow-[0_0_30px_rgba(1,216,180,0.45)]">problems.</span>
            </h2>
          </motion.div>

          {/* Action Buttons — 3D Double-Layer Offset Border matching reference */}
          <motion.div variants={item} className="flex flex-wrap gap-5 sm:gap-6 justify-center items-center z-10 mt-5 sm:mt-7">
            <motion.a
              href="/work"
              className="relative inline-block group"
            >
              <span className="relative z-10 px-6 sm:px-7 py-3 rounded-xl group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary text-white overflow-hidden inline-flex items-center gap-2 font-medium text-sm sm:text-base transition-transform duration-200 cursor-pointer">
                {/* Background layer */}
                <span className="absolute inset-0 bg-black z-0 transition-all duration-300 group-hover:scale-105"></span>

                {/* Content */}
                <span className="relative z-10 font-medium text-white">Check out my work</span>
                <ChevronRight size={18} className="relative z-10 text-primary group-hover:translate-x-0.5 transition-transform" />
              </span>

              {/* Shadow / offset layer */}
              <span className="absolute inset-0 border-2 border-primary rounded-xl translate-x-1.5 translate-y-1.5 transition-all duration-300 group-hover:bg-primary shadow-[0_0_16px_var(--color-primary-glow)]"></span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              onClick={handleResumeDownload}
              className="relative inline-block group"
            >
              <span className="relative z-10 px-6 sm:px-7 py-3 rounded-xl group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary text-white overflow-hidden inline-flex items-center gap-2 font-medium text-sm sm:text-base transition-transform duration-200 cursor-pointer">
                {/* Background layer */}
                <span className="absolute inset-0 bg-black z-0 transition-all duration-300 group-hover:scale-105"></span>

                {/* Content */}
                <span className="relative z-10 font-medium text-white">Download Resume</span>
                <MdOutlineFileDownload className="relative z-10 text-xl text-primary group-hover:translate-y-0.5 transition-transform" />
              </span>

              {/* Shadow / offset layer */}
              <span className="absolute inset-0 border-2 border-primary rounded-xl translate-x-1.5 translate-y-1.5 transition-all duration-300 group-hover:bg-primary shadow-[0_0_16px_var(--color-primary-glow)]"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-Width Bottom Row: Location (Left) and Education (Right) exactly matching reference */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center z-20 pb-2 pointer-events-none shrink-0">
        {/* Left: Location */}
        <div className="flex items-center gap-2.5 text-left pointer-events-auto ml-0 lg:ml-6">
          <IoLocationSharp size={18} className="text-[#01d8b4] shrink-0 drop-shadow-[0_0_12px_rgba(1,216,180,0.5)]" />
          <div className="font-mono text-xs">
            <div className="text-[#F5F5F5] font-medium leading-snug uppercase">Based in Maharasthra,</div>
            <div className="text-[#92999A] text-[11px] leading-snug">India</div>
          </div>
        </div>

        {/* Right: Education */}
        <div className="flex items-center gap-2.5 text-right pointer-events-auto mr-0 lg:mr-6">
          <div className="font-mono text-xs">
            <div className="text-[#F5F5F5] font-medium leading-snug">CSE &apos;27,</div>
            <div className="text-[#92999A] text-[11px] leading-snug">Sanjivani College of Engineering</div>
          </div>
          <Layers size={18} className="text-[#01d8b4] shrink-0 drop-shadow-[0_0_12px_rgba(1,216,180,0.5)]" />
        </div>
      </div>

      <GlowHorizonFM
        variant="top"
        colors={["#00F0C0", "#01d8b4", "#003D35", "#000000"]}
        className="z-0 pointer-events-none"
      />
    </section>
  );
}
