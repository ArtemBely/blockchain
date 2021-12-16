import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../components/App';
import Main from '../components/Main';
import Routes from '../components/routes';
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import cors from 'cors'; // --> установить на сервер
import passport from 'passport';
import flash from 'connect-flash';
import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import databaseRouter from './routes/database';
import hrRouter from './routes/hr';
import profRouter from './routes/profile';
import signRouter from './routes/signin';
import apiRouter from './routes/api';

const app = express();
const port = process.env.PORT || 5000;
const CONNECTION_URI = process.env.MONGODB_URI;

var privateKey = fs.readFileSync(path.resolve('src/server/ssl/gbn.rocks.key'));
var certificate = fs.readFileSync(path.resolve('src/server/ssl/gbn.rocks.pem'));

var credentials = {
  key: privateKey,
  cert: certificate
}

require('dotenv/config');
mongoose.connect(
      CONNECTION_URI || process.env.CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
    () => {
      console.log('Connection with database gbn completed');
    }
);

app.use(function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(cors({
  methods:['GET','POST'],
  credentials: true
}));

app.use('/database', databaseRouter);
app.use('/hr', hrRouter);
app.use('/profile', profRouter);
app.use('/signin', signRouter);
app.use('/api', apiRouter);

app.get('*', (req, res, next) => {
  const activeRouter = Routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then(data => {
    const context = { data };
    const user = req.user;
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data} />
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>Global Blockchain Network</title>
                  <link rel="icon" href="/images/gbn.ico" type="image/x-icon" />
                  <link rel="stylesheet" type="text/css" href="main.css">
                  <link rel="preconnect" href="https://fonts.googleapis.com">
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                      <script src='/bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(data)}</script>
                          <script>window.__INITIAL_DATA__= ${serialize(user)}</script>
                            <title>Blockchain</title>
                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                  </div>
                <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
              </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});

/*
app.use((error, req, res, next) => {
  res.status(error.status);

    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/

app.use((req, res, next) => {  //<-- заменить если появится непредвиденная ошибка
   const err = new Error ('Noooo');
     err.status = 404;
     next (err);
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {console.log('connected on http!')});
httpsServer.listen(443, () => {console.log('connected on https!')});
