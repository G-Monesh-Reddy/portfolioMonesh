import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ name }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-primary-500 dark:hover:border-primary-500 transition-colors flex items-center justify-center text-center"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;
