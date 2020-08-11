/* eslint-disable global-require */
import React from 'react';
import express from 'express';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import Layout from '../frontend/container/Layout';
import { ENV, PORT } from './config/config';

const app = express();

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

}

app.use(express.json());

const setResponse = (html: string) => {
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
        <title>Eduli</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <div id="modal"></div>
      </body>
    </html>`
  );
};

const renderApp = (req: express.Request, res: express.Response) => {
  const html = renderToString(
    <Layout />,
  );
  res.send(setResponse(html));
};

app.use(express.static(`${__dirname}/public`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
