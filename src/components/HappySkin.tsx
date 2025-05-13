import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import happy from './assests/Happy.png';
import { Card, CardContent } from '@/components/ui/card';

const HappySkin = () => {
  const isMobile = useIsMobile();

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <Card className="p-6 md:p-10 shadow-lg border-0 bg-white">
          <CardContent className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                className="rounded-lg shadow-sm"
                style={{ width: '290px', height: '290px' }}
                src={happy}
                alt="Happy Skin"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-medium font-display">
                Healthy skin. <br></br>Happy you.
              </h2>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
                <p>Beauty begins where care meets intention.</p>
                <p>And when skin is truly loved, it starts to shine.</p>
                <p>Confidence is not just seen—it's felt, deep within.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HappySkin;
