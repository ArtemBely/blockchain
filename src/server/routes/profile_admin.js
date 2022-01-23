import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Profile_Admin from '../../components/Profile_Admin';
import User from '../models/company.js';
const router = express.Router();

router.get('/', isAuth, async (req, res) => {

  let newCandidates = await User.find({ showCompany: "no" });

  const hr = renderToString(
    <StaticRouter>
      <Profile_Admin />
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
              <script>window.__INITIAL_DATA__= ${serialize(newCandidates)}</script>
        </head>
        <body>
             <div id="app">
                 ${hr}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.get('/approve/:id', async (req, res, next) => {
  //изменение параметров назависимого объекта (не user)
  let choosenCandidate = await User.findOne({ _id: req.params.id }, function(err, newCand) {
    newCand.showCompany = "yes";
    newCand.save();
    res.redirect('/profile_admin');
  });
});

router.get('/logout', isAuth, (req, res, next) => {
  req.logout();
  res.redirect('/');
});

function isAuth(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  }
  res.redirect('/');
}

export default router;
