"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Server,
  Database,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="h-8 w-8" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8" />,
    technologies: ["Node.js", "Python", "Java", "Express", "NestJS", "GraphQL"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8" />,
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <Card key={skill.category} className="p-6">
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}