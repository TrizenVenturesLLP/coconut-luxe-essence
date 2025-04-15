
import React from 'react';

const PreLaunchBanner = () => {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center text-center space-y-6">
          <div className="absolute top-0 w-24 h-24 bg-white rounded-full blur-2xl opacity-20"></div>
          <img 
            src="/lovable-uploads/cba87bc6-9058-493f-978c-79eaa21a3167.png" 
            alt="Pre-launch banner" 
            className="absolute top-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display tracking-wider">
              Hide your filters. Good skin is coming.
            </h2>
            <p className="text-xl md:text-2xl font-sans uppercase tracking-widest">
              Launching Soon....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreLaunchBanner;
