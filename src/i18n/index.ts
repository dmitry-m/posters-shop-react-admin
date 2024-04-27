import polyglotI18nProvider from "ra-i18n-polyglot";

import russianMessages from "./ru";

export const i18nProvider = polyglotI18nProvider(
  (locale) => {
    if (locale === "en") {
      return import("./en").then((messages) => messages.default);
    }

    // Always fallback on russian
    return russianMessages;
  },
  "ru",
  [
    { locale: "en", name: "English" },
    { locale: "ru", name: "Русский" },
  ],
);

export default i18nProvider;
