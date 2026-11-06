import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollMouse() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="absolute cursor-pointer bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3"
        >
          {/* Mouse */}
          <div className="relative w-7 h-11 border-2 border-primary rounded-full flex items-start justify-center p-1">

            {/* Scroll Wheel */}
            <motion.div
              className="w-1 h-2 bg-primary rounded-full mt-1"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />

            {/* Left Button */}
            <div className="absolute top-0 left-0 w-1/2 h-5 border-r border-primary/40 rounded-tl-full"></div>

            {/* Right Button */}
            <div className="absolute top-0 right-0 w-1/2 h-5 rounded-tr-full"></div>
          </div>

          {/* Text */}
          <motion.p
            className="text-xs font-mono font-medium text-text-secondary tracking-widest"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll Down
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}