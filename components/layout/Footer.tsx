"use client";

import { Github, Twitter, Linkedin, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary mr-2" />
            <span className="font-bold">DevPortfolio</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}