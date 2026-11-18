"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Eye, X, ChevronRight, ChevronLeft } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/cateringData";
import { BRAND } from "@/lib/constants";

export const FeaturedGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const featured = GALLERY_ITEMS.slice(0, 6);

  return (
    <section className="py-24 bg-brandBlack-charcoal text-warmWhite relative border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-mutedGold/30 text-mutedGold text-xs uppercase tracking-[0.25em]">
              <Instagram className="w-3.5 h-3.5 text-richRed" />
              Visual Showcase
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Culinary Artistry in Focus
            </h2>

            <p className="text-warmWhite/75 text-sm max-w-xl font-light">
              Explore a curated selection of canapés, private dining presentations, and event banquet installations.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy hover:bg-burgundy-dark text-warmWhite text-xs font-semibold uppercase tracking-[0.18em] rounded border border-mutedGold/30 transition-all shadow-md"
            >
              <span>Explore Full Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-warmWhite hover:text-mutedGold rounded transition-colors"
              aria-label="View Instagram page"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Gallery Grid (6 Featured Cards with Editorial Asymmetry) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-brandBlack border border-white/10 hover:border-richRed/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-burgundy/20"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.95]"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded border border-white/20 text-[10px] uppercase tracking-wider text-mutedGold font-semibold">
                {item.category}
              </div>

              {/* Quick View Button */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-warmWhite opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Card Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                <h4 className="font-serif text-lg font-bold text-warmWhite group-hover:text-mutedGold transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-warmWhite/75 line-clamp-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fade-in"
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
                  Enquire For Similar Menu
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setActiveItem(null)}
                  className="w-full text-center py-2 text-warmWhite/70 hover:text-white text-xs tracking-wider"
                >
                  View All Gallery Images →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
