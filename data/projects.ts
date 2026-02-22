export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'development' | 'devops' | 'ai' | 'fullstack';
  company?: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  highlights?: string[];
}

export const projectsData: Project[] = [
  {
    title: "Panini8 Platform",
    description: "Quiz platform with performance optimization and OCR utility",
    longDescription: "Built a comprehensive quiz platform with Next.js optimizations and Python-based OCR for PAN card data extraction.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    technologies: ["Next.js", "TanStack Query", "Python", "OCR", "TypeScript"],
    category: "fullstack",
    company: "Panini8 Software",
    liveUrl: "https://panini8.com/",
    metrics: [
      { label: "Page Load Speed", value: "+30%" },
      { label: "Data Extraction", value: "Automated" }
    ],
    highlights: [
      "Improved page load speed by 30% using Next.js Server Components and code splitting",
      "Implemented TanStack Query caching for efficient data revalidation",
      "Developed Python OCR utility for extracting structured data from PAN cards"
    ]
  },
  {
    title: "Filibot",
    description: "AI-powered evaluation framework with analytics",
    longDescription: "Architected an AI-based evaluation system that reduces manual moderation effort through intelligent automation.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    technologies: ["Python", "LLMs", "AI/ML", "Analytics", "Next.js"],
    category: "ai",
    company: "Panini8 Software",
    liveUrl: "https://filix.panini8.com/",
    metrics: [
      { label: "Manual Moderation Reduction", value: "70%" }
    ],
    highlights: [
      "Architected AI-based evaluation framework reducing manual moderation effort by 70%",
      "Built AI-powered analytics with trend forecasting capabilities",
      "Implemented automated summary generation for content analysis"
    ]
  },
  {
    title: "Take off with Tami",
    description: "Social media platform with real-time chat",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    technologies: ["Next.js", "WebSockets", "Tailwind CSS", "MongoDB"],
    category: "fullstack",
    company: "Unico Global",
    githubUrl: "https://github.com/RohanSinghProgrammer",
    highlights: [
      "Built responsive social media platform with real-time features",
      "Implemented WebSocket-based chat functionality",
      "Designed with TailwindCSS for mobile-first approach"
    ]
  },
  {
    title: "Zervise 2.0",
    description: "Modern UI with dark mode and responsive design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["React", "Redux", "Fluent UI", "Tailwind CSS"],
    category: "development",
    company: "WeAnalyz Technologies",
    highlights: [
      "Redesigned responsive UI with mobile adaptation and dark mode",
      "Managed state using Redux and Redux Async Thunk",
      "Built accessible components with Microsoft's Fluent UI"
    ]
  },
  {
    title: "CI/CD Pipeline with Blue/Green Deployment",
    description: "High-availability pipeline with zero-downtime deployments",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    technologies: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Trivy"],
    category: "devops",
    company: "Panini8 Software",
    metrics: [
      { label: "Deployment Lead Time", value: "-99%" },
      { label: "Vulnerabilities Fixed", value: "10+" }
    ],
    highlights: [
      "Architected high-availability CI/CD pipeline with zero-downtime Blue/Green deployment",
      "Integrated SonarQube, Trivy, and OWASP standards for comprehensive security",
      "Mitigated 10+ critical vulnerabilities in production systems"
    ]
  }
];