"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, TrendingUp, Shield, Zap, Code2, Globe } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

const categoryIcons = {
  development: <Code2 className="h-4 w-4" />,
  devops: <Shield className="h-4 w-4" />,
  ai: <Zap className="h-4 w-4" />,
  fullstack: <Globe className="h-4 w-4" />,
};

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            A collection of projects showcasing my journey from development to DevOps
          </p>

          <Tabs defaultValue="all" className="mb-8" onValueChange={setFilter}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {categoryIcons[project.category]}
                        <span className="capitalize">{project.category}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    {project.company && (
                      <p className="text-sm text-primary mb-1">{project.company}</p>
                    )}
                    
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="bg-primary/5 rounded-lg p-2 text-center">
                            <p className="text-lg font-bold text-primary">{metric.value}</p>
                            <p className="text-xs text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {project.highlights && (
                      <div className="mb-4 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <p key={i} className="text-xs flex items-start gap-1">
                            <TrendingUp className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </p>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex gap-4 mt-auto pt-4">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}