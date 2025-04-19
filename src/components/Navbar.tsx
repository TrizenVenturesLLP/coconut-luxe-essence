
import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
    <div className="sticky top-0 left-0 right-0 z-50 w-full">
      <nav 
        className={cn(
          "bg-white transition-all duration-300 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4",
          isScrolled && "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex items-center justify-center">
            {/* Centered Logo with improved styling */}
            <a href="/" className="text-center">
              <span className="text-2xl sm:text-3xl font-display font-bold tracking-wider text-[#006c3b]">
                AELQEMY
              </span>
            </a>
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
