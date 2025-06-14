
import React from "react";
import SectionWrapper from "./SectionWrapper";
import GlowingButton from "./ui/GlowingButton";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, imageUrl, tags }) => (
  <div className="floating-card p-0 overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-neon-cyan/30">
    <div className="aspect-video overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-primary group-hover:text-ghost-noir-neon-cyan transition-colors">{title}</h3>
      <p className="text-ghost-noir-text/70 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <a href="#" className="text-sm font-semibold text-ghost-noir-neon-cyan hover:underline">View Project &rarr;</a>
    </div>
  </div>
);

const PortfolioSection: React.FC = () => {
  const portfolioItems = [
    {
      title: "Project Alpha",
      description: "A cutting-edge web application for a leading tech startup.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["Web App", "UI/UX", "Branding"],
    },
    {
      title: "Cyber Dreams",
      description: "Immersive VR experience exploring futuristic cityscapes.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["VR", "3D Art", "Interactive"],
    },
    {
      title: "Noir Interface",
      description: "Sleek mobile application UI for a lifestyle brand.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["Mobile App", "UI Design", "Minimalism"],
    },
  ];

  return (
    <SectionWrapper id="portfolio" className="bg-ghost-noir">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Our <span className="text-primary">Creations</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </div>
      <div className="text-center mt-12">
        <GlowingButton variant="secondary" glowIntensity="soft">
            View All Projects
        </GlowingButton>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
