import React from 'react';
import Section from '../Section';
import { User, Target } from 'lucide-react';

const About = () => {
  return (
    <Section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-6"
          >
            <User size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-indigo-600 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="glass-card p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 text-indigo-900 dark:text-white transition-transform group-hover:scale-110 duration-700">
                <Target size={240} />
              </div>
              
              <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6 flex items-center gap-3">
                <Target size={28} className="animate-pulse" />
                Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xl relative z-10 font-light">
                To obtain a suitable position in a reputed organization where I can utilize my skills and knowledge to grow professionally and contribute to the company's success while making meaningful contributions.
              </p>
              
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <User size={24} />
                  </div>
                  <div>
                    <span className="block text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Name</span>
                    <span className="text-slate-900 dark:text-white font-bold text-lg">Inchara K S</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Location</span>
                    <span className="text-slate-900 dark:text-white font-bold text-lg">Tumkur, Karnataka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-indigo-600">
              <p className="text-slate-900 dark:text-white font-bold text-3xl mb-1">8.5</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Current CGPA</p>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-purple-600">
              <p className="text-slate-900 dark:text-white font-bold text-3xl mb-1">89%</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">10th Score (SSLC)</p>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-pink-600">
              <p className="text-slate-900 dark:text-white font-bold text-3xl mb-1">2026</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Expected Graduation</p>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border-l-4 border-l-orange-600">
              <p className="text-slate-900 dark:text-white font-bold text-3xl mb-1">BCA</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Field of Study</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
