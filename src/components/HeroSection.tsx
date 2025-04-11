import React from 'react';
import { ChevronDown } from 'lucide-react';
import hero from './assests/hero_section.png';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      className="relative w-full py-10 sm:py-16 px-4 sm:px-6"
      style={{ 
        marginTop: isMobile ? '54px' : '64px' 
      }}
    >
      <div className="w-full">
        <AspectRatio ratio={isMobile ? 4/3 : 16/9} className="overflow-hidden rounded-lg">
          <img
            src={hero}
            alt="Natural coconut tree landscape"
            className="w-full h-full object-cover"
            style={{ objectPosition: isMobile ? 'center' : 'center bottom' }}
          />
          
          {/* Scroll Indicator - Keeping only this without text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button 
              onClick={scrollToContent}
              className="absolute bottom-6 sm:bottom-10 flex flex-col items-center animate-fade-in opacity-0 cursor-pointer text-white font-sans"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <ChevronDown className="animate-scroll-down" size={isMobile ? 16 : 20} />
            </button>
          </div>
        </AspectRatio>
      </div>
    </section>
  );
};

export default HeroSection;
