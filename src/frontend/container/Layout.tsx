import React from 'react';
import AppBar from '../components/AppBar/AppBar';

type LayoutProps = {
  children: React.ReactElement,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar />
      { children }
    </>
  );
};

export default Layout;
