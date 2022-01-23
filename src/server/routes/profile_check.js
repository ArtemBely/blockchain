import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
const router = express.Router();

router.get('/', isAuth, async (req, res) => {
    if(req.user && req.user.admin == "true") {
      res.redirect('/profile_admin');
    }
    else {
      res.redirect('/profile');
    }
});

function isAuth(req, res, next) {
  if(req.isAuthenticated()) {
    return next()
  }
  res.redirect('/');
}

export default router;
