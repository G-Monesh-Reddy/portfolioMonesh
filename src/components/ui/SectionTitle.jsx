import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary-500 rounded-full mt-6"></div>
    </div>
  );
};

export default SectionTitle;
