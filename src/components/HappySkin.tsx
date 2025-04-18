
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import happy from './assests/Happy.png'

const HappySkin = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-3 md:py-6 lg:py-8 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={happy}
              alt="Happy woman with glowing skin"
              className="w-full h-auto rounded-lg" // Added rounded-lg
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display">
              Healthy skin. Happy you.
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>Beauty begins where care meets intention.</p>
              <p>And when skin is truly loved, it starts to shine.</p>
              <p>Confidence is not just seen—it's felt, deep within.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappySkin;

