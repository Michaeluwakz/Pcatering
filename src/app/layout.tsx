import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { BRAND } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Perleco Catering | Luxury Event Catering & Private Dining | Manchester",
    template: "%s | Perleco Catering",
  },
  description:
    "Perleco Catering delivers exceptional catering experiences, sophisticated canapés, corporate event catering, private dining, and gourmet takeaway orders across Manchester and worldwide.",
  keywords: [
    "Perleco Catering",
    "Manchester catering",
    "luxury event catering Manchester",
    "private dining Manchester",
    "canapes Manchester",
    "corporate catering Manchester",
    "wedding catering Manchester",
    "gourmet takeaway catering",
    "private chef Manchester"
  ],
  authors: [{ name: "Perleco Catering" }],
  creator: "Perleco Catering",
  publisher: "Perleco Catering",
  metadataBase: new URL("https://perlecocatering.com"),
  openGraph: {
    title: "Perleco Catering | Exceptional Catering. Unforgettable Experiences.",
    description:
      "Over 10 years of culinary excellence. Luxury event catering, sophisticated canapés, and private dining in Manchester and worldwide.",
    url: "https://perlecocatering.com",
    siteName: "Perleco Catering",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Perleco Catering Fine Dining & Event Catering",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perleco Catering | Luxury Catering Manchester",
    description: "Exceptional catering, canapés and private dining experiences across Manchester and worldwide.",
    images: ["https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: BRAND.name,
    legalName: BRAND.legalName,
    description:
      "Perleco Catering specialises in elegant catering experiences, event catering, sophisticated canapés, private dining and takeaway orders.",
    url: "https://perlecocatering.com",
    telephone: BRAND.phoneInternational,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressCountry: "GB",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Manchester",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
    ],
    servesCuisine: "Modern European, Fine Dining, Canapés, Bespoke Catering",
    priceRange: "££££",
    openingHours: "Mo-Su 08:00-21:00",
    sameAs: [BRAND.instagramUrl],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brandBlack text-warmWhite antialiased selection:bg-burgundy selection:text-warmWhite">
        <Navbar />
        <main className="flex-grow pt-[104px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
