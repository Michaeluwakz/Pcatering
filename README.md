# Perleco Catering — Official Corporate Website

A modern, luxury, fully responsive corporate website for **Perleco Catering**, an established catering and events brand based in Manchester, UK with over a decade of culinary excellence.

---

## 💎 Brand Identity & Visual System

- **Deep Burgundy:** `#720D20`
- **Rich Red:** `#A71930`
- **Obsidian Black:** `#101010`
- **Charcoal:** `#1B1B1B`
- **Warm White:** `#FAF7F4`
- **Muted Gold:** `#C5A46D` (subtle accent)

### Typography
- **Headings & Serif Accents:** Cormorant Garamond / Playfair Display / Cinzel
- **Body & Technical Copy:** Plus Jakarta Sans / Inter

---

## 🏛️ Website Structure & Pages

1. **Home (`/`)**
   - High-impact luxury hero with dynamic imagery, brand emblem, and dual CTAs (`ENQUIRE ABOUT YOUR EVENT`, `EXPLORE OUR SERVICES`).
   - Experience section: *"Over a Decade of Culinary Excellence"* on high-contrast Warm White with dual imagery and 10+ year seal.
   - Core Services Preview: Event Catering, Elegant Canapés, Private Dining, Takeaway Orders.
   - Featured Food Gallery with interactive lightbox previews.
   - Why Choose Perleco (5 pillars from brief + worldwide reach).
   - High-conversion CTA banner.

2. **About Us (`/about`)**
   - Company background, 10+ years experience, and passion for hospitality.
   - 4 Pillars of Excellence: Artistry in Presentation, Uncompromising Quality, Corporate Credibility, Worldwide Reach.
   - Transparent client placeholder notes for executive chef/founder bios and official awards.

3. **Our Services (`/services`)**
   - Dedicated sections for all 4 core service lines:
     - **Event Catering:** Corporate galas, weddings, civil partnerships, brand activations.
     - **Elegant Canapés:** Sculptural savoury and dessert canapés for champagne receptions.
     - **Private Dining:** Bespoke in-residence multi-course tasting menus with private chef.
     - **Takeaway Orders & Luxury Platters:** Gourmet corporate lunch boxes and grazing boards.
   - What's included, recommended occasions, and bespoke enquiry buttons.

4. **Gallery (`/gallery`)**
   - Responsive masonry/grid layout with category filters (*All, Canapés, Event Catering, Private Dining, Table & Decor, Takeaway & Platters*).
   - Full-screen interactive Lightbox with tag badges, captions, and direct *"Enquire for This Concept"* action.
   - Instagram Integration callout linking to `@perlecocatering`.

5. **Booking & Enquiry (`/booking`)**
   - Complete event enquiry form with validation for:
     - Full name
     - Email address
     - Phone number
     - Type of event
     - Event date
     - Event location
     - Number of guests
     - Catering service required
     - Dietary preferences & event vision
   - Backend API (`/api/enquiry`) with structured logging and email dispatch preparation.
   - Direct telephone hotline (`07947832818`) with click-to-call.
   - Direct WhatsApp integration (`https://wa.me/447947832818`).
   - Booking process walkthrough and FAQ accordion.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS with custom luxury tokens
- **Icons:** Lucide React
- **Animations:** CSS transitions, radial lighting effects, and subtle keyframes
- **SEO & Metadata:** Schema.org `FoodEstablishment` / `CateringService` JSON-LD, OpenGraph, Twitter Cards

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# -> Opens http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start
```

---

## 📸 Sourcing Authentic Client Photography

To swap the placeholder imagery with authentic client photography:
1. Place client images in `/public/images/gallery/` or configure remote patterns in `next.config.mjs`.
2. Update the image paths in `src/data/cateringData.ts`.
3. Social assets can be linked directly from `@perleco.perle` on Instagram.

---

## 📞 Contact Information

- **Telephone:** 07947832818
- **WhatsApp:** `+44 7947 832818` (`https://wa.me/447947832818`)
- **Location:** Manchester, United Kingdom (Worldwide bookings available)
- **Instagram:** `@perleco.perle` (`https://www.instagram.com/perleco.perle/`)
