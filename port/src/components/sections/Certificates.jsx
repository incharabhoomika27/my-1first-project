import React from 'react';
import Section from '../Section';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Database Management System',
      issuer: 'Great Learning',
      id: 'DBMS-001'
    },
    {
      title: 'SQL and Data Science',
      issuer: 'Great Learning',
      id: 'SQLDS-002'
    },
    {
      title: 'Python Fundamentals for Beginners',
      issuer: 'Great Learning',
      id: 'PY-003'
    }
  ];

  return (
    <Section id="certificates" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-yellow-500/10 rounded-2xl text-yellow-600 dark:text-yellow-400 mb-6"
          >
            <Award size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Certificates</h2>
          <div className="w-20 h-1.5 bg-yellow-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[2.5rem] hover:border-yellow-500/50 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-all shadow-inner relative">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Award className="text-yellow-600 dark:text-yellow-400 relative z-10" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                {cert.title}
              </h3>
              <div className="mt-auto w-full">
                <div className="h-px bg-slate-200 dark:bg-slate-700 w-full mb-6"></div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 transition-colors">Issued by</p>
                <p className="text-indigo-600 dark:text-indigo-300 font-black text-lg transition-colors">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certificates;
