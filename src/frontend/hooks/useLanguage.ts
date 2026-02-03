import { useState, useEffect, useCallback } from 'react';
import { es, en, Translations } from '../i18n';

export type Language = 'es' | 'en';

interface UseLanguageReturn {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LANGUAGE_KEY = 'portfolio-language';

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es';

  const savedLang = localStorage.getItem(LANGUAGE_KEY);
  if (savedLang === 'es' || savedLang === 'en') {
    return savedLang;
  }

  // Detect browser language
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'en' ? 'en' : 'es';
};

const translations: Record<Language, Translations> = {
  es,
  en,
};

export const useLanguage = (): UseLanguageReturn => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => prev === 'es' ? 'en' : 'es');
  }, []);

  return {
    language,
    t: translations[language],
    setLanguage,
    toggleLanguage,
  };
};
