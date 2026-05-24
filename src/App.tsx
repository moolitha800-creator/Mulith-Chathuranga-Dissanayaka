/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import LampPooja from "./components/LampPooja";
import InvitationCardGenerator from "./components/InvitationCardGenerator";
import VenueLocation from "./components/VenueLocation";
import { Sparkles, Heart } from "lucide-react";

export default function App() {
  const [isSinhala, setIsSinhala] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Scroll references
  const creatorSectionRef = useRef<HTMLDivElement>(null);
  const poojaSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* 1. Hero Block & Utilities */}
      <HeroSection
        isSinhala={isSinhala}
        setIsSinhala={setIsSinhala}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onScrollToCreator={() => scrollToSection(creatorSectionRef)}
        onScrollToPooja={() => scrollToSection(poojaSectionRef)}
      />

      {/* 2. Highlights Gallery */}
      <section className="py-6 bg-zinc-950/20">
        <EventDetails isSinhala={isSinhala} />
      </section>

      {/* 3. Interactive Lamp Pooja Section */}
      <div 
        ref={poojaSectionRef}
        className="py-12 bg-zinc-950/30 border-t border-zinc-900/30 scroll-mt-6"
      >
        <LampPooja isSinhala={isSinhala} />
      </div>

      {/* 4. Digital Invitation Card generator */}
      <div 
        ref={creatorSectionRef}
        className="py-12 bg-radial from-amber-950/10 to-transparent border-t border-zinc-900/30 scroll-mt-6"
      >
        <InvitationCardGenerator isSinhala={isSinhala} />
      </div>

      {/* 5. Transit instructions & Map directory */}
      <section className="py-12">
        <VenueLocation isSinhala={isSinhala} />
      </section>

      {/* 6. Footer Block */}
      <footer className="w-full bg-black/95 border-t border-zinc-900 py-10 px-4 text-center text-zinc-500 font-sinhala relative overflow-hidden">
        {/* Subtle Buddhist flag colors line */}
        <div className="absolute top-0 inset-x-0 h-[2px] flex opacity-40">
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-yellow-400" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-orange-500" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-4 py-1.5 rounded-full border border-amber-500/10">
            <span>සබ්බදානං ධම්මදානං ජිනාති</span>
            <span className="opacity-40">|</span>
            <span>The Gift of Truth Excels All Other Gifts</span>
          </div>

          <p className="text-xs text-zinc-400 max-w-xl leading-relaxed mt-2" id="footer-greetings">
            {isSinhala ? (
              <>
                <strong>නාමල්තලාව වෙසක් කලාපය - ඩිජිටල් ඇරයුම් මධ්‍යස්ථානය 2026</strong>. 
                සියලු සත්වයෝ නිදුක් වෙත්වා, නිරෝගී වෙත්වා, සුවපත් වෙත්වා! ශාන්ති වෙසක් මංගල්‍යයක් වේවා.
              </>
            ) : (
              <>
                <strong>Namalthalawa Vesak Zone - Digital Invitation center 2026</strong>. 
                May all living beings be peaceful, healthy, and enlightened! Wish you a serene and bright Vesak.
              </>
            )}
          </p>

          <p className="text-[10px] text-zinc-600 mt-4 flex items-center gap-1 justify-center">
            <span>Crafted with devotion for Namalthalawa community</span>
            <Heart className="w-3 h-3 text-red-500 animate-pulse fill-red-500" />
            <span>2026</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
