"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig, socialLinks } from "@/lib/constants";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Mail, // fallback
};

export function Hero() {
  return (
    <section
      id="hero"
      className="container max-w-screen-2xl px-4 md:px-8 py-12 md:py-20 lg:py-28"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:gap-6 order-2 lg:order-1"
        >
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
            >
              Olá, eu sou{" "}
              <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {siteConfig.author.name}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground"
            >
              Desenvolvedor Full Stack
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl"
          >
            {siteConfig.author.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <ScrollLink to="projects" smooth={true} offset={-80} duration={500}>
              <Button size="lg" className="w-full sm:w-auto min-h-11 gap-2">
                Ver Projetos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} offset={-80} duration={500}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-11 gap-2"
              >
                Entre em Contato
              </Button>
            </ScrollLink>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-3"
          >
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

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/60 rounded-full blur-2xl opacity-20 animate-pulse" />
            <Avatar className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 border-border relative">
              <AvatarImage
                src={siteConfig.author.avatar}
                alt={siteConfig.author.name}
              />
              <AvatarFallback className="text-4xl md:text-5xl lg:text-6xl">
                {siteConfig.author.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
