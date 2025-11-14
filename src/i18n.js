import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// This is the part that is causing the error if the path is wrong
import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationMAI from './locales/mai/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  hi: {
    translation: translationHI
  },
  mai: {
    translation: translationMAI
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;