
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';

type SkinTypeCardProps = {
  type: string;
  imageUrl: string;
};

// const SkinTypeCard = ({ type, imageUrl }: SkinTypeCardProps) => (
//   <div className="flex flex-col items-center">
//     <div className="relative w-3/4 mx-auto aspect-square overflow-hidden rounded-lg mb-4">
//       <img 
//         src={imageUrl} 
//         alt={`${type} skin type`} 
//         className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//       />
//     </div>
//     <h3 className="text-lg font-medium text-center font-sans">{type}</h3>
//   </div> /imgs/formula_for_every_skin_type.png
// );

const SkinTypes = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative w-full overflow-hidden" style={{ height: isMobile ? '350px' : '700px' }}>
      {/* Nature/Coconut Tree Background Image */}
      <div className="absolute inset-0">
        <img
          src="/imgs/formula_for_every_skin_type.png"
          alt="Coconut trees in nature"
          className="w-full h-full"
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center center'
          }}
        />
      </div>
    </section>
  );
};

export default SkinTypes;
