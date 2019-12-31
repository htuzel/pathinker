import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

//import EN from "./locales/en.json";
import TR from "./locales/tr.json";

const resources = {
    en: { translation: TR },
    tr: { translation: TR }
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: false,
        caches: ["localStorage", "cookie"],

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
