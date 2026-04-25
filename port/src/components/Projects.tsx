import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Automatic Project System",
    description: "An automated system developed during my internship to streamline project workflows and data processing.",
    image: "https://picsum.photos/seed/automation/600/400",
    tags: ["Python", "Automation", "SQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Database Management Tool",
    description: "A comprehensive tool for managing database schemas and performing complex SQL queries efficiently.",
    image: "https://picsum.photos/seed/database/600/400",
    tags: ["SQL", "Python", "DBMS"],
    github: "#",
    live: "#",
  },
  {
    title: "Data Science Analysis",
    description: "Exploratory data analysis project focusing on extracting insights from large datasets using Python.",
    image: "https://picsum.photos/seed/analysis/600/400",
    tags: ["Python", "Data Science", "Pandas"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-bg border-b border-line">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="meta-label">Selected Documents</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Archive
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-b border-line pb-12"
            >
              <div className="aspect-[4/3] overflow-hidden relative mb-8 rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono text-muted italic">0{i + 1}</span>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-line rounded text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a href={project.github} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors">
                  <Github size={14} /> Source
                </a>
                <a href={project.live} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-accent transition-colors">
                  <ExternalLink size={14} /> View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
