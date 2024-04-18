import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "fa",
    locales: ["en", "fa"],
    i18nextServer: {
      debug: true,
      backend: {
        ns: ["translation"],
        loadPath: "/locales/{{lng}}/{{ns}}.json",
      },
    },
  });

export default i18n;
