import React from "react";
import { Award, Sparkles, Users, ChefHat, Globe } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/cateringData";

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-mutedGold" />,
    Sparkles: <Sparkles className="w-6 h-6 text-richRed" />,
    Users: <Users className="w-6 h-6 text-mutedGold" />,
    ChefHat: <ChefHat className="w-6 h-6 text-richRed" />,
    Globe: <Globe className="w-6 h-6 text-mutedGold" />,
  };

  return (
    <section className="py-24 bg-warmWhite text-brandBlack relative overflow-hidden">
      {/* Decorative Warm White / Cream Accent background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-burgundy/10 text-burgundy text-xs font-semibold uppercase tracking-[0.25em]">
            <Award className="w-3.5 h-3.5 text-richRed" />
            Distinction in Catering
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brandBlack">
            Why Choose Perleco Catering?
          </h2>

          <p className="text-brandBlack/75 text-sm sm:text-base leading-relaxed">
            Positioned at the apex of hospitality in Manchester, we merge culinary innovation with decade-long event expertise to deliver an unparalleled dining journey.
          </p>
        </div>

        {/* 5 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl bg-white border border-brandBlack/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-warmWhite-cream flex items-center justify-center border border-mutedGold/30 shadow-inner">
                  {iconMap[pillar.icon]}
                </div>

                <h3 className="font-serif text-[16px] sm:text-[20px] font-bold text-brandBlack leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-brandBlack/70 text-[11px] sm:text-[12px] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-brandBlack/10 flex items-center gap-1.5 text-[8.5px] sm:text-[9px] font-semibold text-burgundy uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-richRed" />
                <span>Perleco Standard of Excellence</span>
              </div>
            </div>
          ))}

          {/* 6th Complementary Box: Worldwide Reach & Direct Contact */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-brandBlack to-burgundy-dark text-warmWhite border border-mutedGold/40 shadow-xl flex flex-col justify-between">
            <div className="space-y-3.5">
              <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.3em] font-semibold text-mutedGold">
                Direct Consultation
              </span>
              <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-warmWhite leading-snug">
                Planning an Extraordinary Event?
              </h3>
              <p className="text-warmWhite/80 text-[11px] sm:text-[12px] leading-relaxed">
                Connect directly with our culinary directors for initial menu visioning, guest planning, and date reservations.
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-white/10 flex flex-col gap-1.5">
              <a
                href="tel:07947832818"
                className="text-warmWhite hover:text-mutedGold font-serif text-[16px] sm:text-[18px] font-bold transition-colors"
              >
                07947 832818
              </a>
              <span className="text-[9px] text-warmWhite/60">
                Manchester, Cheshire & Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
