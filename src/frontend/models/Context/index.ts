/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

type Actions = {
  type: string,
  theme: string
}

export type ProviderProps = {
  children: React.ReactElement,
  initialState: Object,
}

export type ContextProps = {
  theme: string,
  paypal: string,
  projects: object[],
  socialMedia: {
    github: string,
    twitch: string,
    twitter: string,
    linkedin: string,
    facebook: string,
    instagram: string,
  },
  dispatch: Dispatch<Actions>,
}

export type ThemeContextProps = {
  theme: Theme,
  switchTheme: () => void,
  changeTheme: (theme: Theme) => void,
  // dispatch: Dispatch<Actions>,
}

export type ThemeProviderProps = {
  children: React.ReactElement,
  initialState: {
    theme: Theme,
  },
}
