/**
 * About Section Component
 * 
 * Displays personal introduction and professional summary
 */

import { motion } from 'framer-motion';
import { personalInfo, experiences } from '@/data/portfolio';
import { Code2, Database, Layers, Zap } from 'lucide-react';
import { calculateExperience } from '@/lib/utils';
const currentExperience =
  experiences.find((exp) => !exp.endDate) ||
  experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())[0];
// Highlight cards data
const highlights = [
  {
    icon: Code2,
    title: calculateExperience(),
    description: "Professional Experience"
  },
  {
    icon: Database,
    title: "Enterprise Scale",
    description: "Production Applications"
  },
  {
    icon: Layers,
    title: "Full Stack",
    description: "Java & Web Technologies"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "30% Query Optimization"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building efficient and scalable solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main about content */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="glass rounded-2xl p-8 md:p-12 mb-12 shadow-card"
>
  {/* About paragraph */}
  <p className="text-lg text-foreground leading-relaxed mb-6">
    {personalInfo.about}
  </p>

  {/* Dynamic Current Job paragraph */}
  {currentExperience && (
    <p className="text-md text-muted-foreground leading-relaxed">
      Currently working at{" "}
      <a
        href={currentExperience.companyWebsite}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-primary hover:underline"
      >
        {currentExperience.company}
      </a>{" "}
      as a{" "}
      <span className="font-semibold text-foreground">
        {currentExperience.role}
      </span>
      , I specialize in developing robust backend systems, optimizing database
      performance, and integrating third-party services to deliver comprehensive
      solutions. My expertise spans across the entire development lifecycle,
      from requirement analysis to deployment and maintenance.
    </p>
  )}
</motion.div>


          {/* Highlight cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center hover:shadow-elegant transition-smooth group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-smooth">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gradient">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
