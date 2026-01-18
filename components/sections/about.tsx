"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/constants";
import { FormattedMessage, useIntl } from "react-intl";

export function About() {
  const intl = useIntl();
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
          <FormattedMessage id="about.title" defaultMessage="Sobre Mim" />
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
              <FormattedMessage
                id="about.paragraph1"
                defaultMessage="Formado em {degree} pelo IFRN - Campus Currais Novos em {year}, atuo desde {startYear} no desenvolvimento de software, tanto em empresas quanto em projetos diretos para clientes."
                values={{
                  degree: (
                    <strong className="text-foreground">
                      {intl.formatMessage({ id: "about.degree" })}
                    </strong>
                  ),
                  year: "2019",
                  startYear: "2020",
                }}
              />
            </p>
            <p className="text-base leading-relaxed">
              <FormattedMessage
                id="about.paragraph2"
                defaultMessage="Ao longo de {yearsCareer} de carreira, trabalhei em projetos de {segments}: indústria marítima, e-commerce, aplicativos mobile, sistemas corporativos e soluções para grandes multinacionais."
                values={{
                  yearsCareer: (
                    <strong className="text-foreground">
                      {intl.formatMessage({ id: "about.yearsCareer" })}
                    </strong>
                  ),
                  segments: (
                    <strong className="text-foreground">
                      {intl.formatMessage({ id: "about.segments" })}
                    </strong>
                  ),
                }}
              />
            </p>
            <p className="text-base leading-relaxed">
              <FormattedMessage
                id="about.paragraph3"
                defaultMessage="Com {projectsCount} projetos entregues, hoje foco em criar produtos escaláveis e de alto impacto, combinando as melhores práticas de desenvolvimento com tecnologias modernas."
                values={{
                  projectsCount: (
                    <strong className="text-foreground">
                      {intl.formatMessage({ id: "about.projectsCount" })}
                    </strong>
                  ),
                }}
              />
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
          <div className="grid gap-4">
            {/* Frontend */}
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">
                  <FormattedMessage id="about.category.frontend" defaultMessage="Frontend" />
                </h3>
                <span className="text-xs text-muted-foreground">{skillsByCategory.frontend.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.frontend.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="rounded-md">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">
                  <FormattedMessage id="about.category.backend" defaultMessage="Backend" />
                </h3>
                <span className="text-xs text-muted-foreground">{skillsByCategory.backend.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.backend.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="rounded-md">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-xl border border-border/60 bg-card/40 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">
                  <FormattedMessage id="about.category.tools" defaultMessage="Ferramentas" />
                </h3>
                <span className="text-xs text-muted-foreground">{skillsByCategory.tools.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory.tools.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="rounded-md">
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

