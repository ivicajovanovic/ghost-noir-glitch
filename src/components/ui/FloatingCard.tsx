import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'subtle' | 'medium' | 'strong';
}

const FloatingCard: React.FC<FloatingCardProps> = ({ 
  children, 
  className, 
  intensity = 'medium' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / (intensity === 'subtle' ? 20 : intensity === 'medium' ? 10 : 5);
      const rotateY = (centerX - x) / (intensity === 'subtle' ? 20 : intensity === 'medium' ? 10 : 5);
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'floating-card transition-all duration-300 ease-out transform-gpu',
        'hover:shadow-2xl hover:shadow-primary/20',
        'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-primary/10 before:via-transparent before:to-secondary/10 before:opacity-0 before:transition-opacity before:duration-300',
        'hover:before:opacity-100',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;