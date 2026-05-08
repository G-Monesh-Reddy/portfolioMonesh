import React from 'react';
import { motion } from 'framer-motion';

const SocialButton = ({ href, icon: Icon, label }) => {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-full text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500 shadow-sm transition-colors"
      aria-label={label}
    >
      <Icon size={22} />
    </motion.a>
  );
};

export default SocialButton;
