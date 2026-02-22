"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timeline";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  GitMerge,
  Cloud,
  Zap,
  Award,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const iconMap = {
  Code2: Code2,
  GitMerge: GitMerge,
  Cloud: Cloud,
  Zap: Zap,
  Award: Award,
  GraduationCap: GraduationCap,
};

const typeColors = {
  education: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  internship: "bg-green-500/10 text-green-500 border-green-500/20",
  "full-time": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  transition: "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">My Journey</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From developer to DevOps - a story of continuous learning and evolution
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const Icon = iconMap[event.icon as keyof typeof iconMap] || Briefcase;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row ${
                      isEven ? "md:flex-row-reverse" : ""
                    } items-start md:items-center gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-mono text-primary">
                                {event.period}
                              </span>
                              <Badge variant="outline" className={typeColors[event.type]}>
                                {event.type}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold">{event.title}</h3>
                            {event.company && (
                              <p className="text-muted-foreground mb-2">{event.company}</p>
                            )}
                            <p className="text-sm text-muted-foreground mb-4">
                              {event.description}
                            </p>
                            
                            <ul className="space-y-2 mb-4">
                              {event.details.map((detail, i) => (
                                <li key={i} className="text-sm flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {detail}
                                </li>
                              ))}
                            </ul>

                            {event.technologies && (
                              <div className="flex flex-wrap gap-2">
                                {event.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}

                            {event.achievements && (
                              <div className="mt-4 pt-4 border-t">
                                <p className="text-xs font-semibold text-primary mb-2">KEY ACHIEVEMENTS</p>
                                {event.achievements.map((achievement, i) => (
                                  <p key={i} className="text-sm flex items-center gap-2">
                                    <Zap className="h-3 w-3 text-primary" />
                                    {achievement}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}