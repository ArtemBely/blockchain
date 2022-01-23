import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import passport from 'passport';
import mongoose from 'mongoose';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Database from '../../components/Database';
import User from '../models/company.js';
import Administrator_Registration from '../../components/Administrator_Registration';

const LocalStrategy = require('passport-local').Strategy;
const router = express.Router();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/admin_registration_page', (req, res, next) => {
  var messages = req.flash('errors');
  const user = req.user;
  const dB = renderToString(
    <StaticRouter>
      <Administrator_Registration />
    </StaticRouter>
  );
  const html =
  `<!DOCTYPE html>
    <html>
        <head>
          <title>Database</title>
          <link rel="icon" href="../images/gbn.ico" type="image/x-icon" />
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
              <script>window.__INITIAL_DATA__ = ${serialize(messages)}</script>
              <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
        </head>
        <body>
             <div id="app">
                 ${dB}
             </div>
        </body>
    </html>`
    res.send(html);
});


router.get(['/', '/sendRequest', '/showpopup'], (req, res, next) => {
  var messages = req.flash('errors');
  const user = req.user;
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
          <link rel="icon" href="../images/gbn.ico" type="image/x-icon" />
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
              <script>window.__INITIAL_DATA__ = ${serialize(messages)}</script>
              <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
        </head>
        <body>
             <div id="app">
                 ${dB}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.post('/sendRequest', (req, res, done) => {
   var { name, description, email, password,
     solved, phone, jurisdiction, industry, request,
      vasc, hrs, docs, show, showVacs, admin, showCompany } = req.body;

   req.checkBody("email", "Wrong type of email field").isEmail();
   req.checkBody("password", "Minimal length of 'password' field is 5").isLength({min: 5});

   var errors = req.validationErrors();

   if(errors) {
     console.log(errors);
     var err = errors.map(er => er.msg);
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
              <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
           </head>
           <body>
                <div id="app">
                    ${dB}
                </div>
           </body>
       </html>`
       return res.send(html);
   }

   User.findOne({email: email}, function(err, user) {
     if(err) {return done(err)};
     if(user) {
       const errors = ['This email is already in use'];
       const cond = req.isAuthenticated();
       const dB = renderToString(
         <StaticRouter>
           <Database />
         </StaticRouter>
       );
       const mark =
       `<!DOCTYPE html>
         <html>
             <head>
               <title>Database</title>
                    <link rel="stylesheet" type="text/css" href="../main.css">
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                   <script src='/bundle.js' defer></script>
                <script>window.__INITIAL_DATA__= ${serialize(errors)}</script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
             </head>
             <body>
                  <div id="app">
                      ${dB}
                  </div>
             </body>
         </html>`
       res.send(mark);
       return done(null, false);
     }
     var newUser = new User({
       name: name,
       description: description,
       email: email,
       password: password,
       jurisdiction: jurisdiction,
       request: request,
       industry: industry,
       solved: solved,
       phone: phone,
       vasc: vasc,
       hrs: hrs,
       docs: docs,
       show: show,
       showVacs: showVacs,
       admin: admin,
       showCompany: showCompany
     });

    User.createUser(newUser, function(err, user) {
        if (err) throw err;
        console.log(user);
   });

   const success = ['Регистрация завершена успешно, можете войти'];
   const dB = renderToString(
   <StaticRouter>
      <Database />
   </StaticRouter>
 )
res.send(
 `<!DOCTYPE html>
     <html>
         <head>
           <title>Проверка кода</title>
                <link rel="stylesheet" type="text/css" href="../main.css">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                    <script src='/bundle.js' defer></script>
                    <script>window.__INITIAL_DATA__= ${serialize(success)}</script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"></script>
                    </head>
                  <body>
                <div id="app">
              ${dB}
           </div>
         </body>
     </html>`
   );
  });
});

   passport.use('local.signin', new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
    function(req, email, password, done) {
    User.findOne({email: email}, async function(err, user) {
    if(err) {
      console.log(err);
      return done(err);
    }

    if(!user) {
      req.flash('errors', 'Не найдено пользователей или неверный пароль');
      console.log('Не найдено пользователей. Ошибка в почте');
      return done(null, false);
    }

    User.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if(isMatch) {
          return done(null, user);
        }
        else {
          req.flash('errors', 'Не найдено пользователей или неверный пароль');
          console.log('Неверный пароль');
          return done(null, false)
        }
      });
    });
  }));

  router.post('/signin',
    passport.authenticate('local.signin', {
    successRedirect: '/profile_check',
    failureRedirect: '/database',
    passReqToCallback: true
 })
);

function notLoggedIn(req, res, next) {
  if(!req.isAuthenticated()) {
    return next();
  }
  res.redirect('/profile_check');
}

export default router;
