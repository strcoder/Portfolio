import React from 'react';
import AppBar from '../components/AppBar/AppBar';

type LayoutProps = {
  children: React.ReactElement,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar />
      <h1>Titulo</h1>
      <p>Texto base</p>
      { children }
    </>
  );
};

export default Layout;
