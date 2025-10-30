/**
 * Skills Section Component
 * 
 * Displays technical skills categorized by domain
 * Features animated progress bars and integration tags
 */

import { motion } from 'framer-motion';
import { technicalSkills } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Skills with progress bars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {Object.entries(technicalSkills).map(([key, category], categoryIndex) => {
              // Skip integrations category here
              if (key === 'integrations') return null;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 shadow-card"
                >
                  <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill: any, skillIndex: number) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Third-party integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-8 shadow-card"
          >
            <h3 className="text-xl font-bold mb-6 text-primary text-center">
              {technicalSkills.integrations.title}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technicalSkills.integrations.skills.map((integration, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium 
                           hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                >
                  {integration}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
