
import React from "react";
import GlowingButton from "./ui/GlowingButton";
import SectionWrapper from "./SectionWrapper";

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="home" className="min-h-[calc(100vh-88px)] flex items-center justify-center text-center !pt-0 !pb-0 bg-gradient-to-br from-ghost-noir via-purple-950/30 to-cyan-950/20">
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"52\" height=\"26\" viewBox=\"0 0 52 26\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-ghost-noir-neon-cyan via-ghost-noir-neon-magenta to-ghost-noir-neon-orange">
            Innovate.
          </span>{" "}
          Design.
          <span className="block">Inspire.</span>
        </h1>
        <p className="text-xl md:text-2xl text-ghost-noir-text/80 mb-8 md:mb-12 max-w-xl mx-auto">
          Ghost Noir Studio crafts visionary digital experiences that captivate and convert.
          We blend artistry with technology to forge the future of design.
        </p>
        <GlowingButton variant="primary" glowIntensity="medium" onClick={() => {
          const portfolioSection = document.getElementById('portfolio');
          if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }}>
          Explore Our Work
        </GlowingButton>
      </div>
      {/* Placeholder for animated intro graphics or particles */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-8 w-8"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
