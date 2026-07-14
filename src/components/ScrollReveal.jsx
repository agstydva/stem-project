import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  variant = 'fade-up', 
  delay = 0, 
  duration = 800, 
  threshold = 0.1,
  className = '' 
}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'fade-up':
        return isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case 'fade-down':
        return isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12';
      case 'fade-left':
        return isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case 'fade-right':
        return isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case 'zoom-in':
        return isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      case 'zoom-out':
        return isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-105';
      default:
        return isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
