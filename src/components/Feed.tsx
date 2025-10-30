import { motion } from "framer-motion";
import { Calendar, Code, BookOpen, Trophy, Briefcase, Lightbulb } from "lucide-react";
import { feedActivities } from "@/data/portfolio";

/**
 * Feed Component - Activity Timeline
 * Displays daily updates, learning activities, coding progress, and achievements
 * Data is managed in src/data/portfolio.ts for easy editing
 */

// Icon mapping for different activity types
const activityIcons = {
  learning: BookOpen,
  coding: Code,
  achievement: Trophy,
  work: Briefcase,
  idea: Lightbulb,
  default: Calendar,
};

// Color mapping for activity types
const activityColors = {
  learning: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  coding: "text-green-500 bg-green-500/10 border-green-500/20",
  achievement: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
  work: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  idea: "text-pink-500 bg-pink-500/10 border-pink-500/20",
  default: "text-primary bg-primary/10 border-primary/20",
};

export default function Feed() {
  return (
    <section id="feed" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Activity Feed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Daily updates on my learning journey, coding projects, and professional activities
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-transparent" />

          {/* Activity Items */}
          <div className="space-y-8">
            {feedActivities.reverse().map((activity, index) => {
              const Icon = activityIcons[activity.type as keyof typeof activityIcons] || activityIcons.default;
              const colorClass = activityColors[activity.type as keyof typeof activityColors] || activityColors.default;

              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Icon Circle */}
                  <div className={`absolute left-4 -translate-x-1/2 w-8 h-8 rounded-full ${colorClass} border-2 flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Activity Card */}
                  <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3" />
                          {activity.date}
                        </p>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full ${colorClass} border capitalize`}>
                        {activity.type}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-3">
                      {activity.description}
                    </p>

                    {/* Tags */}
                    {activity.tags && activity.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {activity.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 bg-secondary/50 text-secondary-foreground rounded border border-secondary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Optional Link */}
                    {activity.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-primary hover:underline"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Empty State (shows when no activities) */}
        {feedActivities.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">No activities yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
