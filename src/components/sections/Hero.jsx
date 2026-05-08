import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../constants/portfolioData';

const Hero = () => {
  const { name, role, summary, email, phone, github, linkedin, resumeUrl } = portfolioData.personalInfo;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800/50"
          >
            {role.split(' | ')[0]}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight leading-tight mb-6"
          >
            Hi, I'm <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-700 dark:from-primary-400 dark:to-blue-500">
              {name}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
          >
            {role.split(' | ').slice(1).join(' & ')}. Building robust frontend interfaces, scalable backend systems, and AI-powered applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href={resumeUrl} 
              target="_blank"
              rel="noopener noreferrer"
              download="Monesh_Resume.pdf"
              className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-slate-50 dark:hover:bg-slate-800/80 font-medium rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-xl transition-colors flex items-center justify-center"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-5"
          >
            <a href={`mailto:${email}`} aria-label="Email" className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href={`tel:${phone}`} aria-label="Phone" className="text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
              <Phone size={24} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-[#0A66C2] dark:text-slate-400 dark:hover:text-[#0A66C2] transition-colors">
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full flex justify-center lg:justify-end hidden md:flex"
        >
          {/* Abstract graphic representing full-stack + AI */}
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-2xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/10 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-60">
                <div className="bg-primary-500/20 rounded-lg"></div>
                <div className="bg-purple-500/20 rounded-lg"></div>
                <div className="bg-blue-500/20 rounded-lg"></div>
                <div className="bg-teal-500/20 rounded-lg"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-4xl text-slate-800/30 dark:text-white/30">
                AI + WEB
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
