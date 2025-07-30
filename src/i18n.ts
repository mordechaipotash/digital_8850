import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import frTranslation from './locales/fr/translation.json';
import zhTranslation from './locales/zh/translation.json';
import htTranslation from './locales/ht/translation.json';
import ruTranslation from './locales/ru/translation.json';
import koTranslation from './locales/ko/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'es', 'zh', 'fr', 'ht', 'ru', 'ko'],
    
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
      fr: {
        translation: frTranslation
      },
      zh: {
        translation: zhTranslation
      },
      ht: {
        translation: htTranslation
      },
      ru: {
        translation: ruTranslation
      },
      ko: {
        translation: koTranslation
      }
    },
    
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
