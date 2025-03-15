
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShopByCategory from '@/components/ShopByCategory';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-coconut-white">
      <Navbar />
      <HeroSection />
      
      {/* Shop by Category Section */}
      <ShopByCategory />
      
      {/* Main Content Placeholder (for future sections) */}
      <div className="bg-coconut-white min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Discover Our Collection</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Experience the perfect balance of science and nature. Our formulations 
            harness the power of botanical ingredients while being gentle on your skin
            and the environment.
          </p>
          <button className="px-8 py-3 bg-coconut-accent text-gray-800 rounded-full text-sm font-medium tracking-wide hover:bg-opacity-80 transition-all">
            View Products
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
