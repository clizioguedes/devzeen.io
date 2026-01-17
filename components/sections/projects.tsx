"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section
      id="projects"
      className="container max-w-screen-2xl px-4 md:px-8 py-12 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Produtos Desenvolvidos
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          Projetos próprios e produtos SaaS que desenvolvi utilizando as mais modernas
          tecnologias web.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow border-t-4 ${project.borderColor || 'border-t-transparent'}`}>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 min-h-11"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1 min-h-11"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
