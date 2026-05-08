import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Experience from './components/sections/Experience';
import Hackathon from './components/sections/Hackathon';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-dark-bg transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Hackathon />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
