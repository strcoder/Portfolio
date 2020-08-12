import React, { createContext, useReducer, useContext } from 'react';
import reducer from './reducers';

type ProviderProps = {
  children: React.ReactElement,
  initialState: Object,
}

type ContextProps = {
  theme: string,
  dispatch?: ({ type }:{type:string}) => void,
}

export const Context = createContext<ContextProps>({ theme: '' });

export const Provider = ({ children, initialState = {} }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
