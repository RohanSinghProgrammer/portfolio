export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  status?: 'completed' | 'in-progress';
}

export const certificationsData: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Expected 2024",
    skills: ["AWS Fundamentals", "Cloud Concepts", "Security", "Billing", "Pricing"],
    status: "in-progress"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "Expected 2024",
    skills: ["Kubernetes Architecture", "Pod Networking", "Storage", "Security", "Troubleshooting"],
    status: "in-progress"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Expected 2024",
    skills: ["Infrastructure as Code", "Terraform CLI", "State Management", "Modules", "Cloud Provisioning"],
    status: "in-progress"
  },
  {
    name: "GitHub Actions",
    issuer: "GitHub",
    date: "2024",
    skills: ["CI/CD", "Workflows", "Actions", "Automation", "Self-hosted Runners"],
    status: "in-progress"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2024",
    skills: ["Containerization", "Dockerfile", "Compose", "Swarm", "Security"],
    status: "in-progress"
  }
];