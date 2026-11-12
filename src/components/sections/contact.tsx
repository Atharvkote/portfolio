import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { FaMessage } from "react-icons/fa6";
import { Link2 } from "lucide-react";
import { trackContactClick } from "../../lib/analytics";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 sm:mb-12 max-w-[650px] mx-auto"
      >
        <span className="font-mono text-xs sm:text-[13px] tracking-[0.25em] text-primary uppercase mb-2 block">
          08. WHAT'S NEXT?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Get In <span className="badone-font italic font-normal text-primary">Touch</span>
        </h2>
        <p className="text-text-muted text-sm sm:text-base mt-2 leading-relaxed">
          I'm actively exploring new engineering opportunities, distributed systems projects, and open-source collaborations.
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
          onClick={() => trackContactClick("email", portfolioData.email)}
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative inline-block group"
        >
          <span className="relative z-10 px-6 py-3 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary/30 text-text-primary overflow-hidden inline-block">
            <span className="absolute inset-0 bg-bg z-0 transition-all duration-300 group-hover:scale-105"></span>

            <span className="relative z-10 font-medium">
              Say Hello <FaMessage className="inline-block ml-1 text-base text-primary" aria-hidden="true" />
            </span>
          </span>

          <span className="absolute inset-0 border border-primary/30 rounded-lg translate-x-1 translate-y-1 transition-all duration-300 group-hover:bg-primary"></span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="relative inline-block"
        >
          <Link
            to="/links"
            className="relative inline-block group"
          >
            <span className="relative z-10 px-6 py-3 rounded-lg group-hover:translate-x-1 group-hover:translate-y-1 border-2 border-primary/30 text-text-primary overflow-hidden inline-block">
              <span className="absolute inset-0 bg-bg z-0 transition-all duration-300 group-hover:scale-105"></span>

              <span className="relative z-10 font-medium">
                All Links <Link2 className="inline-block ml-1 text-lg text-primary" aria-hidden="true" />
              </span>
            </span>

            <span className="absolute inset-0 border border-primary/30 rounded-lg translate-x-1 translate-y-1 transition-all duration-300 group-hover:bg-primary"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

