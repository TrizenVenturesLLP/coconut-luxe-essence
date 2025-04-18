
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import after from './assests/afterstory.png';

const LaunchAnnouncement = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative w-full overflow-hidden h-[200px] md:h-[600px]">
      <div className="absolute inset-0">
        <img
          src={after}
          alt="Launch announcement"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
