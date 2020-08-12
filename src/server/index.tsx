/* eslint-disable global-require */
import React from 'react';
import helmet from 'helmet';
import express from 'express';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import cookieParser from 'cookie-parser';
import getManifest from './getManifest';
import serverRoutes from '../frontend/routes/serverRoutes';
import { Provider } from '../frontend/Context';
import Layout from '../frontend/container/Layout';
import { ENV, PORT } from './config/config';

const app = express();

app.use(express.json());
app.use(cookieParser());

if (ENV === 'development') {
  const webPackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webPackConfig);
  const serverConfig = { port: PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
} else {
  app.use((req: express.Request, res, next) => {
    req.body = {
      manifest: getManifest(),
    };
    next();
  });
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.use(express.json());

type preloadState = {
  theme: string
}

const setResponse = (html: string, preloadedState: preloadState, manifest: any) => {
  const mainStyles = manifest ? manifest['main.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta charset="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"/>
        <link rel="stylesheet" type="text/css" href="${mainStyles}" />
        <title>Antonio Guzmán</title>
      </head>
      <body class=${JSON.stringify(preloadedState.theme).replace(/</g, '\\u003c')}>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" id="preloadedState">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <script type="text/javascript" src="${mainBuild}"></script>
        <script type="text/javascript" src="${vendorBuild}"></script>
      </body>
    </html>`
  );
};

const renderApp = (req: express.Request, res: express.Response) => {
  const { theme } = req.cookies;
  const { manifest } = req.body;
  const initialState = {
    theme: theme || 'light',
  };
  const html = renderToString(
    <Provider initialState={initialState}>
      <StaticRouter location={req.url} context={{}}>
        <Layout>
          {renderRoutes(serverRoutes())}
        </Layout>
      </StaticRouter>
    </Provider>,
  );
  res.send(setResponse(html, initialState, manifest));
};

app.use(express.static(`${__dirname}/public`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
