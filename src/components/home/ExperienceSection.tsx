import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Shield, CheckCircle2 } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { LogoIcon } from "@/components/ui/LogoIcon";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-warmWhite text-brandBlack relative overflow-hidden">
      {/* Decorative background grid and watermark */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-warmWhite-cream/60 -skew-x-6 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Dual Images and 10-Year Stamp */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-brandBlack/20 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                  alt="Perleco Catering Fine Dining Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -right-6 w-3/5 aspect-square rounded-lg overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop"
                  alt="Perleco Catering Handcrafted Canapés"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>

              {/* Floating 10+ Years Seal */}
              <div className="absolute -top-6 -left-6 bg-burgundy text-warmWhite p-4 rounded-xl shadow-xl border border-mutedGold/40 flex items-center gap-3">
                <LogoIcon size={36} variant="light" />
                <div>
                  <span className="block font-serif text-2xl font-bold text-mutedGold leading-none">
                    10+ Years
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-warmWhite/90">
                    Culinary Mastery
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-burgundy/10 text-burgundy text-xs font-semibold uppercase tracking-[0.25em]">
              <span className="w-1.5 h-1.5 rounded-full bg-richRed" />
              Our Culinary Heritage
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brandBlack tracking-tight leading-tight">
              Over a Decade of <br />
              <span className="text-burgundy italic">Culinary Excellence</span>
            </h2>

            <p className="text-brandBlack/80 text-base md:text-lg leading-relaxed font-normal">
              For more than ten years, Perleco Catering has stood at the intersection of refined gastronomy and impeccable British and international hospitality. Founded on an unwavering dedication to aesthetic presentation and profound flavour profiles, we have elevated dining experiences for weddings, private estates, high-profile corporate events, and bespoke family milestones.
            </p>

            <p className="text-brandBlack/70 text-sm leading-relaxed">
              Every celebration we cater is approached as an artisanal production. Our executive culinary team curates each menu from the ground up, utilizing premium seasonal produce and world-class culinary techniques to ensure your guests are captivated from the opening canapé to the final course.
            </p>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brandBlack/10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-richRed shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-brandBlack">Bespoke Tailoring</h4>
                  <p className="text-xs text-brandBlack/70">Custom-crafted courses designed specifically for your palate and occasion.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-richRed shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-brandBlack">Impeccable Presentation</h4>
                  <p className="text-xs text-brandBlack/70">Every dish styled with fine-dining precision and visual artistry.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-richRed shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-brandBlack">Flawless Event Logistics</h4>
                  <p className="text-xs text-brandBlack/70">Tenured front-of-house hospitality, timing precision, and calm leadership.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-richRed shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-brandBlack">Manchester & Global Reach</h4>
                  <p className="text-xs text-brandBlack/70">Headquartered in Manchester with full capability for worldwide bookings.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy hover:bg-burgundy-dark text-warmWhite text-xs font-semibold uppercase tracking-[0.2em] rounded shadow-md hover:shadow-lg transition-all"
              >
                <span>Discover Our Story</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brandBlack/20 hover:border-burgundy text-brandBlack text-xs font-semibold uppercase tracking-[0.2em] rounded transition-all"
              >
                <span>Consult Our Chefs</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
