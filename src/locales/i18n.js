import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: require('./en.json'),
            },
        },
        fallbackLng: 'en',
        debug: true
    });

export default i18n;