
import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/9c88f626111d4f37bbaa870b297b295b.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-8">
        <h2 className="text-center">
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4 font-display">
            Pure Ingredients
          </span>
          <span className="block text-base sm:text-lg md:text-xl font-light max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto text-center font-sans">
            Our products are made with carefully selected natural ingredients that nourish your skin without harmful chemicals.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default VideoSection;
