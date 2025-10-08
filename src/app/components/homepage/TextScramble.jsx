"use client";

import React, { useEffect, useState, useRef } from "react";

export default function TextScramble({ text, interval = 50, repeatDelay = 5000 }) {
  const [displayText, setDisplayText] = useState("");
  const frameRef = useRef(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // The scramble function
  const scramble = () => {
    let output = "";
    let complete = true;

    for (let i = 0; i < text.length; i++) {
      if (frameRef.current / 6 > i) {
        output += text[i];
      } else {
        complete = false;
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }

    setDisplayText(output);

    if (!complete) {
      frameRef.current++;
      timeoutRef.current = setTimeout(scramble, interval);
    } else {
      setDisplayText(text); // Ensure final state
    }
  };

  useEffect(() => {
    // Start the animation immediately
    frameRef.current = 0;
    scramble();

    // Set up interval to repeat animation every `repeatDelay` ms
    intervalRef.current = setInterval(() => {
      frameRef.current = 0;
      scramble();
    }, repeatDelay);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, interval, repeatDelay]);

  return (
<h2 className="text-4xl font-extrabold text-center mb-2 text-white select-none tracking-wider">      {displayText}
    </h2>
  );
}
