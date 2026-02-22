"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Cloud,
  Globe,
  Database,
  Shield,
  Users,
} from "lucide-react";
import { skillsData } from "@/data/skills";

const iconMap: Record<string, any> = {
  Code2: Code2,
  Cloud: Cloud,
  Globe: Globe,
  Database: Database,
  Shield: Shield,
  Users: Users,
};

const levelToPercentage = (level: string = "intermediate") => {
  const levels = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 95,
  };
  return levels[level as keyof typeof levels] || 50;
};

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
          <h2 className="text-3xl font-bold text-center mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit and professional competencies
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => {
              const Icon = iconMap[category.icon] || Code2;
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-center mb-6">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold ml-3">{category.name}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            {/* {skill.years && (
                              <span className="text-xs text-muted-foreground">
                                {skill.years} {skill.years === 1 ? 'year' : 'years'}
                              </span>
                            )} */}
                          </div>
                          <Progress 
                            value={levelToPercentage(skill.level)} 
                            className="h-1.5"
                          />
                          {skill.description && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}