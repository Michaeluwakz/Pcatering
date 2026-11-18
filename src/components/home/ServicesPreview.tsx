import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Check } from "lucide-react";
import { SERVICES } from "@/data/cateringData";

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-brandBlack text-warmWhite relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-richRed/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-mutedGold/30 text-mutedGold text-xs uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-richRed" />
            Curated Culinary Offerings
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Tailored Catering For Every Occasion
          </h2>

          <p className="text-warmWhite/75 text-sm md:text-base leading-relaxed font-light">
            Whether welcoming hundreds to a corporate gala or hosting an intimate private dining evening, Perleco Catering delivers consummate taste and refined culinary artistry.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-brandBlack-card border border-white/10 hover:border-richRed/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-burgundy/30 flex flex-col"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlack-card via-brandBlack-card/30 to-transparent" />

                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-burgundy/90 backdrop-blur-md text-warmWhite text-[11px] font-semibold uppercase tracking-wider rounded border border-mutedGold/40 shadow-md">
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Service Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-warmWhite group-hover:text-mutedGold transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-warmWhite/75 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-warmWhite/80">
                        <Check className="w-3.5 h-3.5 text-richRed shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-xs uppercase tracking-wider text-mutedGold hover:text-warmWhite font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Service Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/booking?service=${service.slug}`}
                    className="px-4 py-2 bg-gradient-to-r from-burgundy to-richRed hover:from-richRed hover:to-burgundy text-warmWhite text-xs font-medium uppercase tracking-wider rounded border border-mutedGold/30 transition-all shadow-md"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Services Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-warmWhite border border-white/15 hover:border-mutedGold/50 rounded uppercase tracking-[0.2em] text-xs font-semibold transition-all"
          >
            <span>View Full Service Catalog</span>
            <ArrowUpRight className="w-4 h-4 text-mutedGold" />
          </Link>
        </div>
      </div>
    </section>
  );
};
