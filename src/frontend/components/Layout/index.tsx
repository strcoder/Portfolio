import React from 'react';
import AppBar from '../AppBar';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactElement,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppBar />
      { children }
      <Footer />
    </>
  );
};

export default Layout;
