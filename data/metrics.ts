export interface Metric {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

export const metricsData: Metric[] = [
  {
    value: "99%",
    label: "Deployment Lead Time Reduction",
    description: "Through Blue/Green CI/CD pipeline at Panini8"
  },
  {
    value: "40%",
    label: "Latency Reduction",
    description: "Using multi-layer SWR caching at Abekus AI"
  },
  {
    value: "70%",
    label: "Manual Moderation Reduction",
    description: "AI-powered evaluation framework"
  },
  {
    value: "30+",
    label: "Hours Saved Weekly",
    description: "AI-driven reporting engine"
  },
  {
    value: "10+",
    label: "Critical Vulnerabilities Fixed",
    description: "Through security integration"
  },
  {
    value: "8.53",
    label: "CGPA",
    description: "B.Tech Computer Science"
  }
];