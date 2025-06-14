
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasFloatingCard?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className, id, hasFloatingCard = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'section-padding relative overflow-hidden',
        {'opacity-0 transform translate-y-5': !isVisible},
        {'animate-fade-in-up': isVisible},
        className
      )}
    >
      <div className={cn("container mx-auto relative z-10", hasFloatingCard ? "floating-card p-8 md:p-12 lg:p-16" : "")}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
