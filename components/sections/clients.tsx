"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { clients } from "@/lib/constants";

export function Clients() {
  return (
    <section
      id="clients"
      className="container max-w-screen-2xl py-12 md:py-20 bg-muted/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-8 md:mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Clientes & Parceiros
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Empresas e organizações que contrataram meus serviços para desenvolver
          soluções digitais customizadas e de alto impacto.
        </p>
      </motion.div>

      <div className="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center gap-4 h-full">
                <div className="relative w-full aspect-square max-w-50 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-105 p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-2">
                    {client.name}
                  </h3>
                  {client.description && (
                    <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {client.description}
                    </p>
                  )}
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
                    >
                      Visitar site
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
