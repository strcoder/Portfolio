import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from './context';
import App from './routes/App';
import './scss/index.scss';

const app = document.getElementById('app');

if (!app) {
  throw new Error('Root element #app not found');
}

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
