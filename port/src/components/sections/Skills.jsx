import React from 'react';
import Section from '../Section';
import { Code, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const Skills = () => {
  const technicalSkills = [
    { name: 'Visual Studio', icon: '💻', color: 'indigo' },
    { name: 'SQL', icon: '🗄️', color: 'blue' },
    { name: 'Python', icon: '🐍', color: 'yellow' },
  ];

  const softSkills = [
    { name: 'Communication Skill', level: 90, color: 'from-indigo-500 to-blue-500' },
    { name: 'Project Management', level: 85, color: 'from-purple-500 to-indigo-500' },
    { name: 'Time Management', level: 95, color: 'from-pink-500 to-purple-500' },
  ];

  return (
    <Section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 mb-6"
          >
            <Code size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A specialized toolkit of technical proficiencies and leadership traits cultivated through academic and practical experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="glass-card p-10 rounded-[2.5rem] relative group">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400">
                <Code size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Technical</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-center gap-5 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <span className="text-4xl drop-shadow-lg">{skill.icon}</span>
                  <span className="text-slate-700 dark:text-slate-200 font-bold text-lg">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-10 rounded-[2.5rem] relative group">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Interpersonal</h3>
            </div>
            
            <div className="space-y-10">
              {softSkills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-3 items-end">
                    <span className="text-slate-700 dark:text-slate-200 font-bold text-lg">{skill.name}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-black text-2xl tracking-tighter">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3.5 overflow-hidden p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(99,102,241,0.3)]`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
