
import React from 'react';
import { Package, Droplet, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-coconut-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-16">
          How it works...
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column - Product video */}
          <div className="relative">
            <video 
              src="https://cdn-video.wearewild.com/f_webm,q_auto:best,vc_auto,c_fit,ac_none,w_900,h_900/videos/1724754578-sage-bw-how-to.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-2xl max-w-full w-full h-auto object-cover"
              controls
            />
            
            <div className="flex justify-center gap-4 mt-6">
              <div className="bg-white py-4 px-8 rounded-md flex items-center gap-2 shadow-sm">
                <span className="text-lg font-medium">Deodorant</span>
                <span role="img" aria-label="flower">🌸</span>
              </div>
              
              <div className="bg-white py-4 px-8 rounded-md flex items-center gap-2 shadow-sm">
                <span className="text-lg font-medium">Body Wash</span>
                <span role="img" aria-label="water">🧴</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Steps */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <span>1. Choose your case</span>
                  <span role="img" aria-label="flower">🌸</span>
                </h3>
                <p className="text-gray-600">
                  Our reusable Wild case is a stylish and timeless design - all you have to do is pick your colour.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <span>2. Pick scents</span>
                  <span role="img" aria-label="magnifying glass">🔍</span>
                </h3>
                <p className="text-gray-600">
                  Choose your favourite Wild fragrance and we'll take care of the rest.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <span>3. Subscribe & save or buy once</span>
                  <span role="img" aria-label="package">📦</span>
                </h3>
                <p className="text-gray-600">
                  We will ship your refills out to you exactly as and when you want.
                </p>
              </div>
              
              <div>
                <Button className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 h-auto">
                  GET STARTED <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
