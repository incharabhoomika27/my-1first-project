import React from 'react';
import Section from '../Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-6"
          >
            <Send size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg font-light">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <motion.a 
              href="mailto:incharabhoomika@gmail.com" 
              whileHover={{ x: 10 }}
              className="flex items-center gap-8 p-8 rounded-[2.5rem] glass-card group transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-lg">
                <Mail size={28} />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Email Me</span>
                <span className="text-slate-900 dark:text-white font-bold text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">incharabhoomika@gmail.com</span>
              </div>
            </motion.a>

            <motion.a 
              href="tel:7026588612" 
              whileHover={{ x: 10 }}
              className="flex items-center gap-8 p-8 rounded-[2.5rem] glass-card group transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-lg">
                <Phone size={28} />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Call Me</span>
                <span className="text-slate-900 dark:text-white font-bold text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">+91 7026588612</span>
              </div>
            </motion.a>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-8 p-8 rounded-[2.5rem] glass-card group transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 shadow-lg">
                <MapPin size={28} />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Location</span>
                <span className="text-slate-900 dark:text-white font-bold text-xl">Tumkur, Karnataka</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-10 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 -mr-16 -mt-16 rounded-full"></div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 resize-none transition-all shadow-inner"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
