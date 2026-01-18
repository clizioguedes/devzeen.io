"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { siteConfig } from "@/lib/constants";
import { useIntl, FormattedMessage } from "react-intl";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const intl = useIntl();

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      toast.success(intl.formatMessage({ id: "contact.toast.success" }), {
        description: intl.formatMessage({ id: "contact.toast.successDesc" }),
      });

      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(intl.formatMessage({ id: "contact.toast.error" }), {
        description: intl.formatMessage({ id: "contact.toast.errorDesc" }),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
          <FormattedMessage id="contact.title" defaultMessage="Entre em Contato" />
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          <FormattedMessage id="contact.description" defaultMessage="Tem um projeto em mente ou quer conversar? Envie uma mensagem e vamos trabalhar juntos!" />
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                <FormattedMessage id="contact.form.title" defaultMessage="Envie uma Mensagem" />
              </CardTitle>
              <CardDescription>
                <FormattedMessage id="contact.form.description" defaultMessage="Preencha o formulário abaixo e entrarei em contato o mais breve possível." />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <FormattedMessage id="contact.form.name" defaultMessage="Nome" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={intl.formatMessage({ id: "contact.form.placeholder.name" })}
                            {...field}
                            className="min-h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <FormattedMessage id="contact.form.email" defaultMessage="E-mail" />
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={intl.formatMessage({ id: "contact.form.placeholder.email" })}
                            {...field}
                            className="min-h-11"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <FormattedMessage id="contact.form.message" defaultMessage="Mensagem" />
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={intl.formatMessage({ id: "contact.form.placeholder.message" })}
                            className="min-h-30 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full min-h-11 gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>{intl.formatMessage({ id: "contact.form.sending" })}</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {intl.formatMessage({ id: "contact.form.send" })}
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <Card>
              <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <FormattedMessage id="contact.info.findMe" defaultMessage="Ou me encontre nas redes sociais" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">
                  <FormattedMessage id="contact.info.email" defaultMessage="E-mail" />
                </h3>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {siteConfig.author.email}
                </a>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-3">
                  <FormattedMessage id="contact.info.findMe" defaultMessage="Ou me encontre nas redes sociais" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <FormattedMessage id="contact.info.follow" defaultMessage="Fique à vontade para me seguir e entrar em contato através das minhas redes sociais. Estou sempre aberto para discutir novos projetos e oportunidades de colaboração." />
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">
                <FormattedMessage id="contact.info.responseTime.title" defaultMessage="Horário de Resposta" />
              </h3>
              <p className="text-sm text-muted-foreground">
                <FormattedMessage id="contact.info.responseTime.desc" defaultMessage="Geralmente respondo dentro de 24-48 horas durante dias úteis. Para questões urgentes, entre em contato através das redes sociais." />
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
