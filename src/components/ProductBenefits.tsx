
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import crueltyFree from './crueltyfree.png';
import parabenfree from './assests/parabenfree.png';
import vegan from './assests/vegan.png';
import slsfree from './assests/slsfree.png'

type BenefitItemProps = {
  imageSrc: string;
  title: string;
};

const BenefitItem = ({ imageSrc, title }: BenefitItemProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-2 sm:mb-3">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg" // Added rounded-lg
        />
      </div>
      <h3 className="text-sm sm:text-lg font-medium font-sans">{title}</h3>
    </div>
  );
};

const ProductBenefits = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-2 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-center mb-8 sm:mb-10">
          Naturally effective skin care, without the rubbish
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-3 justify-items-center">
          <BenefitItem 
            imageSrc={crueltyFree}
            title="Cruelty Free"
          />
          
          <BenefitItem 
            imageSrc={vegan}
            title="Vegan"
          />
          
          <BenefitItem 
            imageSrc={parabenfree}
            title="Paraben Free"
          />
          
          <BenefitItem 
            imageSrc={slsfree}
            title="SLS Free"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;

