
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from './ui/button';

const OurStory = () => {
  return (
    <section className="py-16 px-6 bg-coconut-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1594394489329-490ffe751eab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="AELQEMY skincare beginnings" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-coconut-cream p-6 rounded-xl shadow-md">
              <p className="text-3xl font-display">Est. 2018</p>
            </div>
          </div>
          
          {/* Right side - Story content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-teal-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">Our Story</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Founded in 2018, AELQEMY began with a simple mission: to create skincare products that blend ancient wisdom with modern science. Our founder, after struggling with skin issues for years, discovered the power of natural ingredients that have been used for centuries across different cultures.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The name AELQEMY draws inspiration from ancient alchemists who sought to transform basic materials into something extraordinary. Similarly, we transform pure, natural ingredients into effective skincare solutions that work in harmony with your skin's natural processes.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, AELQEMY stands at the forefront of clean beauty, creating formulations that are not only gentle on your skin but also environmentally conscious. Our commitment to sustainability extends from our ethically sourced ingredients to our recyclable packaging.
            </p>
            
            <Button className="mt-4 bg-teal-600 hover:bg-teal-700">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
