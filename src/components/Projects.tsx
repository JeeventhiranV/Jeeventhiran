/**
 * Projects Section Component
 * 
 * Showcases portfolio projects with detailed information
 */
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ExternalLink, Layers, TrendingUp, Github, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications driving business impact
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.reverse().map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden shadow-elegant hover:shadow-card transition-smooth"
            >
              {/* Preview Image */}
             {project.preview && (
  <div className="relative w-full aspect-[16/9] overflow-hidden group">
    <img
      src={project.preview}
      alt={`${project.title} Preview`}
      className="w-full h-full object-contain md:object-cover transform group-hover:scale-105 transition-transform duration-500 bg-black/5"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> Live Demo
          </Button>
        </a>
      )}
      {project.source && (
        <a href={project.source} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex items-center gap-2">
            <Github className="w-4 h-4" /> View Code
          </Button>
        </a>
      )}
    </div>
  </div>
)}

              {/* Project Details */}
              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">{project.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
                      {project.title}
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Technology Stack</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(project.techStack).map(([category, techs]) => (
                      <div key={category}>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(techs as string[]).map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ExternalLink className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact & My Role */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Impact */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-primary">
                      <TrendingUp className="h-5 w-5" />
                      Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent text-lg">•</span>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">My Contributions</h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent text-lg">•</span>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
