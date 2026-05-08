import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import SkillBadge from '../ui/SkillBadge';
import { portfolioData } from '../../constants/portfolioData';

const Skills = () => {
  const categories = Object.keys(portfolioData.skills);

  return (
    <SectionWrapper id="skills">
      <SectionTitle 
        title="Technical Expertise" 
        subtitle="Tools, languages, and frameworks I use to build scalable systems."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-2xl border ${category === 'Currently Learning' ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/50' : 'bg-slate-50 dark:bg-dark-surface border-slate-200 dark:border-dark-border'} shadow-sm`}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${category === 'Currently Learning' ? 'text-blue-700 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {portfolioData.skills[category].map((skill, sIdx) => (
                <SkillBadge key={sIdx} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
