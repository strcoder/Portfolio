import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from './context';
import App from './routes/App';
import './scss/index.scss';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const app = document.getElementById('app');

ReactDOM.render(
  <Provider initialState={preloadedState}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  app,
);
