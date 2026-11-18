import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, Award, Heart, CheckCircle2, Globe, Users, UtensilsCrossed, Shield } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { LogoIcon } from "@/components/ui/LogoIcon";
import { ClientNotice } from "@/components/ui/ClientNotice";

export const metadata: Metadata = {
  title: "About Us | Perleco Catering Manchester",
  description:
    "Learn about Perleco Catering, our 10+ years of culinary experience, passion for hospitality, and commitment to exceptional food presentation.",
};

export default function AboutPage() {
  return (
    <div className="bg-brandBlack text-warmWhite">
      {/* About Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
            alt="Perleco Catering Luxury Dining Atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-burgundy-dark/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-mutedGold/40 text-mutedGold text-xs uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
            <LogoIcon size={18} variant="dark" />
            <span>Over A Decade Of Culinary Excellence</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warmWhite mb-6">
            The Perleco Standard
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-warmWhite/80 max-w-2xl font-light leading-relaxed">
            Crafting elegant catering experiences, sophisticated canapés, and bespoke private dining in Manchester and across the globe.
          </p>
        </div>
      </section>

      {/* Brand Heritage & Philosophy (Warm White section for editorial contrast) */}
      <section className="py-24 bg-warmWhite text-brandBlack relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"
                  alt="Perleco Catering Team and Culinary Craft"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating 10+ Years Seal */}
              <div className="absolute -bottom-6 -right-6 bg-brandBlack text-warmWhite p-6 rounded-2xl shadow-2xl border border-mutedGold/40 max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <LogoIcon size={32} variant="dark" />
                  <span className="font-serif text-2xl font-bold text-mutedGold">10+ Years</span>
                </div>
                <p className="text-xs text-warmWhite/70 leading-snug">
                  A decade of hospitality credibility across private dining, corporate galas, and bespoke events.
                </p>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-burgundy/10 text-burgundy text-xs font-semibold uppercase tracking-[0.25em]">
                Our Story & Philosophy
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brandBlack leading-tight">
                Passion For Food. <br />
                <span className="text-burgundy italic">Devotion To Hospitality.</span>
              </h2>

              <p className="text-brandBlack/80 text-base leading-relaxed">
                Perleco Catering was built upon a clear ethos: food at an event should never be merely functional—it should be an unforgettable sensory highlight. Over the past decade, we have honed our craft in Manchester, expanding our services from intimate private celebrations to comprehensive corporate banquet operations and worldwide client assignments.
              </p>

              <p className="text-brandBlack/70 text-sm leading-relaxed">
                Our approach blends classical culinary discipline with contemporary aesthetic design. From the delicate architecture of a canapé to the rich harmony of a multi-course tasting menu, every dish reflects meticulous sourcing, seasonal balance, and an uncompromising dedication to visual elegance.
              </p>

              {/* Client Confirmation Placeholder Notice */}
              <ClientNotice
                title="Founder & Team Profile Placeholder"
                description="This section is primed for Perleco's executive chef & founder biography, official certifications, and company milestones upon client confirmation."
              />

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/booking"
                  className="px-6 py-3 bg-burgundy hover:bg-burgundy-dark text-warmWhite text-xs font-semibold uppercase tracking-[0.2em] rounded shadow-md transition-all flex items-center gap-2"
                >
                  <span>Plan Your Event</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 border border-brandBlack/20 hover:border-burgundy text-brandBlack text-xs font-semibold uppercase tracking-[0.2em] rounded transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-24 bg-brandBlack text-warmWhite border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-mutedGold uppercase tracking-[0.3em] text-xs font-semibold">
              The Guiding Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
              Our Approach to Events & Private Dining
            </h2>
            <p className="text-warmWhite/70 text-sm leading-relaxed">
              Every gathering we cater is governed by four core commitments that ensure flawless dining execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-xl bg-brandBlack-card border border-white/10 hover:border-richRed/60 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-burgundy/20 flex items-center justify-center border border-burgundy/40">
                <UtensilsCrossed className="w-6 h-6 text-mutedGold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warmWhite">Artistry in Presentation</h3>
              <p className="text-xs sm:text-sm text-warmWhite/75 leading-relaxed font-light">
                We believe presentation is paramount. Dishes are styled with architectural balance, vibrant natural pigments, and bespoke tableware.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-brandBlack-card border border-white/10 hover:border-richRed/60 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-burgundy/20 flex items-center justify-center border border-burgundy/40">
                <Shield className="w-6 h-6 text-richRed" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warmWhite">Uncompromising Quality</h3>
              <p className="text-xs sm:text-sm text-warmWhite/75 leading-relaxed font-light">
                We source only the finest local British produce, sustainable seafood, and international delicacies for exceptional depth of flavour.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-brandBlack-card border border-white/10 hover:border-richRed/60 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-burgundy/20 flex items-center justify-center border border-burgundy/40">
                <Users className="w-6 h-6 text-mutedGold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warmWhite">Corporate Credibility</h3>
              <p className="text-xs sm:text-sm text-warmWhite/75 leading-relaxed font-light">
                Trusted by corporate entities and discerning hosts for professional timing, discreet service, and turnkey event coordination.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-brandBlack-card border border-white/10 hover:border-richRed/60 transition-all duration-300 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-burgundy/20 flex items-center justify-center border border-burgundy/40">
                <Globe className="w-6 h-6 text-richRed" />
              </div>
              <h3 className="font-serif text-xl font-bold text-warmWhite">Worldwide Reach</h3>
              <p className="text-xs sm:text-sm text-warmWhite/75 leading-relaxed font-light">
                While deeply rooted in Greater Manchester, our culinary team readily travels to provide private dining experiences across international borders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
