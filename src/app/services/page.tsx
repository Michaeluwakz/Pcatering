import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Sparkles, Utensils, MessageCircle, HelpCircle } from "lucide-react";
import { SERVICES } from "@/data/cateringData";
import { BRAND } from "@/lib/constants";
import { ClientNotice } from "@/components/ui/ClientNotice";

export const metadata: Metadata = {
  title: "Our Catering Services | Perleco Catering Manchester",
  description:
    "Explore Perleco Catering services: Event Catering, Elegant Canapés, Private Dining, and Gourmet Takeaway Orders in Manchester and worldwide.",
};

export default function ServicesPage() {
  return (
    <div className="bg-brandBlack text-warmWhite">
      {/* Services Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop"
            alt="Perleco Catering Services Overview"
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
            <Sparkles className="w-3.5 h-3.5 text-richRed" />
            <span>Tailored Hospitality Solutions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warmWhite mb-6">
            Our Culinary Services
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-warmWhite/80 max-w-2xl font-light leading-relaxed">
            From monumental gala dinners to intimate multi-course private chef experiences, discover our full suite of luxury catering services.
          </p>
        </div>
      </section>

      {/* Services Deep Dive Sections */}
      <div className="divide-y divide-white/10">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`py-24 ${isEven ? "bg-brandBlack" : "bg-brandBlack-charcoal"} relative overflow-hidden`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Service Image Column */}
                  <div className={`lg:col-span-6 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {service.badge && (
                        <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-burgundy/90 text-warmWhite text-xs font-semibold uppercase tracking-wider rounded border border-mutedGold/40 shadow-lg backdrop-blur-md">
                          {service.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Service Narrative Column */}
                  <div className={`lg:col-span-6 space-y-6 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-mutedGold/30 text-mutedGold text-xs uppercase tracking-[0.25em]">
                      Service 0{index + 1}
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmWhite">
                      {service.title}
                    </h2>

                    <p className="text-warmWhite/80 text-sm sm:text-base leading-relaxed font-light">
                      {service.fullDescription}
                    </p>

                    {/* Highlights & Inclusions */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-mutedGold font-semibold">
                        What&apos;s Included & Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.includedFeatures.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-warmWhite/80">
                            <CheckCircle2 className="w-4 h-4 text-richRed shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                      <span className="text-[11px] uppercase tracking-wider text-mutedGold font-semibold block">
                        Recommended Occasions:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs text-warmWhite/90 bg-brandBlack/60 border border-white/10 px-2.5 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client Placeholder Note */}
                    <ClientNotice
                      title="Bespoke Menu & Package Pricing"
                      description="Custom menus, course listings, and exact package quotations are tailored individually following client consultation."
                    />

                    {/* Action CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/booking?service=${service.slug}`}
                        className="px-6 py-3.5 bg-gradient-to-r from-burgundy to-richRed hover:from-richRed hover:to-burgundy text-warmWhite text-xs font-semibold uppercase tracking-[0.18em] rounded border border-mutedGold/40 shadow-lg shadow-burgundy/30 transition-all flex items-center gap-2"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={BRAND.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-warmWhite border border-white/15 text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                        <span>Instant WhatsApp Query</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
