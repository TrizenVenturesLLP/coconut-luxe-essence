
import React from 'react';
import { ChevronDown } from 'lucide-react';
import hero from './assests/hero.png';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full mt-4 py-4 md:py-8 lg:py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={hero}
          alt="Coconut trees in nature"
          className="w-full h-full object-cover object-center rounded-lg"
        />
      </div>

      {/* Content container with responsive height */}
      <div className="relative z-10 min-h-[350px] md:min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-center">
        {/* Add scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
