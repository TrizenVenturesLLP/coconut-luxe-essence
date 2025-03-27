
import React from 'react';

const LaunchAnnouncement = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Nature/Coconut Tree Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1600&q=80"
          alt="Coconut trees in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 tracking-widest">
            WE ARE LAUNCHING SOON
          </h2>
          <div className="h-1 w-24 bg-white mx-auto"></div>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl font-sans">
            Our highly anticipated coconut-infused collection will be available next month
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
