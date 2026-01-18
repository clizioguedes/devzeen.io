"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/constants";

export function About() {
  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section
      id="about"
      className="container max-w-screen-2xl py-12 md:py-20"
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
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-4 text-muted-foreground">
            <p className="text-base leading-relaxed">
              Formado em <strong className="text-foreground">Sistemas para Internet</strong> pelo IFRN - Campus Currais Novos em <strong className="text-foreground">2019</strong>, 
              atuo desde 2020 no desenvolvimento de software, tanto em empresas quanto em projetos diretos para clientes.
            </p>
            <p className="text-base leading-relaxed">
              Ao longo de <strong className="text-foreground">mais de 5 anos</strong> de carreira, trabalhei em projetos de <strong className="text-foreground">diversos segmentos</strong>: indústria 
              marítima, e-commerce, aplicativos mobile, sistemas corporativos e soluções para grandes 
              multinacionais.
            </p>
            <p className="text-base leading-relaxed">
              Com <strong className="text-foreground">mais de 15 projetos entregues</strong>, hoje foco em criar <strong className="text-foreground">produtos escaláveis e de alto impacto</strong>, combinando as melhores 
              práticas de desenvolvimento com tecnologias modernas.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-6">Habilidades Técnicas</h3>

          <div className="space-y-6">
            {/* Frontend */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.frontend.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.backend.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-muted-foreground">Ferramentas</h4>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.tools.map((skill) => (
                  <Badge key={skill.name} variant="secondary">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

