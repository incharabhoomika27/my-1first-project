import React from 'react';
import Section from '../Section';
import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: "Automatic Project System",
    description: "An intelligent automation suite developed during my tenure at Aikshetra Tech Solutions to optimize internal workflows.",
    image: "https://images.unsplash.com/photo-1518433278981-d70238ad503d?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Automation", "SQL"],
    github: "#",
    live: "#",
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Database Management Tool",
    description: "A high-performance query optimization engine built to handle complex relational schemas with ease.",
    image: "https://images.unsplash.com/photo-1544383333-546e16bd3a5d?q=80&w=800&auto=format&fit=crop",
    tags: ["SQL", "DBMS", "Optimization"],
    github: "#",
    live: "#",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Content Creation Hub",
    description: "A digital showcase of my tech-focused content, bridging the gap between complex code and user accessibility.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    tags: ["Tech", "Creativity", "UI/UX"],
    github: "#",
    live: "#",
    color: "from-pink-500 to-purple-500"
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex p-3 bg-indigo-500/10 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-6"
            >
              <Sparkles size={32} />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Archive <span className="text-indigo-600">.</span></h2>
            <p className="text-slate-600 dark:text-slate-400 text-xl font-light leading-relaxed">
              A curated collection of my digital experiments, academic achievements, and creative endeavors.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
                01
              </div>
              <div className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
                02
              </div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                03
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] mb-8 bg-slate-100 dark:bg-slate-900 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-2"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 mix-blend-multiply`} />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6 leading-none">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    <a href={project.github} className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-slate-900 hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                    <a href={project.live} className="flex-grow h-12 rounded-2xl bg-white flex items-center justify-center text-slate-900 font-bold text-sm hover:scale-105 transition-transform gap-2">
                      <ExternalLink size={18} /> View Case Study
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="px-4">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
