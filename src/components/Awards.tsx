/**
 * Awards Section Component
 * 
 * Displays achievements and recognitions
 */

import { motion } from 'framer-motion';
import { awards } from '@/data/portfolio';
import { Trophy, Star, Award } from 'lucide-react';

// Icon mapping
const iconMap = {
  trophy: Trophy,
  star: Star,
  award: Award
};

export function Awards() {
  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honored for excellence and outstanding contributions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => {
              const Icon = iconMap[award.icon as keyof typeof iconMap] || Trophy;
              
              return (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-8 shadow-card hover:shadow-elegant transition-smooth group"
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:scale-110 transition-smooth">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Year badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {award.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-gradient">
                    {award.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm font-medium text-foreground mb-3">
                    {award.organization}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
