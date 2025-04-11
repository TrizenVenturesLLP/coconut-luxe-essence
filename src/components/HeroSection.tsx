
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 30px)', marginTop: '64px' }}>
      {/* Image Background - No transparency overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/public/imgs/hero_section.png"
          alt="Natural coconut tree landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Scroll Indicator - Keeping only this without text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 flex flex-col items-center animate-fade-in opacity-0 cursor-pointer text-white font-sans"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <ChevronDown className="animate-scroll-down" size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
