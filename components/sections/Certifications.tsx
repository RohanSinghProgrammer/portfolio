"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  Shield,
  Cloud,
  Code2,
  Server,
  Zap,
  TrendingUp,
  Clock,
} from "lucide-react";
import {certificationsData} from "@/data/certifications"

const iconMap: Record<string, any> = {
  AWS: Cloud,
  Kubernetes: Server,
  Terraform: Code2,
  default: Award,
};

const statusColors : any = {
  completed: "bg-green-500/10 text-green-500 border-green-500/20",
  "in-progress": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

export default function Certifications() {
  // Group certifications by status
  const completed = certificationsData.filter(cert => cert.status === 'completed');
  const inProgress = certificationsData.filter(cert => cert.status === 'in-progress');

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Credentials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validated expertise in cloud computing, container orchestration, and infrastructure automation
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4 text-center bg-primary/5 border-primary/10">
              <p className="text-2xl font-bold text-primary">{certificationsData.length}</p>
              <p className="text-xs text-muted-foreground">Total Certifications</p>
            </Card>
            <Card className="p-4 text-center bg-green-500/5 border-green-500/10">
              <p className="text-2xl font-bold text-green-500">{completed.length}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </Card>
            <Card className="p-4 text-center bg-yellow-500/5 border-yellow-500/10">
              <p className="text-2xl font-bold text-yellow-500">{inProgress.length}</p>
              <p className="text-xs text-muted-foreground">In Progress</p>
            </Card>
            <Card className="p-4 text-center bg-blue-500/5 border-blue-500/10">
              <p className="text-2xl font-bold text-blue-500">
                {certificationsData.reduce((acc, cert) => acc + cert.skills.length, 0)}
              </p>
              <p className="text-xs text-muted-foreground">Skills Validated</p>
            </Card>
          </div>

          {/* In Progress Section */}
          {inProgress.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-yellow-500" />
                <h3 className="text-xl font-semibold">Currently Pursuing</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {inProgress.map((cert, index) => (
                  <CertificationCard key={index} certification={cert} />
                ))}
              </div>
            </div>
          )}

          {/* Completed Section */}
          {completed.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-5 w-5 text-green-500" />
                <h3 className="text-xl font-semibold">Completed</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completed.map((cert: any, index: number) => (
                  <CertificationCard key={index} certification={cert} />
                ))}
              </div>
            </div>
          )}

          {/* Learning Path Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-center mb-8">Certification Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {certificationsData.map((cert: any, index: number) => {
                  const Icon = iconMap[cert.name.split(' ')[0]] || iconMap.default;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      </div>
                      
                      <Card className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <Badge variant="outline" className={statusColors[cert.status || 'completed']}>
                          {cert.status === 'in-progress' ? 'In Progress' : 'Completed'}
                        </Badge>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Journey</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Currently expanding expertise in cloud-native technologies and advanced DevOps practices. 
                Next stop: CKA and AWS Solutions Architect!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Always Learning
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Cloud Native
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Security Focused
                </Badge>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Certification Card Component
function CertificationCard({ certification }: { certification: any }) {
  const Icon = iconMap[certification.name.split(' ')[0]] || iconMap.default;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all border-primary/10 hover:border-primary/30">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 shrink-0">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold">{certification.name}</h3>
              <Badge variant="outline" className={statusColors[certification.status || 'completed']}>
                {certification.status === 'in-progress' ? 'In Progress' : 'Completed'}
              </Badge>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Building2 className="h-3.5 w-3.5 mr-2" />
                {certification.issuer}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 mr-2" />
                {certification.date}
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-xs font-semibold text-primary mb-2">SKILLS VALIDATED</p>
              <div className="flex flex-wrap gap-1.5">
                {certification.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-md text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {certification.credentialUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2"
                asChild
              >
                <a href={certification.credentialUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-2" />
                  Verify Credential
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}