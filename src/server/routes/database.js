import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Database from '../../components/Database';
const router = express.Router();

router.get('/', (req, res) => {
  const dB = renderToString(
    <StaticRouter>
      <Database />
    </StaticRouter>
  );
  const html =
  `<!DOCTYPE html>
    <html>
        <head>
          <title>Database</title>
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
        </head>
        <body>
             <div id="app">
                 ${dB}
             </div>
        </body>
    </html>`
    res.send(html);
});

export default router;
