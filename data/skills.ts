export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    years?: number;
    description?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Go", level: "intermediate", years: 1 },
      { name: "Python", level: "advanced", years: 3 },
      { name: "JavaScript", level: "expert", years: 4 },
      { name: "TypeScript", level: "advanced", years: 3 },
      { name: "HCL", level: "intermediate", years: 1 }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: "Cloud",
    skills: [
      { name: "Docker", level: "advanced", years: 2 },
      { name: "Kubernetes", level: "intermediate", years: 1 },
      { name: "Jenkins", level: "advanced", years: 1 },
      { name: "GitHub Actions", level: "advanced", years: 2 },
      { name: "Nginx", level: "intermediate", years: 1.5 },
      { name: "AWS", level: "intermediate", years: 1 },
      { name: "SonarQube", level: "advanced", years: 1 }
    ]
  },
  {
    name: "Web Development",
    icon: "Globe",
    skills: [
      { name: "React.js", level: "expert", years: 4 },
      { name: "Next.js", level: "expert", years: 3 },
      { name: "Node.js", level: "advanced", years: 3 },
      { name: "Express.js", level: "advanced", years: 3 },
      { name: "React Native", level: "intermediate", years: 1.5 },
      { name: "REST APIs", level: "expert", years: 4 }
    ]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "advanced", years: 3 },
      { name: "PostgreSQL", level: "advanced", years: 2.5 },
      { name: "MongoDB", level: "advanced", years: 3 }
    ]
  },
  {
    name: "Security & Testing",
    icon: "Shield",
    skills: [
      { name: "SAST (SonarQube)", level: "advanced", years: 1 },
      { name: "Container Scanning (Trivy)", level: "intermediate", years: 1 },
      { name: "OWASP Standards", level: "intermediate", years: 1 },
      { name: "Performance Optimization", level: "expert", years: 3 }
    ]
  },
  {
    name: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Communication", level: "advanced" },
      { name: "Collaboration", level: "advanced" },
      { name: "Problem Solving", level: "expert" },
      { name: "Leadership", level: "intermediate" },
      { name: "Project Management", level: "intermediate" },
      { name: "Presentation Skills", level: "advanced" }
    ]
  }
];