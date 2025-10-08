"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = new Date("2025-11-03T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4 space-y-8">
      {/* Logo */}
      <motion.img
        src="/logos/engagelogo.svg"
        alt="EN Logo"
        className="w-48 h-48"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title */}
      <motion.h1
        className="text-5xl font-bold text-center"
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5 }}
      >
        <span className="text-white drop-shadow-glow">Engage 2025</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-lg text-gray-300"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Hack - Engage - Build
      </motion.p>

      {/* CTA and Countdown */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <motion.button
          className="px-6 py-3 bg-purple-600 hover:shadow-[0_0_15px_#8b5cf6] transition-all duration-300 rounded-md font-semibold text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.button>

        <div className="flex space-x-4 text-center text-sm sm:text-base font-mono">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit}>
              <div className="text-2xl font-bold">{timeLeft[unit]}</div>
              <div className="text-gray-400 capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
