/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Copy, Check, Eye, Palette, Sparkles, Award, Star } from "lucide-react";
import { CARD_TEMPLATES } from "../data";
import { CardTemplate } from "../types";

interface InvitationCardGeneratorProps {
  isSinhala: boolean;
}

export default function InvitationCardGenerator({ isSinhala }: InvitationCardGeneratorProps) {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate>(CARD_TEMPLATES[0]);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShareWhatsApp = () => {
    const senderName = sender.trim() || (isSinhala ? "මිතුරෙකු" : "A Friend");
    const receiverName = receiver.trim() || (isSinhala ? "ඔබ" : "You");
    
    const textSi = `🌸 *නාමල්තලාව වෙසක් කලාපය - ඩිජිටල් ඇරයුම්පත* 🌸\n\nහිතවත් ${receiverName},\n\n🙏🙏 *${senderName}* ඔබට 2026 මැයි 26 සිට 31 දක්වා පැවැත්වෙන නාමල්තලාව වෙසක් කලාපය නැරඹීමට සාදරයෙන් ආරාධනා කරයි!\n\n✨ *මහා ආකර්ෂණ:* \n- සුවණ්ණසාම ජාතක කතාව රැගත් මහා තොරණ\n- කැරකෙන වෙසක් කූඩු තරඟය\n- සුවිශේෂී රොටි සහ සිසිල් පැන් දන්සල\n- දහස් පහන් ආලෝක පූජාව\n\n👇 ඔබේ පුද්ගලික ඇරයුම්පත මෙතැනින් බලන්න සහ මැටි පහනක් දල්වන්න:\n${window.location.href}`;
    
    const textEn = `🌸 *Namalthalawa Vesak Zone - Digital Invitation* 🌸\n\nDear ${receiverName},\n\n🙏🙏 *${senderName}* cordially invites you to witness the magnificent Vesak Kalapaya in Namalthalawa from May 26th to 31st, 2026.\n\n✨ *Major Attractions:* \n- Grand Suwannasama Jataka Pandol\n- Rotating Lantern Competition\n- Free Coconut Roti & Herbal Alms\n- 10,000 Clay Lamp Lighting\n\n👇 View your detailed digital invitation & light a virtual lamp here:\n${window.location.href}`;

    const rawText = isSinhala ? textSi : textEn;
    const encodedText = encodeURIComponent(rawText);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, "_blank");
  };

  const handleCopyText = () => {
    const senderName = sender.trim() || (isSinhala ? "මිතුරෙකු" : "A Friend");
    const receiverName = receiver.trim() || (isSinhala ? "ඔබ" : "You");

    const copyTextSi = `🌸 නාමල්තලාව වෙසක් කලාපය - ඩිජිටල් ඇරයුම්පත 🌸\n\nහිතවත් ${receiverName},\n\n${senderName} ඔබට 2026 මැයි 26 සිට 31 දක්වා පුදබිමේ පැවැත්වෙන 'නාමල්තලාව වෙසක් කලාපය' නැරඹීමට ශ්‍රද්ධාවෙන් ආරාධනා කරයි.\n\nකාලසීමාව: මැයි 26, 27, 28, 29, 30, 31\nපැමිණෙන මඟ: නාමල්තලාව පුරාණ රජමහා විහාර පරිශ්‍රය\n\n✨ විශේෂාංග: සුවණ්ණසාම මහා තොරණ, වෙසක් කූඩු ප්‍රදර්ශනය, මහා පොල් රොටි දන්සල, භක්ති ගී සරණිය සහ පහන් පූජාව.\n\nඔබේ ඩිජිටල් ඇරයුම්පත නරඹා, පහනක් දැල්වීමට පිවිසෙන්න: ${window.location.href}`;
    
    const copyTextEn = `🌸 Namalthalawa Vesak Zone - Digital Invitation 🌸\n\nDear ${receiverName},\n\n${senderName} warmly invites you to experience the peaceful 'Namalthalawa Vesak Zone' at the Ancient Temple Grounds from May 26th to 31st, 2026.\n\nDates: May 26, 27, 28, 29, 30, 31\nVenue: Namalthalawa Ancient Temple Grounds\n\n✨ Highlights: Grand Jataka Pandol, Lantern Competition, Community Food Stall, Devotional Bhakthi Gee Recitals, and 10,000 Lamp Lighting.\n\nAccess your digital card & light a prayer lamp here: ${window.location.href}`;

    navigator.clipboard.writeText(isSinhala ? copyTextSi : copyTextEn).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Editor Panel - 5 Columns */}
      <div className="lg:col-span-5 bg-[#11131c]/60 border border-[#1e293b] rounded-3xl p-6 shadow-xl backdrop-blur-sm flex flex-col gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 mb-2">
            <Palette className="w-3.5 h-3.5" />
            {isSinhala ? "කාඩ්පත් සැලසුම්කරු" : "Invitation Studio"}
          </span>
          <h2 className="text-xl md:text-2xl font-bold font-sinhala text-[#e2e8f0]">
            {isSinhala ? "ස්වයංක්‍රීය ඇරයුම්පතක් හදමු" : "Personalize Your Invite"}
          </h2>
          <p className="text-xs text-slate-400 font-sinhala mt-1">
            {isSinhala
              ? "මිතුරන්ගේ සහ ඔබේ නම ඇතුළත් කර, ලස්සන වෙසක් සුබපැතුම් ඇරයුම් පතක් නිර්මාණය කොට WhatsApp ඔස්සේ පහසුවෙන්ම යවන්න."
              : "Design custom bilingual cards for friends, colleagues, or family to join you in the beautiful celebration of the Vesak festival."}
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-sinhala mb-1.5 font-semibold">
              {isSinhala ? "ඔබේ නම (ආරාධනා කරන්නා)" : "Your Name (Sender)"}
            </label>
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder={isSinhala ? "උදා: සමන් කුමාර" : "e.g. Saman Kumara"}
              maxLength={25}
              className="w-full px-4 py-2.5 bg-[#0c0e14]/90 border border-[#1e293b] rounded-xl text-sm focus:border-yellow-500/50 focus:outline-none transition-all font-sinhala placeholder:opacity-50 text-slate-200"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-sinhala mb-1.5 font-semibold">
              {isSinhala ? "මිතුරාගේ නම (ආරාධිතයා)" : "Friend's Name (Recipient)"}
            </label>
            <input
              type="text"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              placeholder={isSinhala ? "උදා: නිමල් වීරසිංහ" : "e.g. Nimal Weerasinghe"}
              maxLength={25}
              className="w-full px-4 py-2.5 bg-[#0c0e14]/90 border border-[#1e293b] rounded-xl text-sm focus:border-yellow-500/50 focus:outline-none transition-all font-sinhala placeholder:opacity-50 text-slate-200"
            />
          </div>

          {/* Theme Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-400 font-sinhala mb-2 font-semibold">
              {isSinhala ? "කාඩ්පත් තේමාව" : "Choose Aesthetic Theme"}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CARD_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`px-3 py-2 text-xs font-sinhala rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-14 ${
                    selectedTemplate.id === tmpl.id
                      ? "border-amber-400 bg-amber-500/10 text-amber-300 shadow-md shadow-amber-500/5"
                      : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="font-bold text-[11px] leading-tight">
                    {isSinhala ? tmpl.nameSi : tmpl.nameEn}
                  </div>
                  {/* Small preview color bar */}
                  <div className="flex gap-1 mt-1.5 h-1.5 w-full rounded overflow-hidden">
                    <div className="flex-1 bg-amber-500" />
                    <div className="flex-1 bg-red-500" />
                    <div className="flex-1 bg-blue-500" />
                  </div>
                  {selectedTemplate.id === tmpl.id && (
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <button
            onClick={handleShareWhatsApp}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sinhala font-semibold text-sm shadow-lg shadow-emerald-950/40 cursor-pointer transition-all"
          >
            <Send className="w-4 h-4" />
            {isSinhala ? "WhatsApp මඟින් ඇරයුම් කරන්න" : "Invite via WhatsApp"}
          </button>

          <button
            onClick={handleCopyText}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 hover:text-white font-sinhala font-medium text-xs cursor-pointer transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{isSinhala ? "පිටපත් කරගන්නා ලදී!" : "Copied successfully!"}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{isSinhala ? "ඇරයුම් වදන් පිටපත් කරගන්න" : "Copy Invitation Text"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Presentation/Preview Panel - 7 Columns */}
      <div className="lg:col-span-7 flex flex-col items-center">
        <span className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold mb-4 uppercase tracking-widest">
          <Eye className="w-3.5 h-3.5 text-amber-500" />
          {isSinhala ? "ඩිජිටල් කාඩ්පත් පෙරදසුන" : "Dynamic Invitation Preview"}
        </span>

        {/* Interactive card content display */}
        <div
          ref={cardRef}
          className={`w-full max-w-[430px] aspect-[9/14] bg-gradient-to-b ${selectedTemplate.bgGradient} border-4 border-double border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden`}
        >
          {/* Traditional visual ornament corners */}
          <div className="absolute top-2 left-2 text-amber-500/40 text-[9px] pointer-events-none select-none">☸</div>
          <div className="absolute top-2 right-2 text-amber-500/40 text-[9px] pointer-events-none select-none">☸</div>
          <div className="absolute bottom-2 left-2 text-amber-500/40 text-[9px] pointer-events-none select-none">☸</div>
          <div className="absolute bottom-2 right-2 text-amber-500/40 text-[9px] pointer-events-none select-none">☸</div>

          {/* Thin internal border */}
          <div className="absolute inset-2 border border-amber-500/10 rounded-2xl pointer-events-none" />

          {/* Top section: Sacred Lotus Icon and Banner */}
          <div className="flex flex-col items-center mt-2 relative z-10 w-full">
            <div className="relative w-14 h-14 bg-amber-500/5 rounded-full border border-amber-500/10 flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-amber-400 animate-pulse" />
              {/* Spinning subtle light particles */}
              <div className="absolute inset-0 rounded-full border-t border-r border-amber-500/20 animate-spin" />
            </div>

            <div className="text-[10px] tracking-[0.2em] font-semibold text-amber-400/80 uppercase">
              {isSinhala ? "වෙසක් මංගල්‍යය 2026" : "SACRED VESAK FESTIVAL 2026"}
            </div>
            
            {/* Lotus Graphic */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-1.5" />
          </div>

          {/* Core Invitation Text */}
          <div className="flex flex-col items-center justify-center flex-1 my-4 relative z-10">
            {/* Custom Recipient Name Box */}
            <span className="text-zinc-400 text-[11px] font-sinhala uppercase tracking-wider">
              {isSinhala ? "හිතවත්" : "Dear"}
            </span>
            <span className="text-lg sm:text-xl font-bold text-white font-sinhala mt-0.5 mb-3 border-b border-amber-500/20 px-4 py-0.5 min-h-[32px] block">
              {receiver.trim() || (isSinhala ? "මිතුරාණනි" : "Esteemed Guest")}
            </span>

            {/* Main Greeting Content */}
            <div className="space-y-3 px-1">
              <p className="text-[12px] sm:text-xs text-amber-200/90 font-sinhala leading-relaxed text-center">
                {isSinhala ? (
                  <>
                    නිදුක් නිරෝගී සුවය පතන <strong>වෙසක් මංගල්‍යයක්</strong> වේවා!
                    තාක්ෂණය සහ බුද්ධිමය ආලෝකය සුසංයෝගීව පැවැත්වෙන අපේ සාම්ප්‍රදායික උත්සව සිරිය නරඹන්න එන්න.
                  </>
                ) : (
                  <>
                    May you have a peaceful and healthy <strong>Vesak Season</strong>.
                    You are invited to experience our rich spiritual heritage.
                  </>
                )}
              </p>

              {/* Vesak Zone Main Invitation Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 font-sinhala tracking-tight drop-shadow-md py-1">
                {isSinhala ? "නාමල්තලාව వෙසක් කලාපය" : "Namalthalawa Vesak Zone"}
              </h3>

              {/* Event highlight dates list */}
              <div className="inline-block py-1 px-4 rounded-full bg-black/40 border border-amber-500/15 text-[11px] md:text-xs text-amber-400 font-semibold tracking-wide">
                📆 {isSinhala ? "මැයි 26, 27, 28, 29, 30, 31" : "May 26, 27, 28, 29, 30, 31"}
              </div>

              <p className="text-[11px] text-zinc-300 mt-2 font-sinhala">
                📍 {isSinhala ? "නාමල්තලාව පුරාණ රජමහා විහාරය" : "Namalthalawa Ancient Temple Grounds"}
              </p>
            </div>
          </div>

          {/* Bottom Card Footer - Sender acknowledgment */}
          <div className="flex flex-col items-center w-full mb-2 relative z-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-1.5" />
            <span className="text-[10px] text-zinc-400">
              {isSinhala ? "ආරාධනා කරන්නේ ශ්‍රද්ධාවෙනි," : "Cordially invited by,"}
            </span>
            <span className="text-yellow-100 text-sm font-bold font-sinhala mt-0.5 tracking-wide">
              🙏 {sender.trim() || (isSinhala ? "මිතුරෙකු" : "A Caring Friend")}
            </span>
          </div>

          {/* Decorative faint background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/2 rounded-full filter blur-3xl pointer-events-none" />
        </div>

        {/* Interactive Instruction */}
        <p className="text-[11px] text-zinc-500 font-sinhala mt-3 text-center">
          {isSinhala
            ? "වම් පසින් නම් ඇතුළත් කර, WhatsApp මඟින් යැවීමට ක්ලික් කරන්න."
            : "Update sender/recipient text on the left to watch this digital card synchronize in real-time."}
        </p>
      </div>
    </div>
  );
}
