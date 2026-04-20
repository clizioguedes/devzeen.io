import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "O nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .email({ message: "Por favor, insira um e-mail válido" })
    .min(5, { message: "O e-mail deve ter pelo menos 5 caracteres" })
    .max(100, { message: "O e-mail deve ter no máximo 100 caracteres" }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "A mensagem deve ter no máximo 1000 caracteres" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;