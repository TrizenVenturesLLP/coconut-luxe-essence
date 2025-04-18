import React from 'react';
import { ChevronDown } from 'lucide-react';
import hero from './assests/hero.png';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full mt-8 overflow-hidden" style={{ height: isMobile ? '350px' : '700px' }}>
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Coconut trees in nature"
          className="w-full h-full"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
