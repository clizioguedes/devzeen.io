"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/constants";
import { FormattedMessage, useIntl } from "react-intl";

type ColorVariant = "primary" | "secondary" | "accent";

const colorConfig: Record<
  ColorVariant,
  { border: string; glow: string; badge: string; number: string }
> = {
  primary: {
    border: "border-primary/50",
    glow: "bg-primary",
    badge: "border-primary/30 text-primary bg-primary/5",
    number: "text-primary",
  },
  secondary: {
    border: "border-secondary/50",
    glow: "bg-secondary",
    badge: "border-secondary/30 text-secondary bg-secondary/5",
    number: "text-secondary",
  },
  accent: {
    border: "border-accent/50",
    glow: "bg-accent",
    badge: "border-accent/40 text-accent bg-accent/10",
    number: "text-accent",
  },
};

export function Projects() {
  const intl = useIntl();

  return (
    <section id="projects" className="container max-w-screen-2xl py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-8 md:mb-12"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary rounded-full" />
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            <FormattedMessage id="projects.label" defaultMessage="Portfólio" />
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <FormattedMessage id="projects.title" defaultMessage="Produtos Desenvolvidos" />
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          <FormattedMessage
            id="projects.description"
            defaultMessage="Projetos próprios e produtos SaaS que desenvolvi utilizando as mais modernas tecnologias web."
          />
        </p>
      </motion.div>

      <motion.div
        layout
        className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => {
            const variant = (project.colorVariant ?? "primary") as ColorVariant;
            const color = colorConfig[variant];
            const description = intl.formatMessage(
              { id: `projects.items.${project.id}.description` },
              { defaultMessage: project.description }
            );

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group"
              >
                <div
                  className={`relative h-full flex flex-col overflow-hidden rounded-xl border-2 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color.border}`}
                >
                  {/* Header */}
                  <div className="relative p-6 pb-4 space-y-3">
                    <span
                      className={`font-mono text-xs font-semibold tracking-widest ${color.number}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-bold leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {description}
                    </p>
                  </div>

                  {/* Tech badges */}
                  <div className="relative flex-1 px-6 py-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs font-medium ${color.badge}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="relative p-6 pt-4">
                    {project.liveUrl ? (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="w-full min-h-11 group/btn"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                          {intl.formatMessage({ id: "projects.demo" })}
                        </a>
                      </Button>
                    ) : (
                      <div className={`h-px w-full rounded-full opacity-20 ${color.glow}`} />
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
