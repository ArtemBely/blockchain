import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Profile from '../../components/Profile';
import Vacancy from '../models/vacancy.js';
import Hr from '../models/hr.js';
import Docs from '../models/documents.js';
const router = express.Router();

router.get('/', isAuth, async (req, res, next) => {
  const hr = renderToString(
    <StaticRouter>
      <Profile />
    </StaticRouter>
  );
  var auth = req.isAuthenticated();
  var user = req.user;
  const html =
  `<!DOCTYPE html>
    <html>
        <head>
          <title>Database</title>
               <link rel="stylesheet" type="text/css" href="../main.css">
                 <meta name="viewport" content="width=device-width, initial-scale=1">
              <script src='/bundle.js' defer></script>
            <script>window.__INITIAL_USER__ = ${serialize(user)}</script>
        </head>
        <body>
             <div id="app">
                 ${hr}
             </div>
        </body>
    </html>`
    res.send(html);
});

router.post('/sendVacancy', async (req, res, next) => {
  let { location, direction, experience,
     salary, tasks, requirements } = req.body;
  var vacancy = new Vacancy({
    location: location,
    direction: direction,
    experience: experience,
    salary: salary,
    tasks: tasks,
    requirements: requirements
  });

  let user = req.user;
  user.vasc.push(vacancy);
  try {
    user = await user.save();
    console.log(user);
    res.redirect('/profile');
  }
  catch {
    err => console.log(err);
  }
});
router.post('/sendHr', async (req, res, next) => {
  let { fullName, position, professional,
     details, linkedin } = req.body;
  var hr = new Hr({
    fullName: fullName,
    position: position,
    professional: professional,
    details: details,
    linkedin: linkedin
  });
    let user = req.user;
    typeof user.hrs[0] != 'object' ?
    user.hrs.splice(0, 1) && user.hrs.push(hr) :
    user.hrs.push(hr);
    try {
      user = await user.save();
      console.log(user);
      res.redirect('/profile');
    }
    catch {
      err => console.log(err);
    }
});

router.get('/delete/:id', async(req, res) => {
  let vacancies = req.user.vasc;
  let finDel = await vacancies.findIndex(us => us._id == req.params.id);
  vacancies.splice(finDel, 1);
  vacancies = req.user.vacancies;
  req.user.save();
  console.log(req.user.vacancies);
  res.redirect('/profile')
});
router.get('/deleteHr/:id', async(req, res) => {
  let hrs = req.user.hrs;
  let hrDel = await hrs.findIndex(hr => hr._id == req.params.id);
  hrs.splice(hrDel, 1);
  hrs = req.user.hrs;
  req.user.save();
  console.log(req.user.hrs);
  res.redirect('/profile')
});

router.post('/sendDoc', async (req, res, next) => {
  let { nameOfDoc, descrOfDoc, linkToDoc } = req.body;
  var doc = new Docs({
    nameOfDoc: nameOfDoc,
    descrOfDoc: descrOfDoc,
    linkToDoc: linkToDoc
  });
    let user = req.user;
    typeof user.docs[0] != 'object' ?
    user.docs.splice(0, 1) && user.docs.push(doc) :
    user.docs.push(doc);
    try {
      user = await user.save();
      console.log(user);
      res.redirect('/profile');
    }
    catch {
      err => console.log(err);
    }
});

router.get('/deleteDocs/:id', async (req, res, next) => {
    let user = req.user;
    let delDocArr = user.docs;
    let indexDoc = delDocArr.findIndex(doc => doc._id == req.params.id);
    delDocArr.splice(indexDoc, 1);
    try {
      user = await user.save();
      res.redirect('/profile');
    }
    catch {
      err => console.log(err);
    }
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
