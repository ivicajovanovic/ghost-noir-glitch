import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import GlowingButton from "./ui/GlowingButton";
import FloatingCard from "./ui/FloatingCard";
import GradientText from "./ui/GradientText";

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: string;
  featured?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  category,
  featured = false 
}) => (
  <FloatingCard 
    className={`p-0 overflow-hidden group transform transition-all duration-500 hover:scale-105 ${
      featured ? 'md:col-span-2 md:row-span-2' : ''
    }`}
    intensity="medium"
  >
    <div className="relative overflow-hidden">
      <div className={`${featured ? 'aspect-[16/10]' : 'aspect-video'} overflow-hidden`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ghost-noir via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-primary/20 backdrop-blur-md text-primary text-xs font-semibold rounded-full border border-primary/30">
          {category}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ghost-noir/90 via-ghost-noir/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
        <div className="p-6 w-full">
          <GlowingButton 
            variant="primary" 
            glowIntensity="medium"
            className="w-full"
          >
            View Project
          </GlowingButton>
        </div>
      </div>
    </div>
    
    <div className="p-6 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-ghost-noir-text/70 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </FloatingCard>
);

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web3', 'AI/ML', 'Mobile', 'Enterprise'];
  
  const portfolioItems = [
    {
      title: "DeFi Trading Platform",
      description: "Next-generation decentralized trading platform with AI-powered analytics and real-time market insights.",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800",
      tags: ["Web3", "DeFi", "React", "Blockchain"],
      category: "Web3",
      featured: true
    },
    {
      title: "AI Content Generator",
      description: "Revolutionary AI-powered content creation platform with advanced natural language processing.",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["AI/ML", "NLP", "Python", "React"],
      category: "AI/ML"
    },
    {
      title: "Metaverse Social Hub",
      description: "Immersive 3D social platform connecting users across virtual worlds and realities.",
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["VR", "3D", "WebGL", "Social"],
      category: "Web3"
    },
    {
      title: "Smart City Dashboard",
      description: "Comprehensive IoT dashboard for smart city management with real-time data visualization.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["IoT", "Dashboard", "Analytics", "Smart City"],
      category: "Enterprise"
    },
    {
      title: "Neural Health App",
      description: "AI-driven health monitoring application with predictive analytics and personalized recommendations.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["Mobile", "Health", "AI", "React Native"],
      category: "Mobile"
    },
    {
      title: "Quantum Computing Interface",
      description: "Intuitive interface for quantum computing operations with advanced visualization capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      tags: ["Quantum", "Visualization", "Research", "Interface"],
      category: "Enterprise"
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <SectionWrapper id="portfolio" className="bg-gradient-to-br from-ghost-noir via-purple-950/10 to-ghost-noir relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Our <GradientText gradient="rainbow">Creations</GradientText>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <p className="text-xl text-ghost-noir-text/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge digital experiences that push the boundaries of what's possible
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-ghost-noir shadow-lg shadow-primary/30'
                  : 'bg-ghost-noir-text/10 text-ghost-noir-text/70 hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={`${item.title}-${index}`} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <GlowingButton 
            variant="secondary" 
            glowIntensity="medium"
            className="text-lg px-10 py-4"
          >
            View All Projects
          </GlowingButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;