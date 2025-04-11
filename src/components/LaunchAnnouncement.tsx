
import React from 'react';
import after from './assests/after_story.png'

const LaunchAnnouncement = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Nature/Coconut Tree Background Image */}
      <div className="absolute inset-0">
        <img
          src={after}
          alt="Coconut trees in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 tracking-widest">
            AELQEMY
          </h2>
          <div className="h-1 w-24 bg-white mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
