import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key contributions across companies
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {experiences.reverse().map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 md:p-10 shadow-card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
                    {exp.role}
                  </h3>
                  <p className="text-xl font-semibold text-foreground">
                    {exp.company}
                  </p>
                  {exp.companyWebsite && (
                    <a
                      href={exp.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-2 text-muted-foreground mt-4 md:mt-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {exp.startDate
                        ? new Date(exp.startDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })
                        : ""}
                      {" - "}
                      {exp.endDate
                        ? new Date(exp.endDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Key Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-muted/50 rounded-lg p-4 hover:bg-muted transition-smooth"
                    >
                      <h5 className="font-semibold text-foreground mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: j * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 bg-primary/5 rounded-lg p-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
