import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import TimelineCard from '../ui/TimelineCard';
import { portfolioData } from '../../constants/portfolioData';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-slate-50 dark:bg-dark-bg/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionTitle 
            title="About Me" 
            subtitle="Professional Summary & Expertise"
          />
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <p className="leading-relaxed">
              {portfolioData.personalInfo.summary}
            </p>
            <div className="mt-8 p-6 bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Core Competencies</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  React & Modern Frontend
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  End-to-End ML Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  Transformer Models (BERT/RoBERTa)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  REST APIs & Microservices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  RAG & Semantic Search
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  Responsive Design Systems
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle 
            title="Education" 
            subtitle="Academic Background"
          />
          <div className="mt-8">
            {portfolioData.education.map((edu, idx) => (
              <TimelineCard key={idx} item={edu} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
