"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/lib/constants";
import { FormattedMessage, useIntl } from "react-intl";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const intl = useIntl();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container max-w-screen-2xl py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold">{intl.formatMessage({ id: "site.name" }) || "DevZeen"}</h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              {intl.formatMessage({ id: "site.description" }) || "Portfolio profissional de desenvolvimento web"}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              <FormattedMessage id="footer.quickLinks" defaultMessage="Links Rápidos" />
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#hero"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FormattedMessage id="nav.hero" defaultMessage="Início" />
              </Link>
              <Link
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FormattedMessage id="nav.projects" defaultMessage="Projetos" />
              </Link>
              <Link
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FormattedMessage id="nav.about" defaultMessage="Sobre" />
              </Link>
              <Link
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <FormattedMessage id="nav.contact" defaultMessage="Contato" />
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">
              <FormattedMessage id="footer.social" defaultMessage="Redes Sociais" />
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.icon as keyof typeof socialIcons];
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
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-center sm:text-left">
            {intl.formatMessage({ id: "footer.copyright" }, { year: currentYear, name: intl.formatMessage({ id: "site.name" }) || "DevZeen" })}
          </p>
        </div>
      </div>
    </footer>
  );
}
