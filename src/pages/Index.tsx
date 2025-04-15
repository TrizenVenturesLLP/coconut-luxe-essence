
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductBenefits from '@/components/ProductBenefits';
import SkinTypes from '@/components/SkinTypes';
import Footer from '@/components/Footer';
import OurStory from '@/components/OurStory';
import LaunchAnnouncement from '@/components/LaunchAnnouncement';
import ImageCarousel from '@/components/ImageCarousel';
import HappySkin from '@/components/HappySkin';

const Index = () => {
  return (
    <div className="min-h-screen bg-coconut-white">
      <Navbar />
      <HeroSection />
      <ProductBenefits />
      <ImageCarousel />
      <SkinTypes />
      <OurStory />
      <LaunchAnnouncement />
      <HappySkin />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
