import HomePage from '../pages/HomePage';

const serverRoutes = () => {
  return [
    {
      path: '/',
      exact: true,
      component: HomePage,
    },
  ];
};

export default serverRoutes;
