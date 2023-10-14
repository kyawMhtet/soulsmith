// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import thTranslation from './locales/th.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    th: {
        translation: thTranslation,
    },
};

// Check local storage for the user's language preference
const savedLanguage = localStorage.getItem('language');

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage || 'en', // Use savedLanguage or default to English
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
