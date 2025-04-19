
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
import PreLaunchBanner from '@/components/PreLaunchBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-coconut-white">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to content</a>
      
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProductBenefits />
        <ImageCarousel />
        {/* <SkinTypes /> */}
        <OurStory />
        <LaunchAnnouncement />
        <HappySkin />
        <PreLaunchBanner />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
