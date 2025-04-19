
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import happy from './assests/Happy.png'

const HappySkin = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={happy}
              alt="Happy woman with glowing skin"
              className="w-full max-w-md mx-auto md:max-w-none h-auto rounded-lg shadow-sm"
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-medium font-display mb-4 sm:mb-6 md:mb-8">
              Healthy skin. Happy you.
            </h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
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
