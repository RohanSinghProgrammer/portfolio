"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <Card className="p-4 flex items-center">
                  <Mail className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:john@example.com" className="text-muted-foreground">
                      john@example.com
                    </a>
                  </div>
                </Card>
                <Card className="p-4 flex items-center">
                  <Phone className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground">
                      +1 (234) 567-890
                    </a>
                  </div>
                </Card>
                <Card className="p-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-4 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}