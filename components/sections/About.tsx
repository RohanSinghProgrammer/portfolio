"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="Profile"
                fill
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                As a final year Computer Science student with a strong focus on frontend development,
                I bring fresh perspectives and modern development practices to every project.
                Through my internship experiences, I've gained practical expertise in:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Building responsive web applications with React.js and Next.js",
                  "Implementing modern UI/UX designs using Tailwind CSS",
                  "Collaborating with teams using Git and Agile methodologies",
                  "Optimizing application performance and accessibility",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BadgeCheck className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-primary/5 border-primary/10">
                  <h3 className="font-bold text-2xl mb-1">1+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/10">
                  <h3 className="font-bold text-2xl mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}