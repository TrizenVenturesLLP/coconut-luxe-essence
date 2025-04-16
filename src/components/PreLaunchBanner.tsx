import React from 'react';
import banner from './assests/above_footer.png';

const PreLaunchBanner = () => {
  return (
    <section className="relative w-full overflow-hidden h-[300px] md:h-[500px]">
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Launch announcement"
          className="w-full h-full object-contain object-center"
        />
      </div>
    </section>
  );
};

export default PreLaunchBanner;
