import React from 'react';
import { renderRoutes } from 'react-router-config';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import InConstruction from '../pages/InConstruction';
import Project from '../pages/Project';

const serverRoutes = () => {
  return [
    // {
    //   path: '/',
    //   exact: true,
    //   component: Home,
    // },
    // {
    //   path: '/project/name',
    //   exact: true,
    //   component: Project,
    // },
    {
      exact: true,
      component: InConstruction,
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
