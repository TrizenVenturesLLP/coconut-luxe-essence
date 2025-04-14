
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import after from './assests/after_story.png';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LaunchAnnouncement = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative w-full overflow-hidden" style={{ height: isMobile ? '300px' : '500px' }}>
      {/* Nature/Coconut Tree Background Image */}
      <div className="absolute inset-0">
        <img
          src={after}
          alt="Coconut trees in nature"
          className="w-full h-full"
          style={{ 
            // objectFit: 'contain',
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
