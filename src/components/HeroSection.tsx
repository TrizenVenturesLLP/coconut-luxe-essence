
import React from 'react';
import { ChevronDown } from 'lucide-react';
import hero from './assests/hero_section.png';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="relative w-full overflow-hidden" 
      style={{ 
        height: isMobile ? 'calc(100vh - 20px)' : 'calc(100vh - 30px)', 
        marginTop: isMobile ? '54px' : '64px' 
      }}
    >
      {/* Image Background - No transparency overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={hero}
          alt="Natural coconut tree landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll Indicator - Keeping only this without text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <button 
          onClick={scrollToContent}
          className="absolute bottom-6 sm:bottom-10 flex flex-col items-center animate-fade-in opacity-0 cursor-pointer text-white font-sans"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <ChevronDown className="animate-scroll-down" size={isMobile ? 16 : 20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
