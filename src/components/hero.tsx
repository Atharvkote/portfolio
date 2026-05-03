import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ScrollMouse } from "./scroll-indicator";
import { MdOutlineFileDownload } from "react-icons/md";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.4  },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center py-0 relative"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" mb-6"
      >
        <motion.p
          variants={item}
          className="font-mono text-primary text-sm md:text-base ml-1"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[clamp(40px,8vw,72px)] font-bold leading-[1.05] mb-3"
        >
          Atharva
          <span className="text-primary"> Kote.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="border-l-[4px] border-primary pl-5 text-2xl md:text-4xl font-bold leading-relaxed md:leading-[1.4] text-text-secondary/60 mb-8"
        >
          <span className="underline decoration-[3px] decoration-primary underline-offset-6 text-text-primary">
            Curious by Nature
          </span>
          ,{" "}
          <span className=" border border-primary rounded-xl px-3 py-1 text-text-primary">
            Disciplined
          </span>{" "}
          in Effort,
          and Consistent in{" "} <span className="inline-block bg-primary text-text-primary px-3 mt-2 rounded-xl shadow-md">
            Learning
          </span>
          .
        </motion.h2>
        <motion.p
          variants={item}
          className="text-text-secondary text-base md:text-lg leading-relaxed line mb-14"
        >
          I'm a software engineering student passionate about crafting
          pixel-perfect, performant digital experiences. Currently focused on
          full-stack development and cloud computing at{" "}
          <a href="#" className="link-hover">
            Sanjivani COE
          </a>
          .
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative inline-block group"
          >
            <span className="relative z-10 px-6 py-3 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary/30 text-text-primary overflow-hidden inline-block">

              <span className="absolute inset-0 bg-bg z-0  transition-all duration-300 group-hover:scale-105"></span>

              <span className="relative z-10 font-medium">
                Check out my work <ChevronRight className="inline-block ml-1" />
              </span>
            </span>

            <span className="absolute inset-0 border border-primary/30 rounded-lg translate-x-1 translate-y-1 transition-all duration-300  group-hover:bg-primary"></span>
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative inline-block group"
          >
            <span className="relative z-10 px-6 py-3 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary/30 text-text-primary overflow-hidden inline-block">

              {/* Background layer */}
              <span className="absolute inset-0 bg-bg z-0  transition-all duration-300 group-hover:scale-105"></span>

              {/* Text */}
              <span className="relative z-10 font-medium">
                Download Resume <MdOutlineFileDownload className="inline-block ml-1 text-xl" />
              </span>
            </span>

            {/* Shadow / offset layer */}
            <span className="absolute inset-0 border border-primary/30 rounded-lg translate-x-1 translate-y-1 transition-all duration-300  group-hover:bg-primary"></span>
          </motion.a>
        </motion.div>
      </motion.div>

      <ScrollMouse />

    </section>
  );
}
