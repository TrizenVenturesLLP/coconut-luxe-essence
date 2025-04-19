
import React from 'react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const OurStory = () => {
  const isMobile = useIsMobile();

  return (
    <section id="our-story" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-coconut-white">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-medium font-display text-center mb-6 sm:mb-8 md:mb-10">
          Our Story
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-gray-700 font-sans leading-relaxed text-base sm:text-lg">
          <p>
            <strong className="text-teal-700">Aelqemy</strong> is Coconut Powered Beauty rooted in the wisdom of nature and elevated by science.
            At the heart of our formulations is sustainably sourced coconut water—rich in electrolytes, minerals, and skin-reviving nutrients.
          </p>

          <p>
            We blend this hero ingredient with meticulously chosen plant extracts and lab-approved actives to create transformative,
            high-performance skincare. Every product is designed to nourish, brighten, and restore your skin—naturally and effectively.
          </p>

          <p className="text-lg sm:text-xl font-semibold text-teal-600 mt-6 sm:mt-8">
            We believe in circular beauty: clean formulations, ethical sourcing, and earth-friendly practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
