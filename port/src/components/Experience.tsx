import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Intern",
    company: "Aikshetra Tech Solutions Pvt Ltd",
    duration: "1 Month",
    description: "Gained hands-on experience in software development and automation projects. Assisted in data management and system optimization tasks.",
  },
  {
    role: "Project Developer",
    company: "Online Course Project",
    duration: "Ongoing",
    description: "Developing automated systems and working on various technical projects as part of academic and self-learning initiatives.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-bg border-b border-line">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="meta-label">Professional Background</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Experience
          </motion.h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group border-b border-line py-12 flex flex-col md:flex-row md:items-baseline justify-between gap-8 hover:bg-line/20 transition-colors px-4"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xs font-mono text-muted italic">0{i + 1}</span>
                <div>
                  <h3 className="text-4xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-accent font-bold uppercase text-xs tracking-widest mt-2">
                    {exp.company}
                  </div>
                </div>
              </div>
              
              <div className="md:text-right max-w-md">
                <div className="meta-label mb-4">{exp.duration}</div>
                <p className="text-muted text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
