const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docsOfCompany = new Schema({
  nameOfDoc: {type: String, required: true},
  descrOfDoc: {type: String, required: true},
  linkToDoc: {type: String, required: true}
});

module.exports = mongoose.model('Docs', docsOfCompany);
