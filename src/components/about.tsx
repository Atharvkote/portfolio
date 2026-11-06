import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-8 md:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="section-heading"
      >
        <span className="num">01.</span> About Me
      </motion.h2>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="space-y-5"
        >
          <p>
            Hello! I'm <span className="text-text-primary font-medium">{portfolioData.name}</span>,
            and I'm passionate about the intersection of software engineering
            and real-world problem-solving. I love building software that bridges
            technology with tangible impact.
          </p>
          <p>
            Passionate about building impactful software that bridges technology and real-world challenges. <span className="bg-primary-glow">Expertise in Full-stack Development, Cloud Computing, DevOps & Automations, and Cybersecurity. </span>Dedicated to crafting scalable and user-centric solutions.
          </p>
          {/* <p>Here are a few technologies I've been working with recently:</p> */}

          {/* <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 mt-4 font-mono text-[13px] text-text-secondary">
            {TECH_LIST.map((skill) => (
              <li key={skill} className="flex items-center gap-2.5 group">
                <span className="text-primary text-[10px] group-hover:translate-x-0.5 transition-transform">▹</span>
                <span className="group-hover:text-text-primary transition-colors">{skill}</span>
              </li>
            ))}
          </ul> */}
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="relative group mx-auto md:mx-0 w-[250px] md:w-full max-w-[300px]"
        >
          <div className="relative z-10 rounded-lg overflow-hidden aspect-square border-2 border-primary/15 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
            <img
              src="https://res.cloudinary.com/dgz7hqbl9/image/upload/w_400,c_limit,q_auto,f_auto/v1776017613/WhatsApp_Image_2026-04-12_at_11.41.15_PM_sxrxmm.jpg"
              alt="Atharva Kote — Java Backend Developer"
              loading="lazy"
              width={300}
              height={300}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute inset-0 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:bg-primary" />
        </motion.div>
      </div>
      
      <div className=" flex items-center justify-center p-6 mt-12">
        <div className="max-w-3xl text-left space-y-4">

          {/* Top line */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-6 h-10 bg-gray-700 skew-x-[-20deg] opacity-50"></div>
              <div className="w-6 h-10 bg-gray-700 skew-x-[-20deg] opacity-30"></div>
            </div>

            <p className="text-4xl font-semibold md:text-4xl italic text-gray-400">
              Development: Turning
            </p>
          </div>

          {/* Coffee into Code */}
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-16 bg-gray-600"></div>

            <p className="text-4xl md:text-5xl font-semibold font-display">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Coffee
              </span>{" "}
              <span className="text-gray-400">into</span>{" "}
              <span className="text-primary px-3 py-1 rounded-lg">
                Code
              </span>
            </p>

            <div className="h-[2px] w-16 bg-gray-600"></div>
          </div>

          {/* then Magic */}
          <p className="text-4xl md:text-5xl font-semibold font-display">
            <span className="text-gray-400">then </span>
            <span className="bg-primary text-bg font-bold px-3 py-1 rounded-lg">
              Magic.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
