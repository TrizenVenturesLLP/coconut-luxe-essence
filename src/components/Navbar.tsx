
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Shop', 'Ingredients', 'Our Story', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:opacity-70 transition-opacity">
            <Search size={20} />
          </button>
          <button className="p-1 hover:opacity-70 transition-opacity">
            <ShoppingCart size={20} />
            <span className="sr-only">Cart</span>
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={cn(
              "w-6 h-0.5 bg-black transition-all", 
              mobileMenuOpen && "rotate-45 translate-y-1.5"
            )} />
            <div className={cn(
              "w-6 h-0.5 bg-black my-1.5 transition-all", 
              mobileMenuOpen && "opacity-0"
            )} />
            <div className={cn(
              "w-6 h-0.5 bg-black transition-all", 
              mobileMenuOpen && "-rotate-45 -translate-y-1.5"
            )} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 bg-white px-6 py-4 shadow-lg transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
      )}>
        <div className="flex flex-col space-y-4">
          {['Shop', 'Ingredients', 'Our Story', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
