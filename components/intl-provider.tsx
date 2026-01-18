"use client";

import * as React from "react";
import { IntlProvider } from "react-intl";

import en from "../locales/en.json";
import pt from "../locales/pt.json";
import es from "../locales/es.json";

const MESSAGES: Record<string, Record<string, string>> = {
  en,
  pt,
  es,
};

type LocaleContextValue = {
  locale: string;
  setLocale: (l: string) => void;
};

const LocaleContext = React.createContext<LocaleContextValue | undefined>(
  undefined
);

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within IntlProviderWrapper");
  return ctx;
}

export function IntlProviderWrapper({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<string>(
    typeof window !== "undefined"
      ? (localStorage.getItem("locale") || navigator.language.split("-")[0] || "pt")
      : "pt"
  );

  React.useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch (_) {}
  }, [locale]);

  const messages = MESSAGES[locale] || MESSAGES["pt"];

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages} defaultLocale="pt">
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

export default IntlProviderWrapper;
