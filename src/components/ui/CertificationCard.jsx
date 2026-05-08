import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.a 
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-4 group"
    >
      <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Award size={32} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          Certification {index + 1}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <span>View Certificate</span>
          <ExternalLink size={14} />
        </p>
      </div>
    </motion.a>
  );
};

export default CertificationCard;
