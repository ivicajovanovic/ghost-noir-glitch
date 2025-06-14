import React from "react";
import GlowingButton from "./ui/GlowingButton";
import SectionWrapper from "./SectionWrapper";
import GradientText from "./ui/GradientText";
import TypewriterText from "./ui/TypewriterText";
import ParallaxSection from "./ui/ParallaxSection";

const HeroSection: React.FC = () => {
  const typewriterTexts = [
    "Digital Experiences",
    "Web3 Solutions", 
    "AI-Powered Apps",
    "Immersive Interfaces",
    "Future-Ready Platforms"
  ];

  return (
    <SectionWrapper 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center !pt-0 !pb-0 bg-gradient-to-br from-ghost-noir via-purple-950/30 to-cyan-950/20 relative overflow-hidden"
    >
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,165,0,0.1),transparent_50%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <ParallaxSection speed={0.3} className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Floating elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="space-y-8">
          {/* Main heading with enhanced typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight">
            <div className="mb-4">
              <GradientText gradient="rainbow" className="animate-gradient-x">
                Innovate.
              </GradientText>
            </div>
            <div className="mb-4">
              Design.
            </div>
            <div>
              <GradientText gradient="cyber">
                Inspire.
              </GradientText>
            </div>
          </h1>

          {/* Dynamic subtitle with typewriter effect */}
          <div className="text-xl md:text-3xl lg:text-4xl text-ghost-noir-text/90 font-light max-w-4xl mx-auto">
            <span className="block mb-2">Crafting Next-Generation</span>
            <TypewriterText 
              texts={typewriterTexts}
              className="text-primary font-semibold"
              speed={80}
              deleteSpeed={40}
              delayBetween={2500}
            />
          </div>

          {/* Enhanced description */}
          <p className="text-lg md:text-xl lg:text-2xl text-ghost-noir-text/70 max-w-3xl mx-auto leading-relaxed font-light">
            Where cutting-edge technology meets visionary design. We transform ideas into 
            <span className="text-primary font-medium"> immersive digital realities</span> that 
            captivate, engage, and drive the future forward.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <GlowingButton 
              variant="primary" 
              glowIntensity="strong" 
              className="text-lg px-10 py-4 group relative overflow-hidden"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">Explore Our Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </GlowingButton>
            
            <GlowingButton 
              variant="secondary" 
              glowIntensity="medium"
              className="text-lg px-10 py-4 border border-secondary/30 bg-transparent hover:bg-secondary/10"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Journey
            </GlowingButton>
          </div>

          {/* Stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Projects Delivered", icon: "🚀" },
              { number: "50+", label: "Happy Clients", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🛡️" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-ghost-noir-text/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-xs text-ghost-noir-text/60 uppercase tracking-wider">Scroll to Explore</span>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;