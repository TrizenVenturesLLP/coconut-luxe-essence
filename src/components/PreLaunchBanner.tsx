import React from 'react';
import banner from './assests/above_footer.png';
// import sample from './assests/800x600banner.png'

const PreLaunchBanner = () => {
  return (
    <section className="w-full py-4 md:py-6 lg:py-8 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full">
          <img
            src={banner}
            alt="Launch announcement"
            className="w-full h-auto object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PreLaunchBanner;
