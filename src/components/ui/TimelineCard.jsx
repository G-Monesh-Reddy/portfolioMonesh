import React from 'react';
import { motion } from 'framer-motion';

const TimelineCard = ({ item }) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-200 dark:bg-dark-border"></div>
      
      <div className="md:flex items-center justify-between w-full mb-12 relative">
        {/* Timeline Dot */}
        <div className="absolute left-[-39px] md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-bg z-10 shadow"></div>
        
        {/* Content Box */}
        <motion.div 
          whileHover={{ y: -3 }}
          className="w-full md:w-5/12 bg-slate-50 dark:bg-dark-surface p-6 rounded-xl border border-slate-200 dark:border-dark-border shadow-sm ml-0 md:ml-auto md:even:mr-auto md:even:ml-0"
        >
          <div className="flex flex-col mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {item.role || item.degree}
            </h3>
            <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium">
              {item.company || item.institution}
            </h4>
            <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium bg-slate-200 dark:bg-slate-800 w-max px-3 py-1 rounded-full">
              {item.duration}
            </span>
          </div>

          {item.cgpa && (
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              CGPA: {item.cgpa}
            </p>
          )}

          {item.responsibilities && (
            <ul className="space-y-2 mt-4">
              {item.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                  <span className="mr-2 text-primary-500 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineCard;
