"use client";

import { Github, Linkedin, Code2 } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold">{personalInfo.name}</span>
            <span className="text-muted-foreground ml-2">· DevOps Engineer</span>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}