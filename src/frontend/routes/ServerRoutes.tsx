import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Project from '../pages/Project';

const serverRoutes = () => {
  return [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/project',
      exact: true,
      component: Project,
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
