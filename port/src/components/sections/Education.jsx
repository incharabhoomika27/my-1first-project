import React from 'react';
import Section from '../Section';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'BCA Graduation',
    institution: 'Vidya First Grade College, Chikkanahalli',
    year: '2026',
    score: '8.5 CGPA',
    scoreLabel: 'CGPA',
  },
  {
    degree: 'PUC – Science',
    institution: 'SKVD PU College, Chikkanahalli',
    year: '2022',
    score: '65%',
    scoreLabel: 'Percentage',
  },
  {
    degree: 'SSLC (10th)',
    institution: 'SKVD High School, Chikkanahalli',
    year: '2020',
    score: '89%',
    scoreLabel: 'Percentage',
  },
];

const Education = () => {
  return (
    <Section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex p-3 bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400 mb-6"
          >
            <GraduationCap size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Academic Education</h2>
          <div className="w-20 h-1.5 bg-purple-600 rounded-full mx-auto"></div>
        </div>

        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-indigo-500/50 before:to-transparent">
          {educationData.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10 transition-transform group-hover:scale-125">
                <GraduationCap size={16} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2.5rem] glass-card group-hover:border-indigo-500/50 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-white">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-bold bg-indigo-500/10 px-4 py-1.5 rounded-full whitespace-nowrap border border-indigo-500/20">
                    <Calendar size={14} />
                    {edu.year}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium mb-6">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-500">
                    <MapPin size={16} />
                  </div>
                  {edu.institution}
                </div>

                <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                    {edu.scoreLabel === 'CGPA' ? 'C' : 'P'}
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">{edu.scoreLabel}</p>
                    <p className="text-slate-900 dark:text-white font-black text-xl">{edu.score}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
