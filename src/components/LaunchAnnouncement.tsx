
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import after from './assests/afterstory.png';

const LaunchAnnouncement = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-16 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full">
          <img
            src={after}
            alt="Launch announcement"
            className="w-full h-auto object-cover rounded-lg" // Added rounded-lg
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchAnnouncement;

