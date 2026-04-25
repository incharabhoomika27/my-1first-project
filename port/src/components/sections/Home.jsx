import React from 'react';
import Section from '../Section';
import { motion } from 'motion/react';
import { ArrowDown, FileText } from 'lucide-react';

const Home = () => {
  return (
    <Section id="home" className="pt-32 pb-20 md:pt-48 overflow-hidden min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 relative w-full">
        <div className="flex-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-widest mb-10 shadow-2xl shadow-indigo-500/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              Aspiring Software Developer
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-[0.9]">
              <span className="text-gradient">
                Inchara K S
              </span>
            </h1>
            
            <div className="flex flex-col gap-6 mb-12">
              <p className="text-slate-600 dark:text-slate-400 text-2xl md:text-3xl font-light leading-tight max-w-2xl">
                Passionate <span className="text-slate-900 dark:text-white font-bold">BCA Student</span> & 
                <span className="text-indigo-600 dark:text-indigo-400 font-bold"> Aspiring Software Developer</span>.
              </p>
              <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
                <p className="text-sm font-bold uppercase tracking-widest">Based in Karnataka, India</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 flex-wrap">
              <a 
                href="#contact" 
                className="group relative px-10 py-5 rounded-[2rem] bg-indigo-600 text-white font-black transition-all w-full sm:w-auto shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Start a Conversation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="/resume.png" 
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 rounded-[2rem] bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-black transition-all w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-slate-100 dark:border-slate-800 shadow-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 active:scale-95"
              >
                <FileText size={22} className="text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform" /> 
                Curriculum Vitae
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Massive Glowing Orb */}
            <div className="absolute -inset-20 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
            
            {/* Premium Image Container */}
            <motion.div 
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10"
            >
              <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-[4rem] overflow-hidden border-[16px] border-white dark:border-slate-800/50 shadow-[0_50px_100px_rgba(0,0,0,0.1)] dark:shadow-2xl relative">
                <img 
                  src="/profile.jpg" 
                  alt="Inchara K S" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://ui-avatars.com/api/?name=Inchara+KS&background=4f46e5&color=fff&size=1024";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Dynamic Badges */}
              <motion.div 
                animate={{ x: [-10, 10, -10], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-6 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700 z-20 hidden lg:block backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Code size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-black uppercase tracking-tighter">Tech Enthusiast</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white">Innovator</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Scroll to Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </motion.div>
    </Section>
  );
};

export default Home;
