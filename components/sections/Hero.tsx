"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    setPositions(
      Array.from({ length: 24 }, () => ({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
      }))
    );
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-4 p-4 opacity-30">
        {positions.map((position, i) => (
          <div
            key={i}
            className="h-full w-full bg-primary/10 rounded-full blur-3xl"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              Available for Internship Opportunities
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Building Modern Web Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Final year student with a passion for React.js and modern web development. 
            1+ year of hands-on experience through internships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="#projects">View My Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="inline-flex items-center"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}