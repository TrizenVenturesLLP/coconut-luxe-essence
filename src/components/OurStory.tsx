
import React from 'react';
import { Button } from './ui/button';

const OurStory = () => {
  return (
    <section className="py-20 px-6 bg-coconut-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8">AELQEMY Is Nature-Powered Beauty</h2>
        
        <div className="space-y-6 mb-10 font-sans">
          <p className="text-gray-700 leading-relaxed text-lg">
          Aelqemy is Coconut Powered Beauty rooted in the wisdom of nature and elevated by science. At the heart of our formulations is sustainably sourced coconut water-rich in electrolytes, minerals, and skin-reviving nutrients.
          </p>
          
          <p className="text-gray-700 leading-relaxed text-lg">
          We blend this hero ingredient with meticulously chosen plant extracts and lab-approved actives to create transformative, high-performance skincare. Every product is designed to nourish, brighten, and restore your skin-naturally and effectively.
          </p>
          
          <p className="text-xl font-medium text-teal-600 mt-10">
          We believe in circular beauty: clean formulations, ethical sourcing, and earth-friendly practices.
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
