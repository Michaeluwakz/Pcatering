"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChefHat,
  Utensils,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
} from "lucide-react";
import { MENU_CATEGORIES, MenuCategory } from "@/data/menuData";
import { BRAND } from "@/lib/constants";
import { ClientNotice } from "@/components/ui/ClientNotice";

// ── Short category labels for the sticky nav pill ────────────
const SHORT_LABELS: Record<string, string> = {
  "welcome-canapes": "Canapés",
  starters: "Starters",
  "meat-selections": "Meat",
  "fish-seafood": "Fish & Seafood",
  "rice-grain": "Rice & Grains",
  "vegetable-selections": "Vegetables",
  "sides-accompaniments": "Sides",
  "live-stations": "Live Stations",
  "salad-bar": "Salad Bar",
  desserts: "Desserts",
  beverages: "Beverages",
  extras: "Extras",
};

// Which categories still need client confirmation
const NEEDS_CONFIRMATION = new Set([
  "live-stations",
  "salad-bar",
  "desserts",
  "beverages",
  "extras",
]);

export default function MenuPage() {
  const [activeSlug, setActiveSlug] = useState<string>(
    MENU_CATEGORIES[0].slug
  );
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // ── Intersection observer: highlight active category in nav ──
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    MENU_CATEGORIES.forEach((cat) => {
      const el = sectionRefs.current[cat.slug];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSlug(cat.slug);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Smooth-scroll to a category section ──────────────────────
  const scrollTo = (slug: string) => {
    const el = sectionRefs.current[slug];
    if (!el) return;
    const offset = 160; // sticky nav height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ── Scroll active nav pill into view ─────────────────────────
  useEffect(() => {
    const btn = navRef.current?.querySelector(`[data-slug="${activeSlug}"]`);
    btn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeSlug]);

  return (
    <div className="bg-brandBlack text-warmWhite">
      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-white/10"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop"
            alt="Perle & Co. Full Catering Menu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlack/80 via-transparent to-burgundy-dark/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center py-20 sm:py-28">
          {/* Brand pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-mutedGold/40 text-mutedGold text-xs uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
            <ChefHat className="w-3.5 h-3.5 text-richRed" />
            <span>Perle &amp; Co.</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warmWhite mb-4 leading-tight">
            A Fusion of Tradition
            <br />
            <span className="text-richRed">&amp; Excellence</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-warmWhite/75 max-w-2xl font-light leading-relaxed mb-4">
            Discover a carefully curated selection of Congolese, African and
            European cuisine, prepared with passion and presented with elegance.
          </p>

          {/* Cuisine badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["Congolese", "African", "European"].map((c) => (
              <span
                key={c}
                className="text-[11px] px-3 py-1 rounded-full border border-mutedGold/40 text-mutedGold uppercase tracking-[0.2em] bg-white/5 backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => scrollTo(MENU_CATEGORIES[0].slug)}
              className="px-8 py-4 bg-gradient-to-r from-burgundy to-richRed text-warmWhite text-xs font-semibold uppercase tracking-[0.2em] rounded border border-mutedGold/40 shadow-xl shadow-burgundy/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Our Menu</span>
            </button>
            <Link
              href="/booking"
              className="px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-mutedGold/50 backdrop-blur-md text-warmWhite text-xs font-medium uppercase tracking-[0.18em] rounded transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-mutedGold" />
              <span>Request a Custom Menu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          STICKY CATEGORY NAV
      ════════════════════════════════════════════════════════ */}
      <nav className="sticky top-[104px] z-40 bg-brandBlack/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40">
        <div
          ref={navRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-3"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeSlug === cat.slug;
            return (
              <button
                key={cat.slug}
                data-slug={cat.slug}
                onClick={() => scrollTo(cat.slug)}
                className={`shrink-0 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-burgundy to-richRed text-warmWhite border border-mutedGold/40 shadow-md shadow-burgundy/30 scale-[1.04]"
                    : "bg-white/5 hover:bg-white/10 text-warmWhite/70 hover:text-warmWhite border border-white/10"
                }`}
              >
                {SHORT_LABELS[cat.slug] ?? cat.title}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════
          MENU CATEGORIES — full list
      ════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-24">
        {MENU_CATEGORIES.map((cat, idx) => {
          const isEven = idx % 2 === 0;
          const needsConfirm = NEEDS_CONFIRMATION.has(cat.slug);
          return (
            <section
              key={cat.id}
              id={`menu-${cat.slug}`}
              ref={(el) => {
                sectionRefs.current[cat.slug] = el;
              }}
              className="scroll-mt-44"
            >
              {/* Category number */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[11px] text-mutedGold uppercase tracking-[0.35em] font-semibold">
                  Category {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-mutedGold/40 to-transparent" />
                <span className="text-[10px] text-warmWhite/40 uppercase tracking-wider">
                  {cat.cuisine}
                </span>
              </div>

              {/* Two-column layout alternates */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
                  !isEven ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group ${
                    !isEven ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover brightness-[0.85] group-hover:brightness-[0.95] group-hover:scale-[1.03] transition-all duration-700"
                    loading="lazy"
                  />
                  {/* Gold gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Cuisine badge on image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {cat.cuisine.split(" • ").map((c) => (
                      <span
                        key={c}
                        className="text-[9px] px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-mutedGold/40 text-mutedGold uppercase tracking-widest"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                  <div>
                    <p className="text-[11px] text-richRed uppercase tracking-[0.3em] font-semibold mb-2">
                      {cat.subtitle}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmWhite leading-tight mb-4">
                      {cat.title}
                    </h2>
                    <p className="text-warmWhite/70 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Confirmation notice */}
                  {needsConfirm && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-mutedGold/10 border border-mutedGold/30">
                      <AlertCircle className="w-4 h-4 text-mutedGold shrink-0 mt-0.5" />
                      <p className="text-[11px] text-mutedGold/90 leading-relaxed">
                        Menu items in this category are pending final client
                        confirmation. Displayed items are representative
                        placeholders only.
                      </p>
                    </div>
                  )}

                  {/* Menu items list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 py-2.5 border-b border-white/[0.07] group/item"
                      >
                        <span className="w-1 h-1 rounded-full bg-richRed shrink-0 group-hover/item:bg-mutedGold transition-colors" />
                        <span className="text-sm text-warmWhite/85 group-hover/item:text-warmWhite transition-colors font-light">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enquire CTA */}
                  <div className="pt-2">
                    <Link
                      href={`/booking?category=${encodeURIComponent(cat.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-mutedGold/50 rounded text-xs uppercase tracking-[0.18em] text-warmWhite/80 hover:text-warmWhite transition-all group/btn"
                    >
                      <span>Enquire About This Selection</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ════════════════════════════════════════════════════════
          CUSTOM MENU ENQUIRY SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-brandBlack-charcoal via-brandBlack to-brandBlack border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 border border-burgundy/40 text-richRed text-[11px] uppercase tracking-[0.25em] font-semibold">
                <ChefHat className="w-3.5 h-3.5" />
                Bespoke Catering
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warmWhite leading-tight">
                Your Event.{" "}
                <span className="text-richRed">Your Taste.</span>
                <br />
                Your Menu.
              </h2>

              <p className="text-warmWhite/70 text-sm sm:text-base leading-relaxed">
                Every occasion is different. At Perle &amp; Co., we create
                tailored catering experiences to suit your taste, culture,
                dietary requirements and budget.
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {[
                  "Authentic Congolese, African and European cuisine",
                  "Fresh, high-quality ingredients sourced responsibly",
                  "Elegant presentation and professional service",
                  "Flexible menus for any event size or style",
                  "Catering for small intimate gatherings or large banquets",
                  "Customised menus tailored to individual preferences and budgets",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 group">
                    <CheckCircle2 className="w-4 h-4 text-richRed shrink-0 mt-0.5 group-hover:text-mutedGold transition-colors" />
                    <span className="text-sm text-warmWhite/80">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="pt-4 space-y-2 border-t border-white/10">
                <a
                  href={`mailto:${BRAND.perleEmail}`}
                  className="flex items-center gap-2 text-sm text-warmWhite/70 hover:text-mutedGold transition-colors"
                >
                  <Mail className="w-4 h-4 text-mutedGold" />
                  <span>{BRAND.perleEmail}</span>
                </a>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-2 text-sm text-warmWhite/70 hover:text-mutedGold transition-colors"
                >
                  <Phone className="w-4 h-4 text-mutedGold" />
                  <span>{BRAND.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right — enquiry card */}
            <div className="bg-brandBlack-card border border-white/10 rounded-2xl p-7 sm:p-10 shadow-2xl space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-warmWhite mb-1">
                  Request a Custom Menu
                </h3>
                <p className="text-xs text-warmWhite/50">
                  Tell us about your event and we&apos;ll craft the perfect
                  menu.
                </p>
              </div>

              <CustomMenuEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Client notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-12">
        <ClientNotice
          title="Menu Accuracy Notice"
          description="Categories 08–12 (Live Stations, Salad Bar, Desserts, Beverages, Extras) contain representative placeholder items pending final client confirmation. All 7 supplied categories (01–07) are displayed exactly as provided in the client brief."
        />
      </div>
    </div>
  );
}

// ── Inline custom menu enquiry form ─────────────────────────
function CustomMenuEnquiryForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    cuisine: "",
    categories: "",
    dietary: "",
    budget: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const msg = [
      "🍽️ *PERLE & CO. — CUSTOM MENU REQUEST*",
      "",
      `👤 *Name:* ${form.name}`,
      `📧 *Email:* ${form.email}`,
      `📞 *Phone:* ${form.phone}`,
      `🎉 *Event Type:* ${form.eventType}`,
      `📅 *Event Date:* ${form.eventDate}`,
      `👥 *Guests:* ${form.guests}`,
      `🌍 *Preferred Cuisine:* ${form.cuisine || "To be discussed"}`,
      `📋 *Menu Categories:* ${form.categories || "To be discussed"}`,
      `🥗 *Dietary Requirements:* ${form.dietary || "None specified"}`,
      `💷 *Budget Range:* ${form.budget || "To be discussed"}`,
      `📝 *Additional Requests:* ${form.additionalInfo || "None"}`,
    ].join("\n");

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/${BRAND.phoneInternational.replace("+", "")}?text=${encoded}`;

    setState("loading");
    setTimeout(() => {
      setState("success");
      window.open(url, "_blank", "noopener,noreferrer");
    }, 600);
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-green-400" />
        </div>
        <h4 className="font-serif text-xl font-bold text-warmWhite">
          Redirecting to WhatsApp
        </h4>
        <p className="text-xs text-warmWhite/60">
          Your menu request details are pre-filled and ready to send.
        </p>
        <button
          onClick={() => setState("idle")}
          className="text-xs text-mutedGold hover:text-white underline underline-offset-4 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full bg-brandBlack border border-white/10 focus:border-mutedGold/60 focus:outline-none rounded px-3.5 py-2.5 text-sm text-warmWhite placeholder:text-warmWhite/30 transition-colors";
  const labelCls = "block text-[11px] uppercase tracking-[0.15em] text-warmWhite/50 mb-1.5 font-medium";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="07xxx xxxxxx" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Event Type *</label>
          <select name="eventType" required value={form.eventType} onChange={handleChange} className={inputCls}>
            <option value="">Select event type</option>
            <option>Wedding Reception</option>
            <option>Corporate Event</option>
            <option>Private Dinner</option>
            <option>Birthday Celebration</option>
            <option>Cultural / Community Event</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Event Date</label>
          <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Number of Guests *</label>
          <select name="guests" required value={form.guests} onChange={handleChange} className={inputCls}>
            <option value="">Select range</option>
            <option>1 – 25</option>
            <option>26 – 50</option>
            <option>51 – 100</option>
            <option>101 – 200</option>
            <option>200+</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Preferred Cuisine</label>
        <select name="cuisine" value={form.cuisine} onChange={handleChange} className={inputCls}>
          <option value="">Select preference</option>
          <option>Congolese</option>
          <option>African</option>
          <option>European</option>
          <option>Mixed (Congolese, African & European)</option>
          <option>Fully Custom — to be discussed</option>
        </select>
      </div>

      <div>
        <label className={labelCls}>Menu Categories of Interest</label>
        <input name="categories" value={form.categories} onChange={handleChange} placeholder="e.g. Meat Selections, Rice, Canapés, Desserts" className={inputCls} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Dietary Requirements</label>
          <input name="dietary" value={form.dietary} onChange={handleChange} placeholder="Halal, Vegan, Gluten-free…" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Budget Range</label>
          <select name="budget" value={form.budget} onChange={handleChange} className={inputCls}>
            <option value="">Prefer not to say</option>
            <option>Under £500</option>
            <option>£500 – £1,000</option>
            <option>£1,000 – £2,500</option>
            <option>£2,500 – £5,000</option>
            <option>£5,000+</option>
            <option>To be discussed</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Additional Requests</label>
        <textarea name="additionalInfo" value={form.additionalInfo} onChange={handleChange} rows={3} placeholder="Tell us anything else about your event or menu requirements…" className={`${inputCls} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-3.5 bg-gradient-to-r from-burgundy to-richRed hover:opacity-95 disabled:opacity-60 text-warmWhite text-xs font-semibold uppercase tracking-[0.2em] rounded border border-mutedGold/40 shadow-lg shadow-burgundy/30 flex items-center justify-center gap-2 transition-all"
      >
        {state === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Preparing Request…</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-4 h-4" />
            <span>Request a Custom Menu</span>
          </>
        )}
      </button>

      <p className="text-[10px] text-warmWhite/40 text-center">
        Your details will open a pre-filled WhatsApp message. No spam, ever.
      </p>
    </form>
  );
}
