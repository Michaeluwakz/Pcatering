"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 group">
      {/* Tooltip speech bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-brandBlack-card text-warmWhite border border-mutedGold/40 px-3.5 py-2 rounded-lg shadow-xl text-xs backdrop-blur-md animate-fade-in max-w-xs">
          <div>
            <p className="font-semibold text-mutedGold">Planning an event?</p>
            <p className="text-warmWhite/80 text-[11px]">Chat with our culinary team directly on WhatsApp.</p>
          </div>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-warmWhite/50 hover:text-white p-1 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BRAND.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl shadow-black/60 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact Perleco Catering on WhatsApp"
      >
        {/* Pulse radar wave */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />

        {/* Status dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-richRed border-2 border-brandBlack rounded-full" />
      </a>
    </div>
  );
};
