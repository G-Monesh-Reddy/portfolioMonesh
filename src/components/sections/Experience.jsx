import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import TimelineCard from '../ui/TimelineCard';
import { portfolioData } from '../../constants/portfolioData';

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-dark-bg/50">
      <SectionTitle 
        title="Professional Experience" 
        subtitle="My journey as a Software Development Engineer in the industry."
      />
      
      <div className="mt-12">
        {portfolioData.experience.map((exp, idx) => (
          <TimelineCard key={idx} item={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
