/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MapPin, Navigation, Compass, Star, ExternalLink, Calendar } from "lucide-react";

interface VenueLocationProps {
  isSinhala: boolean;
}

export default function VenueLocation({ isSinhala }: VenueLocationProps) {
  // Coordinates for Namalthalawa Ancient Temple / Ampara area
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Namalthalawa+Ancient+Temple+Sri+Lanka";

  const travelRoutes = [
    {
      fromSi: "කොළඹ සිට",
      fromEn: "From Colombo",
      routeSi: "කොළඹ - රත්නපුර - ඇඹිලිපිටිය - වැල්ලවාය - මොණරාගල හරහා නාමල්තලාවට (පැය 6.5)",
      routeEn: "Colombo - Ratnapura - Embilipitiya - Wellawaya - Monaragala - Namalthalawa (Approx 6.5 hrs)",
    },
    {
      fromSi: "මහනුවර සිට",
      fromEn: "From Kandy",
      routeSi: "මහනුවර - මහියංගනය - පදියතලාව - මහාඔය හරහා නාමල්තලාවට (පැය 4.5)",
      routeEn: "Kandy - Mahiyanganaya - Padiyatalawa - Maha Oya - Namalthalawa (Approx 4.5 hrs)",
    },
    {
      fromSi: "අම්පාර සිට",
      fromEn: "From Ampara",
      routeSi: "අම්පාර නගරයේ සිට අමුණුපුර පාර ඔස්සේ නාමල්තලාව විහාර භූමියට (විනාඩි 20)",
      routeEn: "Ampara Town - Amunupura Road - Namalthalawa Ancient Temple (Approx 20 mins)",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 bg-[#11131c]/60 border border-[#1e293b] rounded-3xl backdrop-blur-sm shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left pane: Details and Routes - 7 columns */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-yellow-500 uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 animate-spin-slow text-yellow-500" />
              {isSinhala ? "පැමිණෙන මඟ සහ සැලසුම" : "DIRECTIONS & LOCAL PLAN"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-sinhala text-[#e2e8f0] mt-2">
              {isSinhala ? "වෙසක් කලාපයට ළඟාවන්නේ කෙසේද?" : "Planning Your Visit to Namalthalawa"}
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-sinhala leading-relaxed">
              {isSinhala
                ? "මෙම අසිරිමත් වෙසක් උත්සවය පැවැත්වෙන්නේ නාමල්තලාව රජමහා විහාර බිමේය. අමුත්තන්ගේ රථ වාහන ගාල් කිරීමේ පහසුකම් සහ නොමිලේ සනීපාරක්ෂක උපකාරක මධ්‍යස්ථාන මුළු කාලසීමාව පුරාම ක්‍රියාත්මක වේ."
                : "The divine celebrations occur at the historic Namalthalawa Ancient Temple Grounds. Ample free parking facilities, security officers, and health aid stations are operational around the clock."}
            </p>
          </div>

          {/* Guided routes cards */}
          <div className="space-y-4">
            {travelRoutes.map((route, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0c0e14]/90 border border-[#1e293b] hover:border-yellow-500/10 hover:bg-slate-900/30 transition-all flex gap-3.5 items-start"
              >
                <div className="p-2.5 rounded-xl bg-yellow-500/5 border border-yellow-500/15 text-yellow-500 shrink-0 font-bold text-xs font-mono">
                  {idx + 1}
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold text-amber-100 font-sinhala uppercase tracking-wide">
                    {isSinhala ? route.fromSi : route.fromEn}
                  </h3>
                  <p className="text-xs text-slate-400 font-sinhala leading-relaxed">
                    {isSinhala ? route.routeSi : route.routeEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right pane: Map representation & external opening prompt - 5 columns */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full bg-[#0c0e14]/90 border border-[#1e293b] rounded-3xl p-6 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            {/* Subtle aesthetic backdrop light */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full filter blur-2xl pointer-events-none" />

            {/* Simulated mini route map mockup design */}
            <div className="w-full aspect-square bg-[#11131c] rounded-2xl border border-[#1e293b]/70 p-4 relative flex flex-col justify-between items-center shadow-inner overflow-hidden">
              
              {/* Grid abstract patterns to simulate a map look */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: "radial-gradient(ellipse at center, rgba(234,179,8,0.15) 1px, transparent 1px)",
                backgroundSize: "16px 16px"
              }} />

              {/* Decorative nodes mimicking map junctions */}
              <div className="absolute top-1/4 left-1/4 flex flex-col items-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-650 border border-black" />
                <span className="text-[9px] text-zinc-500 mt-1 uppercase font-mono">Mahaoya</span>
              </div>

              <div className="absolute top-2/3 right-1/4 flex flex-col items-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-650 border border-black" />
                <span className="text-[9px] text-zinc-500 mt-1 uppercase font-mono">Ampara Town</span>
              </div>

              {/* Glowing Namalthalawa Destination Center Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 pointer-events-none">
                {/* Radiant pulses */}
                <span className="absolute inline-flex h-10 w-10 rounded-full bg-amber-400/10 animate-ping" />
                <div className="w-4 h-4 rounded-full bg-amber-500 border-2 border-zinc-950 shadow-lg flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-zinc-950 fill-zinc-950" />
                </div>
                <span className="text-[10px] font-bold text-amber-400 font-sinhala bg-zinc-950 px-2 py-0.5 rounded border border-amber-500/20 mt-1.5 shadow-md">
                  {isSinhala ? "නාමල්තලාව පුදබිම" : "NAMALTHALAWA Ancient Temple"}
                </span>
              </div>

              {/* Simulated driving route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <path
                  d="M 50 150 Q 100 80, 150 150 T 250 180"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  className="animate-pulse"
                />
              </svg>

              <div className="w-full text-left text-[10px] text-zinc-500 font-mono flex justify-between z-10 px-1 pointer-events-none">
                <span>COORD: 7.2906° N, 81.6820° E</span>
                <span>AMPARA DISTRICT</span>
              </div>
            </div>

            <div className="mt-5 w-full">
              <h3 className="text-sm font-semibold text-zinc-200 font-sinhala">
                {isSinhala ? "නාමල්තලාව පුදබිම් පිහිටීම" : "Namalthalawa GPS Location"}
              </h3>
              <p className="text-xs text-zinc-500 font-sinhala mt-1">
                {isSinhala ? "රථවාහන ධාවනය සඳහා පහත ලින්ක් එක මඟින් සිතියම විවෘත කරගන්න." : "Click below to map the direct transit route on your personal smartphone."}
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-white font-sinhala text-xs font-bold mt-4 transition-all cursor-pointer shadow border border-yellow-400/50"
              >
                <Navigation className="w-4 h-3.5 text-white" />
                {isSinhala ? "මාර්ග සිතියම" : "Open Driving Map"}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
