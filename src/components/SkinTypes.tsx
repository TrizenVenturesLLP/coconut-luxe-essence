
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';

type SkinTypeCardProps = {
  type: string;
  imageUrl: string;
};

const SkinTypeCard = ({ type, imageUrl }: SkinTypeCardProps) => (
  <div className="flex flex-col items-center">
    <div className="relative w-3/4 mx-auto aspect-square overflow-hidden rounded-lg mb-4">
      <img 
        src={imageUrl} 
        alt={`${type} skin type`} 
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-lg font-medium text-center font-sans">{type}</h3>
  </div>
);

const SkinTypes = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-coconut-cream">
      <div className="w-full">
        <AspectRatio ratio={isMobile ? 3/2 : 16/9} className="overflow-hidden rounded-lg">
          <img 
            src="/imgs/formula_for_every_skin_type.png" 
            alt="Skincare for every skin type" 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export default SkinTypes;
