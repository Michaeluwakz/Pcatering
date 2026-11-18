"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Instagram,
  MapPin,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Award,
  ShieldCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/cateringData";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export const Footer: React.FC = () => {
  // Mobile accordion state for footer sections
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    services: false,
    explore: false,
    contact: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <footer className="bg-[#0B0B0B] text-warmWhite border-t border-white/10 relative overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-richRed/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Pre-footer Callout Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-brandBlack via-burgundy-dark/40 to-brandBlack py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <span className="text-mutedGold uppercase tracking-[0.3em] text-xs font-semibold">
              Private Dining • Corporate Banquets • Canapés
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-warmWhite font-bold">
              Ready to create an extraordinary culinary experience?
            </h3>
            <p className="text-warmWhite/70 text-sm max-w-xl">
              From Manchester private dining to international event catering, our culinary team is ready to design your bespoke menu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/booking"
              className="px-6 py-3.5 bg-gradient-to-r from-burgundy to-richRed text-warmWhite font-semibold uppercase tracking-[0.18em] text-xs rounded border border-mutedGold/40 shadow-lg shadow-burgundy/40 hover:shadow-richRed/60 hover:scale-[1.02] transition-all"
            >
              Discuss Your Event
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-warmWhite border border-white/15 text-xs font-medium uppercase tracking-wider rounded transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-mutedGold" />
              <span>{BRAND.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6 pb-4 md:pb-0 border-b md:border-b-0 border-white/10">
            <Logo variant="dark" size="lg" />
            
            <p className="text-warmWhite/80 text-sm leading-relaxed max-w-sm font-light">
              &ldquo;Creating exceptional food experiences, one event at a time.&rdquo;
            </p>

            <p className="text-warmWhite/60 text-xs leading-relaxed max-w-sm">
              Perleco Catering delivers luxury event catering, artisanal canapés, private chef tables, and gourmet takeaway orders across Manchester and worldwide destinations.
            </p>

            {/* Accreditations / Experience Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-warmWhite/70">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10">
                <Award className="w-4 h-4 text-mutedGold" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-richRed" />
                <span>Premium Quality Standards</span>
              </div>
            </div>
          </div>

          {/* Core Services — Accordion on Mobile, Column on Desktop */}
          <div className="border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            {/* Desktop Title */}
            <h4 className="hidden md:block font-serif text-base uppercase tracking-[0.2em] text-mutedGold font-bold mb-4">
              Our Services
            </h4>

            {/* Mobile Dropdown Trigger */}
            <button
              type="button"
              onClick={() => toggleSection("services")}
              className="md:hidden flex items-center justify-between w-full py-2.5 text-left font-serif text-sm uppercase tracking-[0.2em] text-mutedGold font-bold focus:outline-none"
              aria-expanded={openSections.services}
            >
              <span>Our Services</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  openSections.services ? "rotate-180 text-mutedGold" : "text-warmWhite/50"
                )}
              />
            </button>

            {/* Foldable Content */}
            <div
              className={cn(
                "transition-all duration-300 md:block",
                openSections.services ? "block pt-3 animate-fade-in" : "hidden md:block"
              )}
            >
              <ul className="space-y-2.5 text-xs">
                {SERVICES.map((srv) => (
                  <li key={srv.id}>
                    <Link
                      href={`/services#${srv.slug}`}
                      className="text-warmWhite/70 hover:text-white transition-colors flex items-center gap-1.5 group py-1 md:py-0"
                    >
                      <span className="w-1 h-1 rounded-full bg-richRed group-hover:scale-150 transition-transform" />
                      <span>{srv.title}</span>
                    </Link>
                  </li>
                ))}
                <li className="pt-1">
                  <Link
                    href="/services"
                    className="text-mutedGold/90 hover:text-mutedGold transition-colors font-medium inline-flex items-center gap-1 py-1 md:py-0"
                  >
                    View All Services <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links — Accordion on Mobile, Column on Desktop */}
          <div className="border-b md:border-b-0 border-white/10 pb-4 md:pb-0">
            {/* Desktop Title */}
            <h4 className="hidden md:block font-serif text-base uppercase tracking-[0.2em] text-mutedGold font-bold mb-4">
              Explore
            </h4>

            {/* Mobile Dropdown Trigger */}
            <button
              type="button"
              onClick={() => toggleSection("explore")}
              className="md:hidden flex items-center justify-between w-full py-2.5 text-left font-serif text-sm uppercase tracking-[0.2em] text-mutedGold font-bold focus:outline-none"
              aria-expanded={openSections.explore}
            >
              <span>Explore</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  openSections.explore ? "rotate-180 text-mutedGold" : "text-warmWhite/50"
                )}
              />
            </button>

            {/* Foldable Content */}
            <div
              className={cn(
                "transition-all duration-300 md:block",
                openSections.explore ? "block pt-3 animate-fade-in" : "hidden md:block"
              )}
            >
              <ul className="space-y-2.5 text-xs">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-warmWhite/70 hover:text-white transition-colors block py-1 md:py-0"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warmWhite/70 hover:text-white transition-colors flex items-center gap-1.5 py-1 md:py-0"
                  >
                    <Instagram className="w-3.5 h-3.5 text-richRed" />
                    <span>Instagram Showcase</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details — Accordion on Mobile, Column on Desktop */}
          <div className="pb-2 md:pb-0">
            {/* Desktop Title */}
            <h4 className="hidden md:block font-serif text-base uppercase tracking-[0.2em] text-mutedGold font-bold mb-4">
              Contact & Enquiries
            </h4>

            {/* Mobile Dropdown Trigger */}
            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="md:hidden flex items-center justify-between w-full py-2.5 text-left font-serif text-sm uppercase tracking-[0.2em] text-mutedGold font-bold focus:outline-none"
              aria-expanded={openSections.contact}
            >
              <span>Contact & Enquiries</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-300",
                  openSections.contact ? "rotate-180 text-mutedGold" : "text-warmWhite/50"
                )}
              />
            </button>

            {/* Foldable Content */}
            <div
              className={cn(
                "transition-all duration-300 md:block",
                openSections.contact ? "block pt-3 animate-fade-in" : "hidden md:block"
              )}
            >
              <ul className="space-y-3 text-xs text-warmWhite/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-mutedGold shrink-0 mt-0.5" />
                  <span>{BRAND.location} (Worldwide Availability)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-mutedGold shrink-0" />
                  <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">
                    {BRAND.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-mutedGold shrink-0" />
                  <a href={`mailto:${BRAND.perleEmail}`} className="hover:text-white transition-colors">
                    {BRAND.perleEmail}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#25D366] transition-colors"
                  >
                    WhatsApp Direct Enquiry
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-mutedGold shrink-0 mt-0.5" />
                  <span>Enquiries: Mon–Sun 8am–9pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-warmWhite/50 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>Registered in England & Wales</span>
            <span>•</span>
            <Link href="/booking" className="hover:text-white transition-colors">
              Enquiry Portal
            </Link>
            <span>•</span>
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {BRAND.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
