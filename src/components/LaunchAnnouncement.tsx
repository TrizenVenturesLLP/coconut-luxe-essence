
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import after from './assests/afterstory.png';

const LaunchAnnouncement = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative w-full overflow-hidden" style={{ height: isMobile ? '300px' : '500px' }}>
      <div className="absolute inset-0">
        <img
          src={after}
          alt="Launch announcement"
          className="w-full h-full"
          style={{ 
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
