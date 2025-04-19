
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home } from 'lucide-react';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-coconut-cream text-gray-700 py-10 sm:py-12 md:py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-[#006c3b] mb-3 sm:mb-4">AELQEMY</h3>
            <p className="text-sm font-sans font-light leading-relaxed">
              Pure, simple, and sustainable skincare powered by nature's finest ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-sans font-medium uppercase mb-3 sm:mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#"
                  className="text-sm font-sans hover:underline flex items-center gap-1"
                  onClick={scrollToTop}
                >
                  <Home size={16} /> Home
                </a>
              </li>
              <li>
                <a 
                  href="#our-story" 
                  className="text-sm font-sans hover:underline"
                  onClick={(e) => scrollToSection(e, 'our-story')}
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-sans font-medium uppercase mb-3 sm:mb-4">Address</h4>
            <address className="text-sm font-sans not-italic leading-relaxed">
              Aelqemy cosmetics pvt ltd<br />
              Plot no. 25, 26 & 27, Gachibowli<br />
              Serilingampally, Hyderabad 500032<br />
              Telangana, India
            </address>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs font-sans text-gray-500 mb-4 sm:mb-0">
              © {new Date().getFullYear()} AELQEMY. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(item => (
                <a key={item} href="#" className="text-xs font-sans text-gray-500 hover:underline">
                  {item}
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
