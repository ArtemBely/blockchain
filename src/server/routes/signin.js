import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import passport from 'passport';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello');
});

export default router;
