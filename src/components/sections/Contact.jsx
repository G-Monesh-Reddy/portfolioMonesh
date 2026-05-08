import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionWrapper from '../layout/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import SocialButton from '../ui/SocialButton';
import { portfolioData } from '../../constants/portfolioData';

const Contact = () => {
  const { name, email, phone, github, linkedin } = portfolioData.personalInfo;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="I'm always open to discussing new opportunities, collaborations, and tech innovations."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Feel free to reach out to me directly via email or phone. You can also connect with me on LinkedIn or explore my code on GitHub.
          </p>
          
          <div className="space-y-6 mb-12">
            <a href={`mailto:${email}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 group transition-colors w-max">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium">{email}</span>
            </a>
            
            <a href={`tel:${phone}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 group transition-colors w-max">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-medium">{phone}</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">Connect Socially</h4>
            <div className="flex items-center gap-4">
              <SocialButton href={github} icon={FaGithub} label="GitHub Profile" />
              <SocialButton href={linkedin} icon={FaLinkedin} label="LinkedIn Profile" />
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 bg-white dark:bg-dark-surface p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-dark-border shadow-xl shadow-slate-200/20 dark:shadow-none"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea 
                id="message" 
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none dark:text-white"
                placeholder="Hello, I'd like to discuss..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
