
import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

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
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-display font-medium tracking-wide">
          AELQEMY
        </a>

        {/* Contact Button */}
        <Button 
          variant="outline" 
          className="flex items-center gap-2 rounded-full border-black hover:bg-black hover:text-white transition-colors"
          onClick={scrollToContact}
        >
          <Mail size={16} />
          <span>Contact</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
