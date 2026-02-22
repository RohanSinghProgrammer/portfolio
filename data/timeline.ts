export interface TimelineEvent {
  period: string;
  title: string;
  company?: string;
  description: string;
  icon: 'Code2' | 'GitMerge' | 'Cloud' | 'Zap' | 'Award' | 'GraduationCap';
  details: string[];
  technologies?: string[];
  achievements?: string[];
  type: 'education' | 'internship' | 'full-time' | 'transition';
}

export const timelineEvents: TimelineEvent[] = [
  {
    period: "2021 – Present",
    title: "B.Tech in Computer Science",
    company: "Swami Vivekananda University",
    description: "Pursuing degree with focus on software engineering and distributed systems",
    icon: "GraduationCap",
    type: "education",
    details: [
      "CGPA: 8.53 / 10",
      "Coursework: Data Structures, Computer Networking, OS, OOP, DBMS",
      "Active participant in hackathons and technical events"
    ],
    technologies: ["C++", "Python", "Java", "SQL"]
  },
  {
    period: "Sep 2022 – Dec 2022",
    title: "ReactJS Developer Intern",
    company: "Six Sense Mobility",
    description: "Developed car dashboard interfaces with real-time vehicle data",
    icon: "Code2",
    type: "internship",
    details: [
      "Built responsive car dashboard UI using MUI and TailwindCSS",
      "Integrated REST APIs for real-time vehicle performance data",
      "Created user-friendly interfaces with React and JavaScript"
    ],
    technologies: ["React", "Material UI", "Tailwind CSS", "REST APIs"]
  },
  {
    period: "Jan 2023 – April 2023",
    title: "NextJS Developer Intern",
    company: "Unico Global",
    description: "Built social media platform with real-time features",
    icon: "Code2",
    type: "internship",
    details: [
      "Developed 'Take off with Tami' social platform using Next.js",
      "Implemented real-time chat functionality with WebSockets",
      "Styled components with TailwindCSS for responsive design"
    ],
    technologies: ["Next.js", "WebSockets", "Tailwind CSS", "React"]
  },
  {
    period: "Jan 2024 – May 2024",
    title: "ReactJS Developer Intern",
    company: "WeAnalyz Technologies",
    description: "Designed and developed Zervise 2.0 with modern UI patterns",
    icon: "Code2",
    type: "internship",
    details: [
      "Created responsive Zervise 2.0 UI with mobile adaptation and dark mode",
      "Managed complex application state using Redux and Redux Async Thunk",
      "Built accessible UI components with Microsoft's Fluent UI"
    ],
    technologies: ["React", "Redux", "Fluent UI", "Tailwind CSS"]
  },
  {
    period: "Aug 2024 – Dec 2024",
    title: "ReactJS Developer Intern",
    company: "Abekus AI",
    description: "Optimized performance and redesigned AI platform UI",
    icon: "Zap",
    type: "internship",
    details: [
      "Reduced platform latency by 40% using multi-layer SWR caching strategy",
      "Redesigned UI/UX with Tailwind CSS and Shadcn UI",
      "Achieved near-perfect Google Lighthouse scores with React Server Components"
    ],
    technologies: ["React", "Next.js", "SWR", "Tailwind CSS", "Shadcn UI"],
    achievements: ["40% latency reduction", "Near-perfect Lighthouse score"]
  },
  {
    period: "June 2025 – Present",
    title: "DevOps Engineer",
    company: "Panini8 Software",
    description: "Architecting CI/CD pipelines and AI-driven systems",
    icon: "Cloud",
    type: "full-time",
    details: [
      "Architected high-availability CI/CD pipeline with zero-downtime Blue/Green deployment",
      "Built AI-driven reporting engine using LLMs, saving 30 hours/week of manual analysis",
      "Integrated SonarQube, Trivy, and OWASP standards, mitigating 10+ critical vulnerabilities",
      "Built quiz module with 30% faster page loads using Next.js optimizations"
    ],
    technologies: ["Jenkins", "Docker", "SonarQube", "Trivy", "Next.js", "Python", "LLMs"],
    achievements: ["99% reduction in deployment lead time", "30 hours/week saved", "10+ vulnerabilities fixed"]
  }
];