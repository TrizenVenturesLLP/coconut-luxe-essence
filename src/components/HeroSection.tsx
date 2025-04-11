
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/public/imgs/hero_section.png"
          alt="Natural coconut tree landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-center">
          <span className="block text-3xl md:text-4xl lg:text-5xl mb-2 animate-fade-in opacity-0 font-display" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Pure. Simple. Sustainable.
          </span>
          <span className="block text-lg md:text-xl lg:text-2xl font-light animate-fade-in opacity-0 font-sans" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Skincare powered by nature.
          </span>
        </h1>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 flex flex-col items-center animate-fade-in opacity-0 cursor-pointer font-sans"
          style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
        >
          <span className="text-xs font-light mb-2">Discover More</span>
          <ChevronDown className="animate-scroll-down" size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
