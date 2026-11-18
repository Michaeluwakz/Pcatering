"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Instagram, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#0A0A0A] border-b border-[#222222] text-[#E0D7D0] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-mutedGold">
              <span className="w-1.5 h-1.5 rounded-full bg-richRed animate-pulse" />
              Over 10 Years of Culinary Excellence
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:inline text-white/70">
              Manchester & Worldwide Bookings
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px] sm:text-xs ml-auto">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-mutedGold group-hover:text-richRed transition-colors" />
              <span className="font-medium tracking-wider">{BRAND.phoneDisplay}</span>
            </a>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-mutedGold transition-colors text-white/80"
              aria-label="Perleco Catering on Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{BRAND.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          "transition-all duration-300 border-b",
          isScrolled
            ? "bg-brandBlack/95 backdrop-blur-md border-brandBlack-border/60 py-3 shadow-xl shadow-black/40"
            : "bg-brandBlack/80 backdrop-blur-sm border-white/10 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="shrink-0">
            <Logo variant="dark" size={isScrolled ? "sm" : "md"} />
          </div>

          {/* Desktop Navigation Links — Centered and well-spaced */}
          <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 flex-1 max-w-2xl mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[11px] xl:text-xs uppercase tracking-[0.18em] xl:tracking-[0.2em] transition-all relative py-1.5 font-medium whitespace-nowrap",
                    isActive
                      ? "text-mutedGold"
                      : "text-warmWhite/80 hover:text-warmWhite"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-burgundy via-richRed to-mutedGold rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA: Book An Event */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/booking"
              className="relative group overflow-hidden rounded px-5 py-2.5 bg-gradient-to-r from-burgundy to-richRed text-warmWhite text-xs font-semibold uppercase tracking-[0.18em] shadow-lg shadow-burgundy/30 hover:shadow-richRed/50 transition-all duration-300 border border-mutedGold/30 hover:border-mutedGold"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Book An Event
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-richRed opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-warmWhite hover:text-mutedGold focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brandBlack/98 border-b border-brandBlack-border/80 px-6 py-6 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm uppercase tracking-[0.22em] font-medium py-2 border-b border-white/5 flex items-center justify-between",
                    isActive ? "text-mutedGold" : "text-warmWhite/90 hover:text-mutedGold"
                  )}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-richRed" />}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/booking"
                className="w-full text-center py-3 bg-gradient-to-r from-burgundy to-richRed text-warmWhite font-semibold uppercase tracking-wider text-xs rounded border border-mutedGold/40 shadow-lg shadow-burgundy/30"
              >
                Book An Event
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 bg-brandBlack-card border border-white/10 rounded text-xs text-warmWhite"
                >
                  <Phone className="w-3.5 h-3.5 text-mutedGold" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-brandBlack-card border border-white/10 rounded text-xs text-warmWhite"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
