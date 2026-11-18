"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Users,
  Utensils,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  X,
  Edit3,
  Send,
  Globe,
  Clock,
} from "lucide-react";
import { BRAND } from "@/lib/constants";
import { FAQS, SERVICES } from "@/data/cateringData";
import { LogoIcon } from "@/components/ui/LogoIcon";

function BookingContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const initialReference = searchParams.get("reference") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    guests: "",
    serviceRequired: initialService
      ? SERVICES.find((s) => s.slug === initialService)?.title || ""
      : "",
    budget: "",
    dietary: "",
    additionalInfo: initialReference
      ? `Inspired by portfolio item: ${initialReference}. `
      : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string>("");
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Sync initial query params if they load late
  useEffect(() => {
    if (initialService && !formData.serviceRequired) {
      const match = SERVICES.find((s) => s.slug === initialService);
      if (match) {
        setFormData((prev) => ({ ...prev, serviceRequired: match.title }));
      }
    }
  }, [initialService, formData.serviceRequired]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "A valid email address is required.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = "A valid telephone number is required.";
    }
    if (!formData.eventType) newErrors.eventType = "Please select the event type.";
    if (!formData.eventDate) newErrors.eventDate = "Please choose a planned event date.";
    if (!formData.location.trim()) newErrors.location = "Event venue or city is required.";
    if (!formData.guests || Number(formData.guests) <= 0) {
      newErrors.guests = "Please enter guest count.";
    }
    if (!formData.serviceRequired) {
      newErrors.serviceRequired = "Please select the service required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "🌟 *NEW EVENT ENQUIRY — PERLECO CATERING*",
      "",
      `👤 *Client Name:* ${formData.fullName}`,
      `📧 *Email:* ${formData.email}`,
      `📞 *Phone:* ${formData.phone}`,
      "",
      `🗓️ *Event Type:* ${formData.eventType}`,
      `📅 *Planned Date:* ${formData.eventDate}`,
      `📍 *Location / Venue:* ${formData.location}`,
      `👥 *Number of Guests:* ${formData.guests}`,
      `🍽️ *Service Required:* ${formData.serviceRequired}`,
    ];

    if (formData.dietary.trim()) {
      lines.push(`🥗 *Dietary / Allergens:* ${formData.dietary}`);
    }

    if (formData.additionalInfo.trim()) {
      lines.push(`📝 *Event Vision & Notes:* ${formData.additionalInfo}`);
    }

    lines.push("");
    lines.push("✨ _Enquiry submitted via perlecocatering.com_");
    return lines.join("\n");
  };

  // Step 1: When user clicks submit on the form, validate and open review modal
  const handleReviewEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionSuccess(null);
    setSubmissionError(null);

    if (!validate()) {
      return;
    }

    const messageText = buildWhatsAppMessage();
    const url = `https://wa.me/447947832818?text=${encodeURIComponent(messageText)}`;
    setWhatsappUrl(url);
    setShowReviewModal(true);
  };

  // Step 2: When user confirms in modal, dispatch to backend & open WhatsApp
  const handleConfirmAndSendToWhatsApp = async () => {
    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // 1. Submit to API backend so the lead is safely recorded
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      const refId = data.success ? data.enquiryId : `PER-${Date.now().toString(36).toUpperCase()}`;

      // 2. Open WhatsApp in new window/tab
      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }

      setSubmissionSuccess(refId);
      setShowReviewModal(false);
    } catch (err) {
      // If network fails, still launch WhatsApp since that's the primary direct channel
      if (whatsappUrl) {
        window.open(whatsappUrl, "_blank");
      }
      setSubmissionSuccess(`PER-WA-${Date.now().toString(36).toUpperCase()}`);
      setShowReviewModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      location: "",
      guests: "",
      serviceRequired: "",
      budget: "",
      dietary: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="bg-brandBlack text-warmWhite">
      {/* Booking Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop"
            alt="Perleco Catering Event Planning & Booking"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brandBlack via-transparent to-burgundy-dark/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-mutedGold/40 text-mutedGold text-xs uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-richRed" />
            <span>Consultation & Direct WhatsApp Reservations</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warmWhite mb-6">
            Book Your Event
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-warmWhite/80 max-w-2xl font-light leading-relaxed mb-8">
            Let us design an extraordinary culinary experience. Share your event vision below, review your details, and submit directly to our WhatsApp channel.
          </p>

          {/* Quick Direct Contacts Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-warmWhite text-xs font-semibold uppercase tracking-wider flex items-center gap-2.5 transition-colors"
            >
              <Phone className="w-4 h-4 text-mutedGold" />
              <span>Direct Call: {BRAND.phoneDisplay}</span>
            </a>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-warmWhite text-xs font-semibold uppercase tracking-wider flex items-center gap-2.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Instant WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form & Information Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: The Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-brandBlack-card border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            <div className="mb-8 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-mutedGold font-semibold">
                Event Details Form
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warmWhite">
                Tell Us About Your Occasion
              </h2>
              <p className="text-xs sm:text-sm text-warmWhite/70">
                Please complete the details below. You will be able to review your exact details before they are dispatched directly to our WhatsApp channel.
              </p>
            </div>

            {/* Success Feedback Modal / Banner */}
            {submissionSuccess && (
              <div className="mb-8 p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-warmWhite animate-fade-in space-y-4">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h4 className="font-serif text-lg font-bold">Enquiry Prepared & Forwarded to WhatsApp</h4>
                </div>
                <p className="text-xs text-warmWhite/80 leading-relaxed">
                  Thank you for contacting Perleco Catering. Reference ID:{" "}
                  <strong className="text-mutedGold">{submissionSuccess}</strong>.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-lg transition-colors shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Open WhatsApp Chat Now</span>
                    </a>
                  )}
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 bg-white/10 hover:bg-white/15 text-warmWhite text-xs rounded-lg transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            )}

            {/* Error Feedback */}
            {submissionError && (
              <div className="mb-8 p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-warmWhite animate-fade-in flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-richRed shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-richRed block mb-1">Submission Notice</span>
                  <span>{submissionError}</span>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleReviewEnquiry} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Full Name <span className="text-richRed">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Email Address <span className="text-richRed">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. eleanor@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Telephone Number <span className="text-richRed">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 07947 832818"
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Type of Event <span className="text-richRed">*</span>
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.eventType
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  >
                    <option value="">Select Event Type</option>
                    <option value="Corporate Function / Gala">Corporate Function / Gala</option>
                    <option value="Wedding / Civil Partnership">Wedding / Civil Partnership</option>
                    <option value="Private Dining Experience">Private Dining Experience</option>
                    <option value="Cocktail & Canapé Reception">Cocktail & Canapé Reception</option>
                    <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                    <option value="Takeaway Order / Luxury Grazing">Takeaway Order / Luxury Grazing</option>
                    <option value="Worldwide Destination Event">Worldwide Destination Event</option>
                    <option value="Other Bespoke Event">Other Bespoke Event</option>
                  </select>
                  {errors.eventType && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.eventType}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Event Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Event Date <span className="text-richRed">*</span>
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.eventDate
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  />
                  {errors.eventDate && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.eventDate}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Event Location / Venue <span className="text-richRed">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Manchester City Centre / Private Home"
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.location
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  />
                  {errors.location && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.location}</span>
                  )}
                </div>
              </div>

              {/* Row 4: Number of Guests & Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Number of Guests <span className="text-richRed">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="e.g. 40"
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.guests
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  />
                  {errors.guests && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.guests}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                    Catering Service Required <span className="text-richRed">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-brandBlack border text-sm text-warmWhite focus:outline-none focus:ring-2 transition-all ${
                      errors.serviceRequired
                        ? "border-richRed focus:ring-richRed"
                        : "border-white/15 focus:border-mutedGold focus:ring-mutedGold/30"
                    }`}
                  >
                    <option value="">Select Catering Service</option>
                    <option value="Event Catering">Event Catering (Corporate & Celebrations)</option>
                    <option value="Elegant Canapés">Elegant Canapés (Receptions & Cocktail Parties)</option>
                    <option value="Private Dining">Private Dining (Private Chef Table)</option>
                    <option value="Takeaway Orders & Luxury Platters">Takeaway Orders & Luxury Platters</option>
                    <option value="Multi-Service / Custom Package">Multi-Service / Custom Package</option>
                  </select>
                  {errors.serviceRequired && (
                    <span className="text-[11px] text-richRed mt-1 block">{errors.serviceRequired}</span>
                  )}
                </div>
              </div>

              {/* Row 5: Dietary Preferences */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                  Dietary Preferences & Allergens
                </label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  placeholder="e.g. 5x Vegetarian, 2x Halal, 1x Nut allergy"
                  className="w-full px-4 py-3 rounded-lg bg-brandBlack border border-white/15 text-sm text-warmWhite focus:border-mutedGold focus:outline-none"
                />
              </div>

              {/* Row 6: Additional Information */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-warmWhite/80 font-medium mb-2">
                  Additional Information & Event Vision
                </label>
                <textarea
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us about the theme, schedule, favourite ingredients, or any specific hospitality preferences..."
                  className="w-full px-4 py-3 rounded-lg bg-brandBlack border border-white/15 text-sm text-warmWhite focus:border-mutedGold focus:outline-none resize-y"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-burgundy via-richRed to-burgundy hover:opacity-95 text-warmWhite text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded-lg border border-mutedGold/40 shadow-xl shadow-richRed/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Review & Submit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-warmWhite/50 text-center">
                Your details are shown for review before being transmitted to our WhatsApp channel (+44 7947 832818).
              </p>
            </form>
          </div>

          {/* Right Column: Contact Details, WhatsApp Card, & Assurance (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Call Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brandBlack via-burgundy-deep to-brandBlack border border-mutedGold/40 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <LogoIcon size={38} variant="dark" />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-mutedGold font-semibold block">
                    Direct Line
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-warmWhite">
                    Speak With Our Team
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-warmWhite/75 leading-relaxed font-light">
                Prefer to discuss your event over the phone or have immediate questions regarding dates and logistics?
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-mutedGold group-hover:text-richRed transition-colors" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-warmWhite/50 block">Hotline</span>
                    <span className="font-serif text-lg font-bold text-warmWhite">{BRAND.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#25D366] block">WhatsApp Chat</span>
                    <span className="text-xs font-semibold text-warmWhite">Message Us Directly</span>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-warmWhite/75 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-mutedGold shrink-0" />
                  <span>Location: Manchester, United Kingdom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-mutedGold shrink-0" />
                  <span>Service: Manchester & Worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-mutedGold shrink-0" />
                  <span>Consultation: Mon–Sun 8am–9pm</span>
                </div>
              </div>
            </div>

            {/* Our Booking Process */}
            <div className="p-8 rounded-2xl bg-brandBlack-card border border-white/10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-warmWhite flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-mutedGold" />
                Our Booking Journey
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-burgundy/40 border border-mutedGold/40 text-mutedGold flex items-center justify-center font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-semibold text-warmWhite">Enquiry & WhatsApp Review</h5>
                    <p className="text-warmWhite/70">Complete the form, review your details, and send directly to our executive WhatsApp.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-burgundy/40 border border-mutedGold/40 text-mutedGold flex items-center justify-center font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-semibold text-warmWhite">Bespoke Menu Proposal</h5>
                    <p className="text-warmWhite/70">Our chefs design custom courses, canapé assortments, and tableware presentation schemes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-burgundy/40 border border-mutedGold/40 text-mutedGold flex items-center justify-center font-bold shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-semibold text-warmWhite">Date Confirmation & Tasting</h5>
                    <p className="text-warmWhite/70">Your date is locked in our calendar. Menu tastings are scheduled for weddings and grand galas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-burgundy/40 border border-mutedGold/40 text-mutedGold flex items-center justify-center font-bold shrink-0">
                    4
                  </span>
                  <div>
                    <h5 className="font-semibold text-warmWhite">Flawless Event Day</h5>
                    <p className="text-warmWhite/70">Our kitchen and front-of-house teams execute seamless, world-class catering.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review & Details Modal Before Sending to WhatsApp */}
      {showReviewModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setShowReviewModal(false)}
        >
          <div
            className="relative max-w-xl w-full bg-brandBlack-card border border-mutedGold/40 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-warmWhite">
                    Review Enquiry Details
                  </h3>
                  <p className="text-xs text-warmWhite/70">
                    Verify your details below before sending to Perleco on WhatsApp.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-warmWhite/60 hover:text-white transition-colors"
                aria-label="Close review"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Summary Details Card */}
            <div className="space-y-4 mb-6 bg-brandBlack p-5 rounded-xl border border-white/10 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Client Name
                  </span>
                  <span className="text-sm font-semibold text-warmWhite">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Contact Phone
                  </span>
                  <span className="text-sm font-semibold text-warmWhite">{formData.phone}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Email Address
                  </span>
                  <span className="text-warmWhite font-medium">{formData.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Event Type
                  </span>
                  <span className="text-warmWhite font-medium">{formData.eventType}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Planned Date
                  </span>
                  <span className="text-warmWhite font-medium">{formData.eventDate}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Venue / Location
                  </span>
                  <span className="text-warmWhite font-medium">{formData.location}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Guest Count
                  </span>
                  <span className="text-warmWhite font-medium">{formData.guests} Guests</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                    Service Required
                  </span>
                  <span className="text-sm font-semibold text-warmWhite">{formData.serviceRequired}</span>
                </div>

                {formData.dietary.trim() && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                      Dietary & Allergens
                    </span>
                    <span className="text-warmWhite/90">{formData.dietary}</span>
                  </div>
                )}

                {formData.additionalInfo.trim() && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-mutedGold font-semibold block">
                      Additional Vision & Notes
                    </span>
                    <span className="text-warmWhite/80 italic">&ldquo;{formData.additionalInfo}&rdquo;</span>
                  </div>
                )}
              </div>
            </div>

            {/* Destination WhatsApp Channel Notice */}
            <div className="p-3.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 mb-6 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span className="text-warmWhite/90">
                  Target Channel: <strong>{BRAND.phoneDisplay}</strong> (+44 7947 832818)
                </span>
              </div>
              <span className="text-[10px] text-[#25D366] font-semibold uppercase tracking-wider shrink-0">
                Official Business
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-warmWhite text-xs font-semibold uppercase tracking-wider border border-white/15 transition-colors flex items-center justify-center gap-2"
              >
                <Edit3 className="w-3.5 h-3.5 text-mutedGold" />
                <span>Edit Details</span>
              </button>

              <button
                type="button"
                onClick={handleConfirmAndSendToWhatsApp}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-[0.15em] shadow-lg shadow-black/40 transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    <span>Confirm & Send to WhatsApp</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 bg-brandBlack-charcoal border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-mutedGold uppercase tracking-[0.25em] text-xs font-semibold">
              Clarity & Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-warmWhite/70">
              Find answers to common questions about booking lead times, travel, tastings, and dietary accommodations.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-brandBlack border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif text-lg font-bold text-warmWhite">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-mutedGold transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-warmWhite/80 leading-relaxed font-light border-t border-white/5 pt-3 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-brandBlack flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-mutedGold" />
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
