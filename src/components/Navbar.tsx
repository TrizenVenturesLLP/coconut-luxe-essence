
import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav 
        className="bg-white transition-all duration-300 px-6 md:px-12 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex items-center justify-between">
            {/* Empty div to balance the flex container */}
            <div className="w-24" /> 
            
            {/* Centered Logo with Didot font */}
            <a href="/" className="text-2xl font-display font-medium tracking-wide text-center">
              AELQEMY
            </a>
            
            {/* Contact Button aligned to the right */}
            {/* <Button 
              variant="outline" 
              className="flex items-center gap-2 rounded-full border-black hover:bg-black hover:text-white transition-colors w-24 font-sans"
              onClick={scrollToContact}
            >
              <Mail size={16} />
              <span>Contact</span>
            </Button> */}
          </div>
          
          {/* Horizontal separator moved closer to the logo */}
          <Separator 
            className="w-full h-[1px] mt-2 bg-gray-200" 
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
