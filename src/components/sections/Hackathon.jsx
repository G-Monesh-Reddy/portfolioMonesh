import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';
import { portfolioData } from '../../constants/portfolioData';

const Hackathon = () => {
  const { title, award, description } = portfolioData.hackathon;

  return (
    <SectionWrapper id="hackathon">
      <motion.div 
        whileHover={{ y: -5 }}
        className="w-full max-w-4xl mx-auto rounded-3xl p-1 overflow-hidden bg-gradient-to-r from-blue-500 via-primary-500 to-purple-600 shadow-xl"
      >
        <div className="bg-white dark:bg-slate-900 rounded-[22px] p-8 md:p-12 h-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
              {title}
            </h2>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500 mb-4 inline-block">
              {award}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
              {description}
            </p>
          </div>
          
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
            <Trophy size={64} className="text-primary-500 drop-shadow-md" />
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Hackathon;
