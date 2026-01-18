"use client";

import * as React from "react";
import { motion, useAnimationControls, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/lib/constants";
import { FormattedMessage, useIntl } from "react-intl";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  twitter: Mail, // fallback
};

export function Hero() {
  const intl = useIntl();
  const reduceMotion = useReducedMotion();
  const floatControls = useAnimationControls();
  const [avatarError, setAvatarError] = React.useState(false);

  React.useEffect(() => {
    if (!reduceMotion) {
      floatControls.start("float");
    }
  }, [reduceMotion, floatControls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const floatVariants: Variants = {
    float: {
      x: [0, 2, 0, -2, 0],
      y: [0, -3, 0, 3, 0],
      transition: {
        duration: 4.5,
        ease: [0.42, 0, 0.58, 1],
        repeat: Infinity,
      },
    },
    rest: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0, 0, 0.58, 1],
      },
    },
  };
  return (
    <section
      id="hero"
      className="container max-w-screen-2xl py-12 md:py-20 lg:py-28"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Content */}
        <motion.div
          className="order-2 lg:order-1"
          variants={floatVariants}
          animate={reduceMotion ? "rest" : floatControls}
          onHoverStart={() => !reduceMotion && floatControls.start("rest")}
          onHoverEnd={() => !reduceMotion && floatControls.start("float")}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="space-y-2">
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
              >
                <FormattedMessage
                  id="hero.greeting"
                  defaultMessage={`Olá, eu sou {name}`}
                  values={{
                    name: (
                      <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {intl.formatMessage({ id: "author.name" })}
                      </span>
                    ),
                  }}
                />
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
              >
                <FormattedMessage id="hero.subtitle" defaultMessage="Desenvolvedor Full Stack" />
              </motion.p>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-2xl"
            >
              {intl.formatMessage({ id: "author.bio" })}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto min-h-11 gap-2" asChild>
                <a href="#projects">
                  <FormattedMessage id="hero.cta.projects" defaultMessage="Ver Projetos" />
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-11 gap-2"
                asChild
              >
                <a href="#contact">
                  <FormattedMessage id="hero.cta.contact" defaultMessage="Entre em Contato" />
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-11 w-11"
                    aria-label={social.name}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/60 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 border-border rounded-full overflow-hidden bg-muted flex items-center justify-center">
              {!avatarError && (
                <Image
                  src={siteConfig.author.avatar}
                  alt={intl.formatMessage({ id: "author.name" })}
                  fill
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                  className="object-cover"
                  priority
                  onError={() => setAvatarError(true)}
                />
              )}
              {avatarError && (
                <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-muted-foreground">
                  {intl.formatMessage({ id: "author.name" }).substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
