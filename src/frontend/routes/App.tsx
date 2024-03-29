import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useStateValue } from '../context';
import Layout from '../components/Layout';
import HomePage from '../pages/Home';
import Project from '../pages/Project';
import NotFound from '../pages/NotFound';
import InConstruction from '../pages/InConstruction';
// import Portfolio from '../pages/Portfolio';

const App = () => {
  const { theme } = useStateValue();
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const body = document.body.classList;
    theme === 'light' ? body.remove('dark') : body.add(theme);
    theme === 'dark' ? body.remove('light') : body.add(theme);
  }
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* <Route exact path='/' component={HomePage} />
          <Route exact path='/project/:name' component={Project} /> */}
          <Route exact component={InConstruction} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
