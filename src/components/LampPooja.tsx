/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, HelpCircle, Heart, Award } from "lucide-react";
import { LitLamp } from "../types";
import { DHAMMAPADA_QUOTES } from "../data";
import { vesakSynth } from "../utils/audio";

interface LampPoojaProps {
  isSinhala: boolean;
}

export default function LampPooja({ isSinhala }: LampPoojaProps) {
  const [lamps, setLamps] = useState<LitLamp[]>([]);
  const [totalLitCount, setTotalLitCount] = useState(1054);
  const [lastMessage, setLastMessage] = useState<{ si: string; en: string; sourceSi: string; sourceEn: string } | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const altarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load counts from local storage if available
    const savedLamps = localStorage.getItem("vesak_lit_lamps");
    const savedCount = localStorage.getItem("vesak_total_lit_count");
    
    if (savedLamps) {
      try {
        setLamps(JSON.parse(savedLamps));
      } catch (e) {}
    } else {
      // Add a few default pretty lit lamps so the altar isn't empty!
      const initialLamps: LitLamp[] = [
        { id: "init-1", x: 25, y: 40, timestamp: Date.now() },
        { id: "init-2", x: 50, y: 30, timestamp: Date.now() },
        { id: "init-3", x: 75, y: 40, timestamp: Date.now() },
        { id: "init-4", x: 38, y: 55, timestamp: Date.now() },
        { id: "init-5", x: 62, y: 55, timestamp: Date.now() },
      ];
      setLamps(initialLamps);
      localStorage.setItem("vesak_lit_lamps", JSON.stringify(initialLamps));
    }

    if (savedCount) {
      setTotalLitCount(parseInt(savedCount, 10));
    } else {
      // Set a random start count around 4,800 to look active
      const randomStart = Math.floor(Math.random() * 500) + 4720;
      setTotalLitCount(randomStart);
      localStorage.setItem("vesak_total_lit_count", randomStart.toString());
    }
  }, []);

  const handleAltarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!altarRef.current) return;

    // Get click coordinates relative to altar container
    const rect = altarRef.current.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    // Limit clicking outside the printable circle of the altar
    if (y < 15 || y > 85 || x < 10 || x > 90) return;

    // Play a sweet E5 / G5 chime sound using our synthesizer
    try {
      vesakSynth.init();
      const midiNotes = [523.25, 587.33, 659.25, 783.99, 880.00]; // Pentatonic notes
      const randomPitch = midiNotes[Math.floor(Math.random() * midiNotes.length)];
      vesakSynth.playBellNote(randomPitch, 2.0);
    } catch (err) {}

    const newLamp: LitLamp = {
      id: "lamp-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
      x,
      y,
      timestamp: Date.now(),
    };

    const updatedLamps = [...lamps, newLamp];
    setLamps(updatedLamps);
    
    const newCount = totalLitCount + 1;
    setTotalLitCount(newCount);

    localStorage.setItem("vesak_lit_lamps", JSON.stringify(updatedLamps));
    localStorage.setItem("vesak_total_lit_count", newCount.toString());

    // Display a random Dhammapada quote blessing
    const randomQuote = DHAMMAPADA_QUOTES[Math.floor(Math.random() * DHAMMAPADA_QUOTES.length)];
    setLastMessage(randomQuote);
    setShowMessage(true);

    // Automatically hide blessing after 6 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 6000);
  };

  const clearAltar = () => {
    setLamps([]);
    localStorage.setItem("vesak_lit_lamps", JSON.stringify([]));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 bg-[#11131c]/60 border border-[#1e293b] rounded-3xl backdrop-blur-sm shadow-xl">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          {isSinhala ? "පහන් පූජා මහෝත්සවය" : "Interactive Digital Altar"}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold font-sinhala text-amber-100 mb-2 tracking-tight">
          {isSinhala ? "ඡීවන ආලෝකය දල්වමු" : "Light an Oil Lamp for Blessings"}
        </h2>
        <p className="text-sm text-slate-400 font-sinhala">
          {isSinhala
            ? "පූජනීය බිම සිහිපත් කරමින් පහත පීඨය මත ක්ලික් කර මැටි පහනක් දල්වා ලංකාවේ සියලු ජනයාට ආශිර්වාද පතන්න."
            : "Click anywhere on the decorative altar below to light a traditional clay oil lamp, sending virtual prayers and wishing wellness to all."}
        </p>

        {/* Global Counter displaying total lamps lit */}
        <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0c0e14]/90 border border-[#1e293b] shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-zinc-300 text-xs font-semibold uppercase tracking-wider">
            {isSinhala ? "දල්වා ඇති මුළු පහන් ගණන" : "TOTAL LAMPS LIT SO FAR"}:
          </span>
          <span className="text-lg md:text-xl font-bold text-amber-400 font-mono tracking-wider drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            {totalLitCount.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Dhammapada wisdom bubble banner */}
      <div className="h-28 flex items-center justify-center mb-6 px-4">
        <AnimatePresence mode="wait">
          {showMessage && lastMessage ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full max-w-2xl px-6 py-4 rounded-2xl bg-amber-950/20 border border-amber-500/20 backdrop-blur-md text-center shadow-md relative group"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md bg-amber-500 text-[10px] text-zinc-950 font-bold font-sinhala uppercase tracking-wider">
                {isSinhala ? "ධර්මපද ආශිර්වාදය" : "Dhammapada Quote"}
              </div>
              <p className="text-xs md:text-sm text-amber-200 mt-1 italic whitespace-pre-line font-sinhala leading-relaxed">
                {isSinhala ? lastMessage.si : lastMessage.en}
              </p>
              <p className="text-[10px] text-amber-400/70 mt-2 font-sinhala">
                - {isSinhala ? lastMessage.sourceSi : lastMessage.sourceEn}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-zinc-500 text-xs max-w-lg font-sinhala"
            >
              <p className="flex items-center justify-center gap-1.5 justify-center">
                <HelpCircle className="w-4 h-4 text-zinc-600" />
                {isSinhala 
                  ? "පහන් පීඨයේ හිස් ස්ථාන සිත් සනසන ලෙස ආලෝකවත් කරන්න." 
                  : "Clicking the dark altar creates a sparkling golden flame."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Altar */}
      <div className="relative max-w-xl mx-auto aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl">
        {/* Altar base graphics wrapper */}
        <div
          ref={altarRef}
          onClick={handleAltarClick}
          className="absolute inset-0 bg-radial from-amber-950/75 via-neutral-950 to-black border border-amber-900/30 rounded-2xl cursor-pointer relative select-none overflow-hidden group shadow-inner shadow-black"
        >
          {/* Subtle Buddhist flag colors stream on margins */}
          <div className="absolute inset-x-0 top-0 h-1 flex opacity-60">
            <div className="flex-1 bg-blue-600" />
            <div className="flex-1 bg-yellow-400" />
            <div className="flex-1 bg-red-600" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-orange-500" />
          </div>

          {/* Altar Mandala circular concentric backdrop design */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-amber-500/5 rounded-full flex items-center justify-center pointer-events-none">
            <div className="w-3/4 h-3/4 border border-amber-500/10 rounded-full flex items-center justify-center border-dashed">
              <div className="w-1/2 h-1/2 border border-amber-500/5 rounded-full flex items-center justify-center">
                <div className="w-1/4 h-1/4 bg-amber-500/2 rounded-full filter blur-xl" />
              </div>
            </div>
          </div>

          {/* Altar instruction tag overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none bg-zinc-950/90 border border-amber-900/40 text-center px-4 py-1.5 rounded-full shadow-lg group-hover:border-amber-500/30 transition-all duration-300">
            <p className="text-[10px] sm:text-xs text-amber-400 font-sinhala font-medium uppercase tracking-wider">
              {isSinhala ? "පහනක් දැල්වීමට මෙතැන ක්ලික් කරන්න" : "CLICK INSIDE ALTAR TO LIGHT LAMP"}
            </p>
          </div>

          {/* Render Lit Lamps */}
          <AnimatePresence>
            {lamps.map((lamp) => (
              <motion.div
                key={lamp.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 select-none"
                style={{ left: `${lamp.x}%`, top: `${lamp.y}%` }}
              >
                {/* Visual clay bowl */}
                <div className="relative w-12 h-8 flex flex-col justify-end items-center pointer-events-none">
                  <div className="w-10 h-3 rounded-full bg-zinc-800/80 border border-amber-800/30 shadow-inner" />
                  <div className="w-12 h-5 bg-gradient-to-b from-amber-800 to-amber-950 border-t border-amber-700/50 rounded-b-full shadow-md flex items-center justify-center">
                    {/* Altar reflection ring underneath bowl */}
                    <div className="absolute -bottom-2 w-8 h-1 rounded-full bg-amber-400/20 filter blur-xs" />
                  </div>

                  {/* Oil Lamp glowing Flame */}
                  <div className="absolute -top-[18px] left-[17px] w-4 h-6 flex flex-col items-center">
                    {/* Golden radiant core */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 0.95, 1.1, 1],
                        y: [0, -1, 1, -2, 0],
                        rotate: [0, -1, 2, -2, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                      className="w-3.5 h-6 rounded-full bg-gradient-to-t from-red-500 via-amber-400 to-yellow-200 shadow-[0_0_12px_rgba(245,158,11,1)] origin-bottom"
                    />

                    {/* Outer fire blur reflection */}
                    <div className="absolute w-8 h-8 -top-1 rounded-full bg-amber-500/30 filter blur-md animate-pulse" />

                    {/* Small rising embers particles */}
                    <motion.div
                      initial={{ opacity: 0, y: 0, scale: 0.8 }}
                      animate={{
                        opacity: [0, 0.8, 0],
                        y: -15 - Math.random() * 20,
                        x: [-2, 2, -1],
                        scale: 0.3,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.0,
                        delay: Math.random() * 1.5,
                      }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-yellow-300 filter blur-xs"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center px-2">
        <p className="text-[10px] text-zinc-500">
          {isSinhala ? "භාවනාවෙන් සිත සංසුන් කරගන්න." : "Calm your mind in silence."}
        </p>
        
        {lamps.length > 0 && (
          <button
            onClick={clearAltar}
            className="text-xs text-zinc-500 hover:text-red-400/80 border border-zinc-800/80 hover:border-red-900/30 bg-zinc-950/20 hover:bg-red-950/20 px-3 py-1.5 rounded-xl transition-all font-sinhala shadow-sm cursor-pointer"
          >
            {isSinhala ? "පීඨය හිස් කරන්න" : "Clear My Lamps"}
          </button>
        )}
      </div>
    </div>
  );
}
