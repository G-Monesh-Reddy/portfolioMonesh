import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import CertificationCard from '../ui/CertificationCard';
import { portfolioData } from '../../constants/portfolioData';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="bg-slate-50 dark:bg-dark-bg/50">
      <SectionTitle 
        title="Certifications" 
        subtitle="Verified credentials reflecting continuous learning and technical validation."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioData.certifications.map((cert, index) => (
          <CertificationCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
