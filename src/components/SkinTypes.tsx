
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const SkinTypes = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative w-full overflow-hidden" style={{ height: isMobile ? '350px' : '700px' }}>
      <div className="absolute inset-0">
        <img
          src="/imgs/formula_for_every_skin_type.png"
          alt="Skin types formula"
          className="w-full h-full"
          style={{ 
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default SkinTypes;
