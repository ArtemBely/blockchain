import React from 'react';
import mongoose from 'mongoose';
import express from 'express';
import axios from 'axios';
import User from '../models/company';
import passport from 'passport';

const router = express.Router();


router.get('/eachCompany', async(req, res) => {
    let user = await User.find({show: "yes"});

    /*  let wthtPass = {
        name: user.name,
        description: user.description,
        email: user.email,
        jurisdiction: user.jurisdiction,
        request: user.request,
        industry: user.industry,
        solved: user.solved,
        phone: user.phone,
        vasc: user.vasc,
        hrs: user.hrs,
        show: user.show
      }
      console.log(wthtPass);
*/
    res.json(user);
    return;
});
router.get('/eachHr', async(req, res) => {
    let user = await User.find({show: "yes"});
    let vacs = user.map(vac => vac.vasc);
    //console.log(vacs);
    res.json(vacs);
    return;
});


export default router;
