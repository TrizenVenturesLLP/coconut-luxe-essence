
import React from 'react';
import banner from './assests/above_footer.png';

const PreLaunchBanner = () => {
  return (
    <section className="w-full py-16 bg-coconut-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="w-full">
          <img
            src={banner}
            alt="Launch announcement"
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default PreLaunchBanner;
