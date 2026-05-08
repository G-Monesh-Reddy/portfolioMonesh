import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const ResearchCard = ({ paper }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0 mt-1">
          <FileText size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
            {paper.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Published Research Paper
          </p>
        </div>
      </div>
      
      <a 
        href={paper.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="shrink-0 flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-primary-600 text-white font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-primary-500 transition-colors w-full md:w-auto justify-center"
      >
        <span>View Paper</span>
        <ExternalLink size={18} />
      </a>
    </motion.div>
  );
};

export default ResearchCard;
