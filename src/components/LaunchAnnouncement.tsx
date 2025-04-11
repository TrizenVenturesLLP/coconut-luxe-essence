
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import after from './assests/after_story.png';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LaunchAnnouncement = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-coconut-cream">
      <div className="w-full">
        <AspectRatio ratio={isMobile ? 3/2 : 16/9} className="overflow-hidden rounded-lg">
          <img
            src={after}
            alt="Coconut trees in nature"
            className="w-full h-full object-cover"
            style={{ objectPosition: isMobile ? 'center' : 'center center' }}
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
