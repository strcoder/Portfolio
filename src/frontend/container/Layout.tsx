import React from 'react';

type LayoutProps = {
  children: React.ReactElement,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <h1>Layout</h1>
  );
};

export default Layout;
