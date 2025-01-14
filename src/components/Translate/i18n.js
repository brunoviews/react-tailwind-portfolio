import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: "en", // Idioma inicial
  fallbackLng: "en", // Idioma de respaldo si no se encuentra traducción
  interpolation: {
    escapeValue: false, // React ya escapa automáticamente el contenido
  },
});

export default i18n;
