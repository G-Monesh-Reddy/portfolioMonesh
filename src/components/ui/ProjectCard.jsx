import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col h-full bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 flex-grow leading-relaxed">
          {project.description}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.metrics.map((metric, idx) => (
              <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start">
                <span className="mr-2 text-primary-500">•</span>
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-dark-border">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub size={18} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
