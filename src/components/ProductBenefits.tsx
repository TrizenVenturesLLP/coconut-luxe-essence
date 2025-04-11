
import React from 'react';

type BenefitItemProps = {
  imageSrc: string;
  title: string;
};

const BenefitItem = ({ imageSrc, title }: BenefitItemProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-3">
      <img src={imageSrc} alt={title} className="w-16 h-16 object-contain" />
    </div>
    <h3 className="text-lg font-medium font-sans">{title}</h3>
  </div>
);

const ProductBenefits = () => {
  return (
    <section className="py-14 px-6 bg-coconut-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-10">
          Naturally effective skin care, without the rubbish
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-3 justify-items-center">
          <BenefitItem 
            imageSrc="/public/imgs/crueltyfree.png"
            title="Cruelty Free"
          />
          
          <BenefitItem 
            imageSrc="/public/imgs/vegan.png"
            title="Vegan"
          />
          
          <BenefitItem 
            imageSrc="/public/imgs/parabenfree.png"
            title="Paraben Free"
          />
          
          <BenefitItem 
            imageSrc="/public/imgs/slsfree.png"
            title="SLS Free"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
