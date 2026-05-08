import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { portfolioData } from '../../constants/portfolioData';

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-slate-50 dark:bg-dark-bg/50">
      <SectionTitle 
        title="Featured Projects" 
        subtitle="A showcase of full-stack web applications, AI systems, and end-to-end machine learning pipelines."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
