
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-coconut-cream text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl mb-4">AELQEMY</h3>
            <p className="text-sm font-sans font-light leading-relaxed">
              Pure, simple, and sustainable skincare powered by nature's finest ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-sans font-medium uppercase mb-4">Shop</h4>
            <ul className="space-y-2">
              {['All Products', 'Best Sellers', 'New Arrivals', 'Gift Sets'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-sans hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-sans font-medium uppercase mb-4">About</h4>
            <ul className="space-y-2">
              {['Our Story', 'Ingredients', 'Sustainability', 'Blog'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-sans hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-sans font-medium uppercase mb-4">Help</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQs', 'Shipping & Returns', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm font-sans hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs font-sans text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} AELQEMY. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(item => (
                <a key={item} href="#" className="text-xs font-sans text-gray-500 hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
