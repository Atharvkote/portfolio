import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CircularCarousel, { type CircularCarouselItem } from "./ui/circular-carousel";
import { portfolioData } from "../data/portfolio";

const CAROUSEL_ITEMS: CircularCarouselItem[] = [
  {
    src: "https://res.cloudinary.com/dgz7hqbl9/image/upload/w_600,c_limit,q_auto,f_auto/v1776017613/WhatsApp_Image_2026-04-12_at_11.41.15_PM_sxrxmm.jpg",
    alt: "Atharva Kote — Java Backend Developer",
    title: "Atharva Kote",
    subtitle: "Software Engineer",
  },
  {
    src: "/boat.jpg",
    alt: "Mountain sunset horizon",
    title: "Horizons",
    subtitle: "Exploration",
  },
  {
    src: "/green.png",
    alt: "Milky way over snowy mountain peaks",
    title: "Night Sky",
    subtitle: "Vision",
  },
  // {
  //   src: "/moon.png",
  //   alt: "Milky way over snowy mountain peaks",
  //   title: "Night Sky",
  //   subtitle: "Vision",
  // },
  // {
  //   src: "/tree.png",
  //   alt: "Milky way over snowy mountain peaks",
  //   title: "Night Sky",
  //   subtitle: "Vision",
  // },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/atharvakote",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    url: "https://github.com/Atharvkote",
    icon: FaGithub,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/ImAtharva81",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/___atharv_81",
    icon: FaInstagram,
  },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden select-none">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ── Left Column: Storytelling Content & Social Links ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Overline Badge */}
          <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase block">
            01. A QUICK GLANCE
          </span>

          {/* Large Hero Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold tracking-tight text-white leading-[1.14]">
            From abstract ideas to{" "}
            <span className="badone-font italic font-normal text-primary"> real solutions.</span>
          </h2>

          {/* Narrative Body Copy */}
          <div className="space-y-4 text-text-muted text-sm sm:text-base leading-relaxed font-normal">
            <p>
              I'm <span className="text-white font-semibold">{portfolioData.name}</span>, an engineering-driven developer who turns complex architectural challenges into high-speed, scalable systems. I architect enterprise backends with a relentless focus on clean, decoupled code, robust design patterns, and seamless performance.
            </p>
            <p>
              Deep expertise in{" "}
              <span className="text-white font-medium">Java, Spring Boot ecosystem, and distributed systems</span>. From architecting microservices and Kafka streaming pipelines to designing fault-tolerant databases and secure REST APIs, I deliver modern solutions that reliably solve real problems.
            </p>
            <p>
              Dedicated to crafting scalable and user-centric software that bridges technology and tangible impact. My code is built to last, engineered to scale, and designed to perform under real-world pressure.
            </p>
          </div>

          {/* Social Links matching the reference */}
          <div className="flex items-center gap-3 pt-2">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-text-muted hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  aria-label={link.name}
                >
                  <Icon size={17} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* ── Right Column: 3D Curved Circular Carousel ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 relative w-full h-[560px] sm:h-[630px] md:h-[690px] flex items-center justify-center"
        >
          {/* Ambient Background Glow behind 3D Carousel */}
          <div className="absolute w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

          <CircularCarousel
            items={CAROUSEL_ITEMS}
            preset="cylinder"
            intro="rise"
            cardWidth={395}
            aspectRatio={0.69}
            gap={32}
            tilt={0}
            curve={0}
            perspective={2600}
            autoplay="step"
            interval={2.2}
            speed={14}
            direction="left"
            momentum={0.7}
            snap
            pauseOnHover
            focusOnClick
            draggable
            parallax={0.2}
            stretch={0}
            fadeColor="#000000"
            depthFade={0.55}
            innerShade={0.5}
            cornerRadius={24}
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
