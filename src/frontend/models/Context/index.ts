import { Project, SocialMedia } from '../../services/api';
import { ThemeType } from '../../hooks';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

type Actions = {
  type: string;
  theme?: string;
  [key: string]: any;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type ContextProps = {
  // Theme
  theme: ThemeType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;

  // Data
  projects: Project[];
  projectsLoading: boolean;
  projectsError: string | null;
  socialMedia: SocialMedia;
  socialMediaLoading: boolean;
  socialMediaError: string | null;

  // Config
  paypal: string;

  // Legacy
  dispatch: (action: Actions) => void;
};

export type ThemeContextProps = {
  theme: Theme;
  switchTheme: () => void;
  changeTheme: (theme: Theme) => void;
};

export type ThemeProviderProps = {
  children: React.ReactElement;
  initialState: {
    theme: Theme;
  };
};
