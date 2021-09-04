import { Dispatch } from 'react';

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
