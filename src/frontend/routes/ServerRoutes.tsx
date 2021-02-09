import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../components/Layout';
import HomePage from '../pages/Home';

const serverRoutes = () => {
  return [
    {
      path: '/',
      exact: true,
      component: HomePage,
    },
  ];
};

const ServerRoutes = () => {
  return (
    <Layout>
      {renderRoutes(serverRoutes())}
    </Layout>
  );
};

export default ServerRoutes;
