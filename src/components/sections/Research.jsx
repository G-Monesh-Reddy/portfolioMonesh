import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import ResearchCard from '../ui/ResearchCard';
import { portfolioData } from '../../constants/portfolioData';

const Research = () => {
  return (
    <SectionWrapper id="research">
      <SectionTitle 
        title="Research & Publications" 
        subtitle="Academic contributions to the fields of Applied AI and Mental Health Monitoring."
      />
      
      <div className="flex flex-col gap-6 max-w-4xl">
        {portfolioData.researchPapers.map((paper, idx) => (
          <ResearchCard key={idx} paper={paper} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Research;
