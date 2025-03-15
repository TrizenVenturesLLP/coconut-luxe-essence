
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
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
