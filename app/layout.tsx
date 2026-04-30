import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import IntlProviderWrapper from "@/components/intl-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "DevZeen - Desenvolvedor Full Stack",
  description: "Portfolio profissional de desenvolvimento web com React, Next.js e tecnologias modernas",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <IntlProviderWrapper>
            {children}
            <Toaster />
          </IntlProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
