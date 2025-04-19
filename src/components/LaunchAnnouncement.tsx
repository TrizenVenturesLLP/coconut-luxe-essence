
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import after from './assests/afterstory.png';

const LaunchAnnouncement = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full">
          <img
            src={after}
            alt="Launch announcement"
            className="w-full h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
