import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../../constants/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 dark:bg-black py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm font-medium">
          &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
        
        <p className="text-slate-500 text-sm flex items-center gap-1.5 font-medium">
          Engineered with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
