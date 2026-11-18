import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brandBlack via-burgundy-deep to-brandBlack text-warmWhite relative overflow-hidden border-t border-white/10">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 bg-radial-at-c from-richRed/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center flex flex-col items-center">
        {/* Official Brand Logo — 1.png inside circular dark badge */}
        <div className="mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-mutedGold/60 overflow-hidden shadow-2xl shadow-black/60 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/1.png"
              alt="Perleco Ltd Catering Services"
              width={96}
              height={96}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <span className="text-mutedGold uppercase tracking-[0.35em] text-xs font-semibold mb-4">
          Unforgettable Hospitality
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-warmWhite max-w-3xl leading-tight mb-6">
          Let&apos;s Make Your Next Event Extraordinary.
        </h2>

        <p className="font-sans text-sm sm:text-base md:text-lg text-warmWhite/80 max-w-2xl font-light leading-relaxed mb-10">
          Whether you are planning a corporate reception, a bespoke wedding banquet, an intimate private chef dinner, or gourmet takeaway platters, our team is ready to bring your culinary vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
          <Link
            href="/booking"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-richRed via-burgundy to-richRed hover:opacity-95 text-warmWhite text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded border border-mutedGold/50 shadow-2xl shadow-richRed/40 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Discuss Your Event</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-white/5 hover:bg-white/10 text-warmWhite text-xs sm:text-sm font-medium uppercase tracking-[0.18em] rounded border border-white/20 hover:border-mutedGold/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat On WhatsApp</span>
          </a>
        </div>

        <div className="text-xs text-warmWhite/60 flex items-center gap-2">
          <span>Or call our direct line:</span>
          <a
            href={`tel:${BRAND.phone}`}
            className="text-mutedGold hover:text-white font-medium underline underline-offset-4 transition-colors"
          >
            {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
