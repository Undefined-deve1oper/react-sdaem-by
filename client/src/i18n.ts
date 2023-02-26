import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations";

i18n.use(initReactI18next).init({
    lng: "ru",
    fallbackLng: "en",
    resources: {
        ru: {
            translation: translations.ru
        },
        en: {
            translation: translations.en
        }
    }
});

export default i18n;
