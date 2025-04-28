import React from 'react';
import hero from './assests/hero.png';

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full">
        <img
          src={hero}
          alt="Hero Banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
