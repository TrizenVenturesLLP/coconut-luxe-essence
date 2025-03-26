
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className="bg-coconut-cream text-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Help Section */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Help</h4>
            <ul className="space-y-2">
              {[
                'Shipping + Delivery FAQs', 
                'FAQs', 
                'Store Locator'
              ].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About Section */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">About</h4>
            <ul className="space-y-2">
              {[
                'About Us', 
                'Blog', 
                'Impact Foundation', 
                'Transparency',
                'Give 20%, Get 20%'
              ].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information Section */}
          <div>
            <h4 className="text-sm font-medium uppercase mb-4">Information</h4>
            <ul className="space-y-2">
              {[
                'Contact', 
                'Terms and Conditions', 
                'Privacy Policy',
                'Satisfaction Guarantee'
              ].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Icons */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-6 mb-6">
              <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-700 hover:text-gray-900">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Company Name and Copyright */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="font-display text-3xl mb-2">AELQEMY</h3>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Accessibility'].map(item => (
                <a key={item} href="#" className="text-xs text-gray-500 hover:underline mb-2">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-200" />
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} AELQEMY. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
