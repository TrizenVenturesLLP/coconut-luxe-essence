
import React from 'react';
import { Sprout, Leaf, Heart } from 'lucide-react';

type BenefitItemProps = {
  icon: React.ReactNode;
  title: string;
  iconColor?: string;
};

const BenefitItem = ({ icon, title, iconColor = 'text-coconut-accent' }: BenefitItemProps) => (
  <div className="flex flex-col items-center text-center">
    <div className={`mb-3 ${iconColor}`}>
      {icon}
    </div>
    <h3 className="text-xl font-medium">{title}</h3>
  </div>
);

const ProductBenefits = () => {
  return (
    <section className="py-16 px-6 bg-coconut-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-12">
          Naturally effective body care, without the rubbish
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 justify-items-center">
          <BenefitItem 
            icon={<Heart size={42} strokeWidth={1.5} />}
            title="Cruelty Free"
            iconColor="text-pink-500"
          />
          
          <BenefitItem 
            icon={<Leaf size={42} strokeWidth={1.5} />}
            title="Vegan"
            iconColor="text-green-500"
          />
          
          <BenefitItem 
            icon={<Sprout size={42} strokeWidth={1.5} />}
            title="Plant powered"
            iconColor="text-green-500"
          />
          
          <BenefitItem 
            icon={<Heart size={42} strokeWidth={1.5} />}
            title="Sensitive Skin Friendly"
            iconColor="text-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
