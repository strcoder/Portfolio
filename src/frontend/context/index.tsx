import React, { createContext, useContext, useMemo } from 'react';
import { useProjects, useSocialMedia, useTheme, ThemeType, useLanguage, Language } from '../hooks';
import { Project, SocialMedia } from '../services/api';
import { Translations } from '../i18n/es';

interface AppContextProps {
  // Theme
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;

  // Language
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;

  // Projects
  projects: Project[];
  projectsLoading: boolean;
  projectsError: string | null;

  // Social Media
  socialMedia: SocialMedia;
  socialMediaLoading: boolean;
  socialMediaError: string | null;

  // Config
  paypal: string;

  // Legacy dispatch for backward compatibility
  dispatch: (action: { type: string; [key: string]: any }) => void;
}

const defaultSocialMedia: SocialMedia = {
  github: 'https://github.com',
  twitch: 'https://twitch.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
};

import { es } from '../i18n';

export const Context = createContext<AppContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
  language: 'es',
  t: es,
  setLanguage: () => {},
  toggleLanguage: () => {},
  projects: [],
  projectsLoading: true,
  projectsError: null,
  socialMedia: defaultSocialMedia,
  socialMediaLoading: true,
  socialMediaError: null,
  paypal: '',
  dispatch: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const { language, t, setLanguage, toggleLanguage } = useLanguage();
  const { projects, loading: projectsLoading, error: projectsError } = useProjects();
  const { socialMedia, loading: socialMediaLoading, error: socialMediaError } = useSocialMedia();

  const paypal = import.meta.env.VITE_PAYPAL_ID || '';

  // Legacy dispatch for backward compatibility with existing components
  const dispatch = (action: { type: string; [key: string]: any }) => {
    switch (action.type) {
      case 'SET_THEME':
        setTheme(action.theme as ThemeType);
        break;
      default:
        console.warn('Unknown action type:', action.type);
    }
  };

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
      language,
      t,
      setLanguage,
      toggleLanguage,
      projects,
      projectsLoading,
      projectsError,
      socialMedia,
      socialMediaLoading,
      socialMediaError,
      paypal,
      dispatch,
    }),
    [theme, toggleTheme, setTheme, language, t, setLanguage, toggleLanguage, projects, projectsLoading, projectsError, socialMedia, socialMediaLoading, socialMediaError, paypal],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
