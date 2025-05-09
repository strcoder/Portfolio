import React from 'react';
import helmet from 'helmet';
import express from 'express';
import cookieParser from 'cookie-parser';
import { StaticRouter } from 'react-router-dom/server';
import * as ReactDOMServer from 'react-dom/server';
import { ENV, PORT, PAYPAL_ID } from './config';
import { Provider } from '../frontend/context';
import { preloadState } from './model/preloadState';
import ServerApp from '../frontend/routes/App';
import { getData } from './controller/data';
import Routes from './routes';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

const setResponse = (html: string, preloadedState: preloadState) => {
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <base href="/" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#02132d" />
        <link rel="icon" href="images/logo-min.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="app.css" />
        <title>Antonio Guzmán</title>
      </head>
      <body class=${JSON.stringify(preloadedState.theme).replace(/</g, '\\u003c')}>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" id="preloadedState">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <script type="text/javascript" src="app.js"></script>
      </body>
    </html>`
  );
};

const renderApp = async (req: express.Request, res: express.Response) => {
  const { theme } = req.cookies;
  const projects = await getData({ route: 'project' });
  const socialMedia = await getData({ id: '602af04697a43ef69c8e0488', route: 'social-media' });
  const initialState: preloadState = {
    theme: theme || 'light',
    projects,
    socialMedia,
    paypal: PAYPAL_ID || '',
  };

  const html = ReactDOMServer.renderToString(
    <Provider initialState={initialState}>
      <StaticRouter location={req.url}>
        <ServerApp />
      </StaticRouter>
    </Provider>,
  );
  res
    // .set('Content-Security-Policy', "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    .send(setResponse(html, initialState));
};

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.get('*', renderApp);
Routes(app);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
