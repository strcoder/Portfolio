import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import reducer from './reducers';

type ProviderProps = {
  children: React.ReactElement,
  initialState: Object,
}

type actions = {
  type: string,
  theme: string
}

type ContextProps = {
  theme: string,
  dispatch: Dispatch<actions>,
}

export const Context = createContext<ContextProps>({ theme: '', dispatch: () => {} });

export const Provider = ({ children, initialState = {} }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
