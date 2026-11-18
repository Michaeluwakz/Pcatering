"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, MapPin, Phone, CalendarCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { LogoIcon } from "@/components/ui/LogoIcon";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brandBlack">
      {/* Background Hero Image with luxury multi-stop overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop"
          alt="Perleco Catering Luxury Culinary Presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-pulse-slow brightness-[0.45]"
        />
        {/* Editorial Gradients: Deep Burgundy & Rich Red shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brandBlack/90 via-brandBlack/40 to-burgundy-dark/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-brandBlack/30 to-brandBlack" />
      </div>

      {/* Decorative Gold & Red Ambient Flares */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-richRed/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-burgundy/25 rounded-full blur-[160px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Brand Crest & Established Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-mutedGold/40 backdrop-blur-md mb-8 animate-fade-in shadow-lg shadow-black/40">
          <LogoIcon size={18} variant="dark" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-mutedGold">
            Manchester & Worldwide • Est. 10+ Years
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warmWhite max-w-4xl leading-[1.1] mb-6">
          Exceptional Catering. <br />
          <span className="italic font-normal bg-gradient-to-r from-warmWhite via-mutedGold-light to-warmWhite bg-clip-text text-transparent">
            Unforgettable Experiences.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-warmWhite/80 max-w-2xl font-light leading-relaxed mb-10">
          Bringing elegance, flavour and exceptional service to every occasion. From sophisticated canapés to private dining experiences, Perleco Catering makes every event memorable.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <Link
            href="/booking"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-burgundy via-richRed to-burgundy-light text-warmWhite text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded border border-mutedGold/40 shadow-2xl shadow-richRed/30 hover:shadow-richRed/60 hover:scale-[1.03] transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>Enquire About Your Event</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 bg-brandBlack/60 hover:bg-white/10 text-warmWhite text-xs sm:text-sm font-medium uppercase tracking-[0.2em] rounded border border-white/20 hover:border-mutedGold/60 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="w-full max-w-3xl pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-warmWhite/75 text-xs">
          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-serif text-xl sm:text-2xl text-mutedGold font-bold">10+</span>
            <span className="text-[11px] uppercase tracking-wider text-warmWhite/60">Years Experience</span>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-serif text-xl sm:text-2xl text-mutedGold font-bold">100%</span>
            <span className="text-[11px] uppercase tracking-wider text-warmWhite/60">Bespoke Menus</span>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-serif text-xl sm:text-2xl text-mutedGold font-bold">Manchester</span>
            <span className="text-[11px] uppercase tracking-wider text-warmWhite/60">& Worldwide</span>
          </div>

          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-serif text-xl sm:text-2xl text-mutedGold font-bold">5-Star</span>
            <span className="text-[11px] uppercase tracking-wider text-warmWhite/60">Hospitality Standard</span>
          </div>
        </div>
      </div>

      {/* Bottom fade transition into warm white / black section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brandBlack to-transparent pointer-events-none" />
    </section>
  );
};
