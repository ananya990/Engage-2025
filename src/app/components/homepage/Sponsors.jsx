"use client";

import React from "react";
import sponsors from "../../data/sponsors.json";
import TextScramble from "./TextScramble";

export default function Sponsors() {
  return (
    <section className="py-16 bg-opacity-90 mt-32">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Heading with scramble animation */}
        <TextScramble text="SPONSORS" />

        {/* Sponsor logos centered horizontally */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-16 md:gap-y-10">
          {sponsors.map(({ name, logo, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="transform transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#8b5cf6]"
            >
              <img
                src={logo}
                alt={`${name} Logo`}
                className="w-52 h-36 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
