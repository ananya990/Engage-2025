"use client";

import React from "react";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-x-12 bg-opacity-60 backdrop-blur-md rounded-lg p-6 max-w-3xl mx-auto my-12 text-white">
      {/* Logo on the left */}
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <img
          src="/logos/engagelogo.svg"
          alt="Engage Logo"
          className="w-36 h-36 object-contain"
        />
      </div>

      {/* Description on the right */}
      <div className="text-lg">
        <p>
          The NorthCap University's hackathon,{" "}
          <span className="font-bold">Engage</span> is a part of our Annual
          Techno-Cultural Festival{" "}
          <span className="font-semibold italic">Momentum</span>, which
          witnesses participation from Colleges and Universities from around the
          Country.
        </p>
      </div>
    </section>
  );
}
