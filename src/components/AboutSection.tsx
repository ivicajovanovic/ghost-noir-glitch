import React from "react";
import SectionWrapper from "./SectionWrapper";
import FloatingCard from "./ui/FloatingCard";
import GradientText from "./ui/GradientText";
import ParallaxSection from "./ui/ParallaxSection";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: "🎨",
      title: "Design Excellence",
      description: "Pixel-perfect interfaces that blend aesthetics with functionality"
    },
    {
      icon: "⚡",
      title: "Performance First",
      description: "Lightning-fast applications optimized for the modern web"
    },
    {
      icon: "🔮",
      title: "Future-Ready",
      description: "Built with tomorrow's technologies, available today"
    },
    {
      icon: "🛡️",
      title: "Security Focused",
      description: "Enterprise-grade security woven into every line of code"
    }
  ];

  return (
    <SectionWrapper id="about" className="bg-gradient-to-br from-ghost-noir/95 via-purple-950/20 to-ghost-noir/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <ParallaxSection speed={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <GradientText gradient="primary">Ghost Noir</GradientText>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-ghost-noir-text/80 max-w-3xl mx-auto leading-relaxed">
              We are the architects of tomorrow's digital landscape
            </p>
          </div>
        </ParallaxSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FloatingCard className="p-8 md:p-12 space-y-8" intensity="medium">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                Redefining Digital Excellence
              </h3>
              
              <p className="text-lg text-ghost-noir-text/80 leading-relaxed">
                At Ghost Noir Studio, we transcend traditional boundaries between design and technology. 
                Our philosophy merges the elegance of minimalist aesthetics with the bold innovation 
                of Web3 and AI-driven experiences.
              </p>
              
              <p className="text-lg text-ghost-noir-text/80 leading-relaxed">
                We believe in creating digital products that don't just meet today's needs, but 
                anticipate tomorrow's possibilities. Every pixel, every interaction, every line of 
                code is crafted with precision and purpose.
              </p>

              <div className="pt-6">
                <h4 className="text-xl font-semibold text-secondary mb-4">Our Mission</h4>
                <p className="text-ghost-noir-text/70 leading-relaxed">
                  To transform visionary concepts into tangible digital realities that resonate 
                  with users and elevate brands to new heights of engagement and success.
                </p>
              </div>
            </div>
          </FloatingCard>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FloatingCard 
                key={index} 
                className="p-6 text-center group hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-300"
                intensity="subtle"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h4>
                <p className="text-ghost-noir-text/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <ParallaxSection speed={0.1} className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
              { value: "99%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-ghost-noir-text/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ParallaxSection>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;