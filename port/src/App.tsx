import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <div className="bg-gradient-premium min-h-screen text-slate-900 dark:text-slate-50 transition-colors duration-500 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200">
      <div className="bg-noise"></div>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-white/50 dark:bg-slate-950/50 backdrop-blur-md py-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center transition-colors duration-500 relative z-10">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Inchara K S. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
