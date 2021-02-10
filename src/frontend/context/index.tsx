/* eslint-disable no-unused-vars */
import React, { createContext, useReducer, useContext } from 'react';
import { ContextProps, ProviderProps } from '../models/Context';
import reducer from './reducers';

export const Context = createContext<ContextProps>({
  theme: '',
  dispatch: () => {},
});

export const Provider = ({ children, initialState = {} }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
