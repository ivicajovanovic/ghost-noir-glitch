import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-background/20 backdrop-blur-sm z-50">
      <div
        className={cn(
          'h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out',
          'shadow-lg shadow-primary/50'
        )}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;