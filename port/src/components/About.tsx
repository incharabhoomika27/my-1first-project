import { motion } from "motion/react";
import { GraduationCap, Award, Code2 } from "lucide-react";

const skills = [
  { name: "Python", level: 85 },
  { name: "SQL", level: 90 },
  { name: "Visual Studio", level: 75 },
  { name: "Project Management", level: 80 },
  { name: "Communication", level: 95 },
  { name: "Time Management", level: 90 },
];

const education = [
  {
    degree: "BCA Graduation",
    institution: "Vidya First Grade College",
    year: "2026",
    score: "8.5 CGPA",
  },
];

const certifications = [
  { name: "Database Management System", provider: "Great Learning" },
  { name: "SQL and Data Science", provider: "Great Learning" },
  { name: "Python Fundamentals for Beginners", provider: "Great Learning" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg border-b border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Bio & Skills */}
          <div>
            <div className="meta-label">Biography</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold tracking-tighter mb-8 uppercase"
            >
              The Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted leading-relaxed mb-12 text-lg"
            >
              I am a dedicated BCA student with a strong foundation in computer applications and a keen interest in software development. 
              My goal is to leverage my technical skills in Python and SQL to contribute to innovative projects and grow professionally 
              within a dynamic organization. I value continuous learning and meaningful contributions.
            </motion.p>

            <div className="space-y-8">
              <div className="meta-label">Skill Matrix</div>
              {skills.map((skill, i) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-3 items-baseline">
                    <span className="text-xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors">{skill.name}</span>
                    <span className="text-xs font-mono text-muted italic">{skill.level}%</span>
                  </div>
                  <div className="h-[1px] bg-line relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-16">
            <div>
              <div className="meta-label">Academic Path</div>
              <div className="space-y-8 mt-8">
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="pb-8 border-b border-line group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-3xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors">{edu.degree}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-line rounded-full text-muted">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-4">{edu.institution}</p>
                    <div className="text-accent font-black text-xl tracking-tighter">{edu.score}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="meta-label">Recognition</div>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 border border-line hover:border-accent transition-colors group"
                  >
                    <p className="text-sm font-bold uppercase tracking-tight mb-2 group-hover:text-accent">{cert.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted">{cert.provider}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
