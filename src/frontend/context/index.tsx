/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useContext } from 'react';
import { ContextProps, ProviderProps } from '../models/Context';
import reducer from './reducers';

export const Context = createContext<ContextProps>({
  theme: '',
  paypal: '',
  projects: [],
  socialMedia: {
    github: 'https://github.com',
    twitch: 'https://twitch.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
  dispatch: () => {},
});

export const Provider = ({ children, initialState = {} }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = React.useMemo(
    () => ({ ...state, dispatch }),
    [state, dispatch],
  );
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
