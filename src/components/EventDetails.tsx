/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Compass, Flame, Music, Clock, Calendar, MapPin, X, ArrowUpRight } from "lucide-react";
import { VESAK_EVENTS } from "../data";
import { VesakEvent } from "../types";

interface EventDetailsProps {
  isSinhala: boolean;
}

export default function EventDetails({ isSinhala }: EventDetailsProps) {
  const [selectedEvent, setSelectedEvent] = useState<VesakEvent | null>(null);

  const getIcon = (name: string) => {
    const cls = "w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300";
    switch (name) {
      case "Sparkles":
        return <Sparkles className={cls} />;
      case "Compass":
        return <Compass className={cls} />;
      case "FlameKindling":
        return <Flame className={cls} />;
      case "Music":
        return <Music className={cls} />;
      case "Flame":
        return <Flame className={cls} />;
      default:
        return <Sparkles className={cls} />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Title block */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-yellow-500 uppercase tracking-[0.2em] text-xs font-bold leading-none">
          {isSinhala ? "සුවිශේෂී වෙසක් අංග" : "EXHIBITIONS & PROGRAM SIGHTS"}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sinhala text-[#e2e8f0] mt-2 mb-3">
          {isSinhala ? "වෙසක් කලාපයේ ප්‍රධාන ආකර්ෂණ" : "Namalthalawa Highlights"}
        </h2>
        <p className="text-sm text-slate-400 font-sinhala">
          {isSinhala
            ? "මැයි 26 සිට 31 දක්වා පුදබිම සරසන මහා ආශ්චර්යයන් නැරඹීමට පැමිණෙන ඔබට විඳගත හැකි සුවිශේෂී අංග මෙන්න."
            : "Explore our rich lineup of traditional lantern contests, illuminated scriptures, and free almsgiving services running throughout the festival week."}
        </p>
      </div>

      {/* Traditional Dates Grid from Elegant Dark Mockup */}
      <div className="flex flex-col items-center justify-center mb-12 w-full">
        <span className="text-xs text-slate-500 uppercase tracking-widest font-bold font-sinhala mb-4">
          {isSinhala ? "වෙසක් කලාප කාලසටහන 2026" : "Vesak Festival Calendar 2026"}
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3.5 w-full max-w-4xl">
          <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 duration-300">
            <span className="text-3xl font-bold text-yellow-500">26</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase font-sinhala">{isSinhala ? "මැයි" : "May"}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 duration-300">
            <span className="text-3xl font-bold text-yellow-500">27</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase font-sinhala">{isSinhala ? "මැයි" : "May"}</span>
          </div>
          
          {/* Highlight peak day: May 28 Poya Day */}
          <div className="flex flex-col items-center p-4 bg-yellow-600 border border-yellow-400 rounded-xl shadow-[0_0_20px_rgba(202,138,4,0.3.5)] transition-transform hover:scale-105 duration-300">
            <span className="text-3xl font-bold text-white">28</span>
            <span className="text-[10px] text-yellow-100 font-bold uppercase font-sinhala">{isSinhala ? "මැයි පෝය" : "May Poya"}</span>
          </div>

          <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 duration-300">
            <span className="text-3xl font-bold text-yellow-500">29</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase font-sinhala">{isSinhala ? "මැයි" : "May"}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 duration-300">
            <span className="text-3xl font-bold text-yellow-500">30</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase font-sinhala">{isSinhala ? "මැයි" : "May"}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm transition-transform hover:scale-105 duration-300">
            <span className="text-3xl font-bold text-yellow-500">31</span>
            <span className="text-[10px] text-slate-500 font-medium uppercase font-sinhala">{isSinhala ? "මැයි" : "May"}</span>
          </div>
        </div>
      </div>

      {/* Grid view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VESAK_EVENTS.map((event, idx) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#11131c]/60 border border-[#1e293b] hover:border-yellow-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col justify-between cursor-pointer hover:shadow-[0_0_20px_rgba(202,138,4,0.08)] hover:-translate-y-1 transition-all duration-300"
            onClick={() => setSelectedEvent(event)}
          >
            {/* Top Row with icon and badge */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-amber-500/5 rounded-xl border border-amber-500/10 flex items-center justify-center">
                  {getIcon(event.iconName)}
                </div>
                {event.badgeSi && (
                  <span className="text-[10px] font-bold font-sinhala px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase tracking-wider">
                    {isSinhala ? event.badgeSi : event.badgeEn}
                  </span>
                )}
              </div>

              {/* Title & Short Description */}
              <h3 className="text-lg font-bold text-zinc-100 font-sinhala mb-2 group-hover:text-amber-300 transition-colors">
                {isSinhala ? event.titleSi : event.titleEn}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-sinhala mb-4">
                {isSinhala ? event.descriptionSi : event.descriptionEn}
              </p>
            </div>

            {/* Event Meta Footer */}
            <div className="pt-4 border-t border-zinc-900/60 mt-auto flex justify-between items-center text-[11px] text-zinc-400 font-sinhala">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-500/70" />
                {isSinhala ? event.datesSi : event.datesEn}
              </span>
              <span className="text-amber-500/85 hover:text-amber-400 flex items-center gap-0.5 font-bold">
                {isSinhala ? "වැඩි විස්තර" : "Read More"}
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-zinc-950 to-neutral-950 border border-amber-500/20 rounded-3xl p-6 md:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                  {getIcon(selectedEvent.iconName)}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-amber-100 font-sinhala tracking-tight leading-tight">
                    {isSinhala ? selectedEvent.titleSi : selectedEvent.titleEn}
                  </h3>
                  {selectedEvent.badgeSi && (
                    <span className="text-[10px] font-bold font-sinhala px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 uppercase mt-1 inline-block">
                      {isSinhala ? selectedEvent.badgeSi : selectedEvent.badgeEn}
                    </span>
                  )}
                </div>
              </div>

              {/* Main Extended Body */}
              <div className="space-y-4">
                <div className="text-sm text-zinc-300 leading-relaxed font-sinhala whitespace-pre-line border-l-2 border-amber-500/30 pl-4 py-1">
                  {isSinhala ? selectedEvent.longDescriptionSi : selectedEvent.longDescriptionEn}
                </div>

                {/* Additional custom content inside modal for specifics */}
                {selectedEvent.id === "thorana" && (
                  <div className="mt-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                    <h4 className="text-xs font-bold text-amber-400 font-sinhala uppercase tracking-wider mb-1.5">
                      {isSinhala ? "සුවණ්ණසාම ජාතක කථා සාරාංශය" : "Suwannasama Jataka Synopsis"}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sinhala">
                      {isSinhala
                        ? "දෙමාපියන්ට උපස්ථාන කිරීමේ උතුම් ආදර්ශය ලොවට හෙළි කරන සුවණ්ණසාම ජාතකය මෙවර කලාපයේදී විචිත්‍රවත් විදුලි සැරසිලි රටා 32ක් සමඟ පියවරෙන් පියවර විස්තර කෙරේ."
                        : "Highlighting the supreme virtue of filial devotion, the story of Suwannasama—who cared for his blind hermit parents—is displayed across 32 computerized visual sequences."}
                    </p>
                  </div>
                )}

                {selectedEvent.id === "dansela" && (
                  <div className="mt-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                    <h4 className="text-xs font-bold text-amber-400 font-sinhala uppercase tracking-wider mb-1.5">
                      {isSinhala ? "අමුත්තන් සඳහා උපදෙස්" : "Visitor Alms Guidelines"}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sinhala">
                      {isSinhala
                        ? "නාමල්තලාව තරුණ සමිතිය මඟින් සංවිධානය කරන මෙම දන්සල පිරිසිදු සනීපාරක්ෂක ප්‍රමිතීන්ට අනුව ක්‍රියාත්මක වේ. දෝතින් පිළිගන්නා රසවත් පොල් රොටි සාදරයෙන් භුක්ති විඳින්න."
                        : "Priding ourselves in absolute hygiene and warmth. We serve hot coconut flatbreads and hot village coffee for all visitors. Free parking and sanitation areas are located alongside."}
                    </p>
                  </div>
                )}

                {/* Event Schedule metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-900 mt-6 text-xs text-zinc-400 font-sinhala">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-900">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">
                        {isSinhala ? "දිනය" : "Date Duration"}
                      </div>
                      <div className="font-semibold text-zinc-200 mt-0.5">
                        {isSinhala ? selectedEvent.datesSi : selectedEvent.datesEn}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-900">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="text-[10px] text-zinc-500 uppercase">
                        {isSinhala ? "වේලාව" : "Viewing Hours"}
                      </div>
                      <div className="font-semibold text-zinc-200 mt-0.5">
                        {isSinhala ? selectedEvent.timeSi : selectedEvent.timeEn}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/40 border border-zinc-900 text-xs text-zinc-400 font-sinhala">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase">
                      {isSinhala ? "ස්ථානය" : "Venue Location"}
                    </div>
                    <div className="font-semibold text-zinc-200 mt-0.5">
                      {isSinhala
                        ? "නාමල්තලාව පුරාණ රජමහා විහාර පරිශ්‍රය"
                        : "Namalthalawa Ancient Temple Grounds, Sri Lanka"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Back button */}
              <div className="text-right mt-6">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs hover:bg-amber-400 font-sinhala cursor-pointer transition-colors"
                >
                  {isSinhala ? "පසුපසට" : "Close Details"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
