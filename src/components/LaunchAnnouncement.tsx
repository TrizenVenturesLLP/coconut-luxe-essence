
import React from 'react';
import after from './assests/after_story.png';

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
      </div>
    </section>
  );
};

export default LaunchAnnouncement;
