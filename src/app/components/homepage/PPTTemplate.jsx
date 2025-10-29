"use client";

import { motion } from "framer-motion";

export default function PPTTemplate() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-center text-white px-6 py-20 space-y-8">
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-center drop-shadow-glow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get Ready to Build Your Pitch!
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 max-w-2xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Download the official <span className="text-purple-400 font-bold">Engage 2025</span> PPT template and start crafting your idea.
      </motion.p>

      {/* Button */}
      <motion.a
        href="https://drive.google.com/drive/folders/1h9-sPItaqqTHPKB8zrWVY6wsfUS6PKzz?usp=sharing"
        download
        className="px-8 py-4 bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_20px_#8b5cf6] transition-all duration-300 rounded-md font-semibold text-white flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Download PPT Template ⬇️
      </motion.a>
    </section>
  );
}
