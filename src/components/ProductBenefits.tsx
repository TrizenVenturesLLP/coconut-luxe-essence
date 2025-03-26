
import React from 'react';
import { Sprout, Leaf, Heart } from 'lucide-react';

type BenefitItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
};

const BenefitItem = ({ icon, title, description, iconColor = 'text-coconut-accent' }: BenefitItemProps) => (
  <div className="flex flex-col items-center text-center">
    <div className={`mb-4 ${iconColor}`}>
      {icon}
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

const ProductBenefits = () => {
  return (
    <section className="py-20 px-6 bg-coconut-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-16">
          Naturally effective body care, without the rubbish
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 lg:gap-8">
          <BenefitItem 
            icon={<Heart size={42} strokeWidth={1.5} />}
            title="Cruelty Free."
            description="Rigorously tried, tested and customer approved."
            iconColor="text-pink-500"
          />
          
          <BenefitItem 
            icon={<Leaf size={42} strokeWidth={1.5} />}
            title="Vegan."
            description="Unique plastic-free, compostable refills."
            iconColor="text-green-500"
          />
          
          <BenefitItem 
            icon={<Sprout size={42} strokeWidth={1.5} />}
            title="Plant powered."
            description="Premium, natural ingredients - Paraben & Phthalate free"
            iconColor="text-green-500"
          />
          
          <BenefitItem 
            icon={<Heart size={42} strokeWidth={1.5} />}
            title="Sensitive Skin Friendly."
            description="To your door, or find us in store."
            iconColor="text-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
