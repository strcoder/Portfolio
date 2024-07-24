import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getCookie, ThemeProvider, useTheme } from 'eduli-ui';

import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import Project from '../pages/Project';
import NotFound from '../pages/NotFound';
import InConstruction from '../pages/InConstruction';
import 'eduli-ui/lib/index.css';
// import Portfolio from '../pages/Portfolio';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          {/* <Route exact path='/' element={<HomePage />} />
          <Route exact path='/project/:name' element={<Project />} /> */}
          <Route path='*' element={<InConstruction />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
