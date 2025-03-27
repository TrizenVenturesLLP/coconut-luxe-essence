
import React from 'react';

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
  const skinTypes = [
    { 
      type: "Dry", 
      imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    { 
      type: "Oily", 
      imageUrl: "https://images.unsplash.com/photo-1614159102922-8b67a39d6124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    { 
      type: "Sensitive", 
      imageUrl: "https://images.unsplash.com/photo-1591130901921-3f0652bb3915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    },
    { 
      type: "Mature", 
      imageUrl: "https://images.unsplash.com/photo-1630090902989-3b9ec1deb2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-16 px-6 bg-coconut-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-12">
          A formula for every skin type
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skinTypes.map((skin, index) => (
            <SkinTypeCard 
              key={index}
              type={skin.type}
              imageUrl={skin.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinTypes;
