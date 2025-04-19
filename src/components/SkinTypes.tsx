
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SkinTypes = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full overflow-hidden rounded-lg">
          <AspectRatio ratio={isMobile ? 3/2 : 16/9}>
            <img
              src="/imgs/formula_for_every_skin_type.png"
              alt="Skin types formula"
              className="w-full h-full object-cover rounded-lg"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default SkinTypes;
