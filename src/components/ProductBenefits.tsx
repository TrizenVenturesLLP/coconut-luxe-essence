
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
  return (
    <div className="flex flex-col items-center text-center min-w-[100px]">
      <div className="mb-2 sm:mb-3 w-full max-w-[64px] sm:max-w-[80px]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="aspect-square w-full object-contain rounded-lg" 
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg font-medium font-sans">{title}</h3>
    </div>
  );
};


const ProductBenefits = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full py-3 md:py-4 lg:py-8 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-medium font-display text-center mb-8 sm:mb-10">
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

