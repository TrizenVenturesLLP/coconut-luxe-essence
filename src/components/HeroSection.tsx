import React from 'react';
import { ChevronDown } from 'lucide-react';
import hero from './assests/hero.png';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full mt-4 py-0 md:py-6 lg:py-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={hero}
          alt="Coconut trees in nature"
          className={`w-full h-full ${isMobile ? 'object-contain' : 'object-cover'} object-center`}
        />
      </div>

      {/* Content container with dynamic height */}
      <div className={`relative z-10 ${isMobile ? 'min-h-[350px]' : 'min-h-[500px] md:min-h-[700px]'}`}>
        {/* Add content like text/buttons here */}
      </div>
    </section>
  );
};

export default HeroSection;
