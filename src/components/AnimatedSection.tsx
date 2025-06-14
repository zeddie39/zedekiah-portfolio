
import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-from-left' | 'slide-in-from-right' | 'scale-in';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', animation = 'fade-in' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return 'opacity-0 translate-y-8';
        case 'slide-in-from-left':
          return 'opacity-0 -translate-x-12';
        case 'slide-in-from-right':
          return 'opacity-0 translate-x-12';
        case 'scale-in':
          return 'opacity-0 scale-90';
        default:
          return 'opacity-0';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div ref={sectionRef} className={`transition-all duration-[1500ms] ease-out ${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
