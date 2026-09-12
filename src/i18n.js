import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "./locales/pt-BR";
import en from "./locales/en";
import es from "./locales/es";

const supportedLanguages = ["pt-BR", "en", "es"];
const storedLanguage = localStorage.getItem("portfolio-language");
const browserLanguage = navigator.language?.toLowerCase().startsWith("es")
  ? "es"
  : navigator.language?.toLowerCase().startsWith("en")
    ? "en"
    : "pt-BR";

void i18n.use(initReactI18next).init({
  resources: {
    "pt-BR": { translation: ptBR },
    en: { translation: en },
    es: { translation: es },
  },
  lng: supportedLanguages.includes(storedLanguage) ? storedLanguage : browserLanguage,
  fallbackLng: "pt-BR",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("portfolio-language", language);
});

export default i18n;
