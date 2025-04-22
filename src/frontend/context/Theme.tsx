/* eslint-disable no-unused-vars */
import React, { createContext, useState, use } from 'react';
import { Theme, ThemeContextProps, ThemeProviderProps } from '../models/Context';

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.light,
  switchTheme: () => {},
  changeTheme: () => {},
});

export const ThemeProvider = ({ children, initialState = {
  theme: Theme.light,
} }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialState.theme);
  const switchTheme = () => setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  const changeTheme = (theme: Theme) => setTheme(theme);

  return (
    <ThemeContext value={{ theme, switchTheme, changeTheme }}>
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => use(ThemeContext);
