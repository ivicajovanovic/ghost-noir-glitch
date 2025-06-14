import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      {/* Other sections will be added here: Gallery, Tech Stack, Testimonials etc. */}
    </>
  );
};

export default IndexPage;
