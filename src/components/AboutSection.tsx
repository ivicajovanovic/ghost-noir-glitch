
import React from "react";
import SectionWrapper from "./SectionWrapper";

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-ghost-noir/80" hasFloatingCard>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Ghost Noir</span>
          </h2>
          <p className="text-lg text-ghost-noir-text/80 mb-4 leading-relaxed">
            At Ghost Noir Studio, we are more than just designers; we are digital architects, visual storytellers, and innovation partners.
            Our philosophy is rooted in the elegant interplay of minimalist design and the bold spirit of vaporwave aesthetics, all refined through a modern, user-centric lens.
          </p>
          <p className="text-lg text-ghost-noir-text/80 mb-4 leading-relaxed">
            We believe in the power of clean lines, airy spacing, and intuitive interfaces. Inspired by the sleekness of modern desktop UI and the forward-thinking principles of events like google.io, we create digital products that are not only beautiful but also deeply engaging and performant.
          </p>
          <p className="text-lg text-ghost-noir-text/80 leading-relaxed">
            Our mission is to transform your vision into a tangible digital reality that resonates with your audience and elevates your brand.
          </p>
        </div>
        <div className="hidden md:block relative aspect-square rounded-xl overflow-hidden shadow-2xl shadow-black/50">
          {/* Placeholder for an abstract background animation or visual */}
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" 
            alt="Abstract technology visual" 
            className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-500"
          />
           <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-transparent"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
