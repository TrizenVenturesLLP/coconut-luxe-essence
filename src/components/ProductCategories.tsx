
import React from 'react';
import { Star, Sparkle, Droplet, TestTube, Sun, ShoppingBag } from 'lucide-react';

const categories = [
  { name: 'Best Sellers', icon: Star },
  { name: 'New', icon: Sparkle },
  { name: 'Cleansers & Toners', icon: Droplet },
  { name: 'Serums', icon: TestTube },
  { name: 'Moisturizers', icon: Sun },
  { name: 'All', icon: ShoppingBag },
];

const ProductCategories = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold">Shop by Category</h2>
        <a href="#" className="text-sm text-coconut-accent underline hover:text-coconut-accent/80 transition-colors duration-200">
          Shop All
        </a>
      </div>
      
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-6 md:space-x-8 px-2">
          {categories.map((category) => (
            <div key={category.name} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-coconut-white flex items-center justify-center border border-gray-100 shadow-sm group-hover:bg-coconut-accent/10 group-hover:scale-105 transition-all duration-200">
                <category.icon className="w-8 h-8 text-coconut-accent" />
              </div>
              <span className="mt-2 text-xs md:text-sm text-gray-800">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
