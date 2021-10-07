import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Hr from '../../components/Hr';
const router = express.Router();

router.get('/hr', (req, res) => {
  const hr = renderToString(
    <StaticRouter>
      <Hr />
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
                 ${hr}
             </div>
        </body>
    </html>`
    res.send(html);
});

export default router;
