import React from 'react';
import Section from '../Section';
import { Briefcase, Activity } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Internship',
      company: 'Aikshetra Tech Solutions Pvt Ltd',
      duration: '1 month',
      description: 'Gained practical experience and exposure to real-world software development processes.',
      icon: <Briefcase size={28} />
    },
    {
      title: 'Project Work',
      company: 'Online Courses & Automatic Projects',
      duration: 'Ongoing',
      description: 'Completed various online course projects and currently working on automatic projects to build practical skills.',
      icon: <Activity size={28} />
    }
  ];

  return (
    <Section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-pink-500/10 rounded-2xl text-pink-600 dark:text-pink-400 mb-6"
          >
            <Briefcase size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Experience</h2>
          <div className="w-20 h-1.5 bg-pink-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-10 hover:border-indigo-500/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

              <div className="w-20 h-20 shrink-0 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                {exp.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{exp.title}</h3>
                  <span className="bg-indigo-50 dark:bg-indigo-500/10 px-4 py-1.5 rounded-full text-indigo-600 dark:text-indigo-300 text-sm font-black border border-indigo-100 dark:border-indigo-500/20 whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-500 dark:text-slate-400 mb-6">{exp.company}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
