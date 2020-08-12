import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../container/Layout';
import HomePage from '../pages/HomePage';
import { useStateValue } from '../Context';

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
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
