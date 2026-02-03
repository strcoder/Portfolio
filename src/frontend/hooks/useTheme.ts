import { useState, useEffect, useCallback } from 'react';

export type ThemeType = 'light' | 'dark';

interface UseThemeReturn {
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
}

const THEME_KEY = 'portfolio-theme';

const getInitialTheme = (): ThemeType => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

export const useTheme = (): UseThemeReturn => {
  const [theme, setThemeState] = useState<ThemeType>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const setTheme = useCallback((newTheme: ThemeType) => {
    setThemeState(newTheme);
  }, []);

  return { theme, toggleTheme, setTheme };
};
