"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences, skills } from "@/lib/constants";

export function About() {
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section
      id="about"
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
          Sobre Mim
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          Conheça mais sobre minha trajetória profissional e habilidades técnicas.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Experiência Profissional</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-lg md:text-xl">
                          {exp.position}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm md:text-base">{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <Badge variant="default" className="shrink-0">
                          Atual
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Habilidades Técnicas</h3>

          {/* Frontend */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-muted-foreground">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.frontend.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Backend */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-muted-foreground">
              Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.backend.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Tools */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-muted-foreground">
              Ferramentas
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillsByCategory.tools.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
