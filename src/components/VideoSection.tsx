
import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <h2 className="text-center font-display">
          <span className="block text-3xl md:text-4xl lg:text-5xl mb-4">
            Pure Ingredients
          </span>
          <span className="block text-lg md:text-xl lg:text-2xl font-light max-w-2xl text-center">
            Our products are made with carefully selected natural ingredients that nourish your skin without harmful chemicals.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default VideoSection;
