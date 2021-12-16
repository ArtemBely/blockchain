import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Hr from '../../components/Hr';
const router = express.Router();

router.get('/', (req, res) => {
  const hr = renderToString(
    <StaticRouter>
      <Hr />
    </StaticRouter>
  );
  const user = req.user;
  const html =
  `<!DOCTYPE html>
    <html>
        <head>
          <title>Hr</title>
          <link rel="icon" href="../images/gbn.ico" type="image/x-icon" />
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
              <script>window.__INITIAL_USER__= ${serialize(user)}</script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
        </head>
        <body>
             <div id="app">
                 ${hr}
             </div>
        </body>
    </html>`
    res.send(html);
});

export default router;
