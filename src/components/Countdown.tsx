/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CountdownProps {
  isSinhala: boolean;
}

export default function Countdown({ isSinhala }: CountdownProps) {
  const targetDate = new Date("2026-05-26T18:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isOver: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { labelSi: "දින", labelEn: "Days", value: timeLeft.days },
    { labelSi: "පැය", labelEn: "Hours", value: timeLeft.hours },
    { labelSi: "මිනිත්තු", labelEn: "Mins", value: timeLeft.minutes },
    { labelSi: "තත්පර", labelEn: "Secs", value: timeLeft.seconds },
  ];

  if (timeLeft.isOver) {
    return (
      <div className="flex justify-center flex-col items-center py-4 px-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
        <span className="text-amber-400 font-semibold tracking-wide uppercase text-xs md:text-sm">
          {isSinhala ? "● වෙසක් කලාපය ආරම්භ වී ඇත" : "● VESAK ZONE IS NOW OPEN!"}
        </span>
        <span className="text-xl md:text-2xl font-bold font-sinhala mt-1 text-yellow-300 animate-pulse text-center">
          {isSinhala ? "සාදරයෙන් පිළිගනිමු!" : "A Warm Welcome to Everyone!"}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-amber-400/80 uppercase text-xs tracking-widest font-semibold mb-3">
        {isSinhala ? "වෙසක් කලාපය ඇරඹීමට තව" : "COUNTDOWN TO COMMENCEMENT"}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full">
        {timeBlocks.map((block, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-zinc-950/70 border border-amber-900/30 rounded-xl p-2 sm:p-3 relative overflow-hidden group shadow-lg shadow-black/40 hover:border-amber-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Value Animation */}
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 font-mono tracking-tight drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              {block.value.toString().padStart(2, "0")}
            </div>
            
            <div className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase font-sinhala font-medium">
              {isSinhala ? block.labelSi : block.labelEn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
