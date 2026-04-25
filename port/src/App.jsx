import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-gradient-custom min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <footer className="bg-slate-950 py-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Inchara K S. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
