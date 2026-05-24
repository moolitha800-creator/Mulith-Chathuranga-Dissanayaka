/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX, Globe, MapPin, ChevronDown, CheckCircle, Flame } from "lucide-react";
import Countdown from "./Countdown";
const vesakLanternImg = "/src/assets/images/vesak_lantern_1779614883675.png";
import { vesakSynth } from "../utils/audio";

interface HeroSectionProps {
  isSinhala: boolean;
  setIsSinhala: (v: boolean) => void;
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  onScrollToCreator: () => void;
  onScrollToPooja: () => void;
}

export default function HeroSection({
  isSinhala,
  setIsSinhala,
  soundEnabled,
  setSoundEnabled,
  onScrollToCreator,
  onScrollToPooja,
}: HeroSectionProps) {
  const [ambientLampsCount, setAmbientLampsCount] = useState(4820);

  // Load lamps lit count for the background counters
  useEffect(() => {
    const handleStorageChange = () => {
      const count = localStorage.getItem("vesak_total_lit_count");
      if (count) setAmbientLampsCount(parseInt(count, 10));
    };
    
    handleStorageChange();
    const interval = setInterval(handleStorageChange, 1500);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    try {
      if (soundEnabled) {
        vesakSynth.stop();
        setSoundEnabled(false);
      } else {
        vesakSynth.start();
        setSoundEnabled(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Generate some random positions for gentle background rising spark particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 8 + 6,
  }));

  return (
    <div className="relative min-h-[92vh] flex flex-col justify-between items-center px-4 pt-4 pb-12 overflow-hidden bg-[#0c0e14] border-b-4 border-[#1e293b]">
      
      {/* Elegant Dark Theme Vector Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b,transparent)] opacity-40 pointer-events-none" />

      {/* Floating Animated Lanterns from the theme design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="elegant-lantern top-14 left-4 sm:left-16" style={{ animationDelay: "0s" }} />
        <div className="elegant-lantern top-60 right-6 sm:right-24" style={{ animationDelay: "1.5s" }} />
        <div className="elegant-lantern bottom-24 left-8 sm:left-28" style={{ animationDelay: "0.7s" }} />
        <div className="elegant-lantern bottom-48 right-4 sm:right-20" style={{ animationDelay: "2.2s" }} />
      </div>

      {/* Dynamic Background Rising Sparks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "105%", opacity: 0 }}
            animate={{
              y: "-10%",
              opacity: [0, 0.7, 0.7, 0],
              x: ["-5px", "5px", "-3px", "0px"],
            }}
            transition={{
              repeat: Infinity,
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: "rgba(251, 191, 36, 0.65)",
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* Floating Buddhist Flag Aura Streamer */}
      <div className="absolute top-0 inset-x-0 h-1.5 flex z-30 opacity-70">
        <div className="flex-1 bg-blue-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-orange-500" />
      </div>

      {/* Header Utilities Control Row */}
      <div className="w-full max-w-6xl flex justify-between items-center z-10 py-2 sm:py-4">
        {/* Logo label */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-2xl backdrop-blur-md">
          <span className="text-amber-500 font-bold text-sm tracking-widest font-mono">☸</span>
          <span className="text-xs font-semibold text-zinc-350 tracking-wide font-sinhala">
            {isSinhala ? "නාමල්තලාව වෙසක් කලාපය" : "Namalthalawa Vesak"}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Sounds Button */}
          <button
            onClick={toggleSound}
            aria-label="Toggle music"
            className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all text-xs cursor-pointer ${
              soundEnabled
                ? "bg-amber-500/15 border-amber-500/40 text-amber-400"
                : "bg-zinc-900/60 border-zinc-805 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-400 animate-bounce" />
                <span className="hidden sm:inline font-semibold">{isSinhala ? "සංගීතය ක්‍රියාත්මකයි" : "Sound On"}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-zinc-400" />
                <span className="hidden sm:inline">{isSinhala ? "සංගීතය අක්‍රියයි" : "Ambient Music"}</span>
              </>
            )}
          </button>

          {/* Language translation switch */}
          <button
            onClick={() => setIsSinhala(!isSinhala)}
            className="px-3 py-2 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors"
          >
            <Globe className="w-4 h-4 text-amber-500/80" />
            <span className="font-semibold">{isSinhala ? "English" : "සිංහල"}</span>
          </button>
        </div>
      </div>

      {/* Main Core Presentation block */}
      <div className="flex-1 flex flex-col items-center justify-center text-center mt-6 max-w-4xl z-10">
        
        {/* Traditional visual lantern circle image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#1e293b] p-1 bg-black/50 shadow-2xl shadow-amber-500/5 mb-6 group flex items-center justify-center"
        >
          {/* Outer glowing halo rings */}
          <div className="absolute inset-0 rounded-full border border-dashed border-amber-400/20 animate-spin" style={{ animationDuration: "60s" }} />
          <div className="absolute inset-2 rounded-full border border-double border-amber-500/10" />

          <img
            src={vesakLanternImg}
            alt="Traditional Namalthalawa Vesak Lantern"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
          />
          
          {/* Circular bottom shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Elevated Buddhist Celebration Banner */}
        <div className="inline-block px-4 py-1.5 border border-yellow-500/30 rounded-full mb-4 bg-yellow-500/5 hover:border-yellow-400/50 transition-colors">
          <span className="text-yellow-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold font-sinhala">
            {isSinhala ? "2568 සම්බුද්ධ ජයන්තිය" : "2568 Sambuddha Jayanthi"}
          </span>
        </div>

        {/* Venue Map Label Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-amber-400 font-semibold mb-3">
          <MapPin className="w-3.5 h-3.5 animate-bounce" />
          <span>{isSinhala ? "නාමල්තලාව පුරාණ රජමහා විහාරය" : "Namalthalawa Ancient Temple Grounds"}</span>
        </div>

        {/* App Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sinhala tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-2 drop-shadow-lg leading-tight py-1">
          {isSinhala ? "නාමල්තලාව වෙසක් කලාපය" : "Namalthalawa Vesak Zone"}
        </h1>

        <p className="font-sinhala text-sm sm:text-base md:text-lg text-slate-400 mt-2 max-w-2xl leading-relaxed">
          {isSinhala ? (
            <>
              2026 මැයි <strong>26, 27, 28, 29, 30 සහ 31</strong> යන දිනවල පැවැත්වෙන 
              අත්‍යලංකාර වෙසක් මංගල්‍යය නැරඹීමට ඔබ සැම ශ්‍රද්ධාවෙන් පිළිගනිමු!
            </>
          ) : (
            <>
              Join us to celebrate the supreme festival of Vesak from 
              <strong> May 26th to 31st, 2026</strong>. Experience custom lanterns, 
              light-art, and public almsgivings.
            </>
          )}
        </p>

        {/* Tiny music guidance prompt */}
        {!soundEnabled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="mt-3 text-amber-500/60 text-xs font-sinhala"
          >
            {isSinhala ? "♬ වඩාත් ආකර්ෂණීය අත්දැකීමක් සඳහා ඉහලින් තිබෙන සංගීතය සක්‍රිය කරන්න" : "♬ Toggle background music above to listen to serene Buddhist melodies"}
          </motion.div>
        )}

        {/* Hero Interactive Calls To Action */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full justify-center px-4 max-w-md">
          <button
            onClick={onScrollToCreator}
            className="px-8 py-3.5 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-bold font-sinhala shadow-lg transition-all border border-yellow-400/50 hover:shadow-yellow-500/20 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
          >
            {isSinhala ? "ඇරයුම්පතක් හදමු" : "Create Invitation Card"}
          </button>

          <button
            onClick={onScrollToPooja}
            className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 rounded-xl font-bold font-sinhala transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
            {isSinhala ? "පහනක් දල්වන්න" : "Light a Virtual Lamp"}
          </button>
        </div>
      </div>

      {/* Countdown Timer Block nested in Hero footer */}
      <div className="w-full max-w-4xl z-10 mt-12 bg-slate-900/50 border border-slate-800 py-6 px-4 rounded-3xl backdrop-blur-sm">
        <Countdown isSinhala={isSinhala} />
      </div>

      {/* Bottom arrow prompt */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 transition-opacity pointer-events-none">
        <ChevronDown className="w-5 h-5 text-zinc-400" />
      </div>
    </div>
  );
}
