
import React from 'react';
import { Button } from './ui/button';

const OurStory = () => {
  return (
    <section className="py-20 px-6 bg-coconut-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8">AELQEMY Is Nature-Powered Beauty</h2>
        
        <div className="space-y-6 mb-10 font-sans">
          <p className="text-gray-700 leading-relaxed text-lg">
            AELQEMY is a skincare brand dedicated to blending ancient wisdom with modern science. Our 
            rich, plant-derived ingredients have been nourishing and rejuvenating skin for centuries.
            We work in harmony with nature to hand-select our ingredients before using science to formulate the most 
            effective natural combinations available.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            The name AELQEMY draws inspiration from ancient alchemists who sought to transform basic materials into 
            something extraordinary. Similarly, we transform pure, natural ingredients into effective skincare solutions 
            that work in harmony with your skin's natural processes.
          </p>
          
          <p className="text-xl font-medium text-teal-600 mt-10">
            Beauty by nature. Powered by purpose.
          </p>
        </div>
        
        <Button className="mt-6 bg-teal-600 hover:bg-teal-700 font-sans">
          Learn More About Our Mission
        </Button>
      </div>
    </section>
  );
};

export default OurStory;
