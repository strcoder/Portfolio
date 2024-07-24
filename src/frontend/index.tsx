import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from './context';
import App from './routes/App';
import './scss/index.scss';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const app = document.getElementById('app');
const root = createRoot(app!);

root.render(
  <Provider initialState={preloadedState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
