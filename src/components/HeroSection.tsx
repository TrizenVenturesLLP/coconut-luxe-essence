import React from 'react';
import { ChevronDown } from 'lucide-react';
import hero from './assests/hero_section.png';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full overflow-hidden" style={{ height: isMobile ? '350px' : '700px' }}>
      {/* Nature/Coconut Tree Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Coconut trees in nature"
          className="w-full h-full"
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
