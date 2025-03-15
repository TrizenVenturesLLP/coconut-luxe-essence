
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShopByCategory from '@/components/ShopByCategory';
import ProductBenefits from '@/components/ProductBenefits';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-coconut-white">
      <Navbar />
      <HeroSection />
      
      {/* Shop by Category Section */}
      <ShopByCategory />
      
      {/* Product Benefits Section */}
      <ProductBenefits />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Featured Image Section */}
      <div className="w-full py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <img 
            src="https://www.cocokind.com/cdn/shop/files/Group_11135.png?v=1734973160" 
            alt="Featured AELQEMY products" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
