import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'rainbow' | 'cyber';
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className, 
  gradient = 'primary' 
}) => {
  const gradients = {
    primary: 'bg-gradient-to-r from-ghost-noir-neon-cyan via-primary to-ghost-noir-neon-magenta',
    secondary: 'bg-gradient-to-r from-ghost-noir-neon-magenta via-ghost-noir-neon-orange to-ghost-noir-neon-violet',
    rainbow: 'bg-gradient-to-r from-ghost-noir-neon-cyan via-ghost-noir-neon-magenta via-ghost-noir-neon-orange to-ghost-noir-neon-violet',
    cyber: 'bg-gradient-to-r from-green-400 via-ghost-noir-neon-cyan to-blue-500'
  };

  return (
    <span 
      className={cn(
        'bg-clip-text text-transparent animate-gradient-x',
        gradients[gradient],
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;