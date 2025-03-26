
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ShopByCategory from '@/components/ShopByCategory';
import ProductBenefits from '@/components/ProductBenefits';
import SkinTypes from '@/components/SkinTypes';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import OurStory from '@/components/OurStory';

const Index = () => {
  return (
    <div className="min-h-screen bg-coconut-white">
      <Navbar />
      <HeroSection />
      
      {/* Shop by Category Section */}
      <ShopByCategory />
      
      {/* Product Benefits Section */}
      <ProductBenefits />
      
      {/* Skin Types Section */}
      <SkinTypes />
      
      {/* Full Width Video Section */}
      <VideoSection />
      
      {/* Our Story Section */}
      <OurStory />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Featured Image Section - Full Width */}
      <div className="w-full py-16">
        <img 
          src="https://www.cocokind.com/cdn/shop/files/Group_11135.png?v=1734973160" 
          alt="Featured AELQEMY products" 
          className="w-full h-auto" 
        />
      </div>
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
