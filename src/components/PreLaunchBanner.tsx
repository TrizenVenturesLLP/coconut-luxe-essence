import React from 'react';
import banner from './assests/above_footer.png';

const PreLaunchBanner = () => {
  return (
    <section className="relative w-full overflow-hidden h-[200px] md:h-[600px]">
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Launch announcement"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default PreLaunchBanner;
