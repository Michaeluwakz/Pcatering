"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Eye, X, Filter, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/cateringData";
import { BRAND } from "@/lib/constants";
import { ClientNotice } from "@/components/ui/ClientNotice";

const CATEGORIES = [
  "All",
  "Canapés",
  "Event Catering",
  "Private Dining",
  "Table & Decor",
  "Takeaway & Platters",
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-brandBlack text-warmWhite">
      {/* Gallery Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Perleco Catering Visual Gallery"
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
            <Instagram className="w-3.5 h-3.5 text-richRed" />
            <span>Visual Culinary Portfolio</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warmWhite mb-6">
            The Perleco Gallery
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-warmWhite/80 max-w-2xl font-light leading-relaxed">
            Immerse yourself in our craftsmanship. Explore exquisite canapés, opulent tablescapes, private chef creations, and grand event banquet installations.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-burgundy to-richRed text-warmWhite border border-mutedGold/50 shadow-lg shadow-burgundy/40 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-warmWhite/80 border border-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-brandBlack-card border border-white/10 hover:border-richRed/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-burgundy/30"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.95]"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-white/20 text-[10px] uppercase tracking-wider text-mutedGold font-semibold">
                {item.category}
              </div>

              {/* Zoom / View Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-warmWhite opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5">
                <h3 className="font-serif text-xl font-bold text-warmWhite group-hover:text-mutedGold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-warmWhite/75 line-clamp-2 font-light">
                  {item.caption}
                </p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {item.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] text-warmWhite/50 bg-white/5 px-2 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Integration Callout */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-brandBlack-charcoal via-burgundy-deep to-brandBlack-charcoal border border-mutedGold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-mutedGold text-xs uppercase tracking-widest font-semibold">
              <Instagram className="w-4 h-4 text-richRed" />
              <span>Live Social Reference</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warmWhite">
              Explore Our Recent Events on Instagram
            </h3>
            <p className="text-xs sm:text-sm text-warmWhite/75 max-w-xl">
              Follow {BRAND.instagramHandle} for behind-the-scenes plating videos, live canapé reception showcases, and our latest event setups.
            </p>
          </div>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-burgundy to-richRed hover:from-richRed hover:to-burgundy text-warmWhite text-xs font-semibold uppercase tracking-[0.18em] rounded border border-mutedGold/40 shadow-lg flex items-center gap-2 shrink-0 transition-all"
          >
            <span>Visit {BRAND.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Client Notice */}
        <div className="mt-8">
          <ClientNotice
            title="Authentic Client Photography Notice"
            description="All curated imagery above serves as an editorial placeholder representing the luxury standard of Perleco Catering. Authentic client event photography sourced directly from Instagram and official archives can be synchronized seamlessly."
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-brandBlack-card border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[4/3] md:w-3/5 w-full">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-mutedGold bg-white/5 px-2.5 py-1 rounded border border-mutedGold/30">
                    {activeItem.category}
                  </span>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="p-1 text-warmWhite/60 hover:text-white rounded-full bg-white/10"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-serif text-2xl font-bold text-warmWhite mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-warmWhite/80 leading-relaxed font-light mb-6">
                  {activeItem.caption}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeItem.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-warmWhite/60 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  href={`/booking?reference=${encodeURIComponent(activeItem.title)}`}
                  onClick={() => setActiveItem(null)}
                  className="w-full text-center py-2.5 bg-gradient-to-r from-burgundy to-richRed text-warmWhite text-xs font-semibold uppercase tracking-wider rounded border border-mutedGold/30 shadow-md"
                >
                  Enquire For This Concept
                </Link>
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full text-center py-2 text-warmWhite/60 hover:text-white text-xs tracking-wider"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
