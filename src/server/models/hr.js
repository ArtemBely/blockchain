const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hrOfCompany = new Schema({
  fullName: {type: String, required: true},
  position: {type: String, required: true},
  professional: {type: String, required: true},
  details: {type: String, required: true},
  linkedin: {type: String, required: true},
  hrPhoto: {type: String}
});

module.exports = mongoose.model('Hr', hrOfCompany);
