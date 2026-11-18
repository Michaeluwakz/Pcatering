import React from "react";
import { Hero } from "@/components/home/Hero";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ServicesPreview />
      <FeaturedGallery />
      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
