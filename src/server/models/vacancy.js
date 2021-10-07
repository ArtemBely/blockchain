const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacancyOfCompany = new Schema({
  location: {type: String, required: true},
  direction: {type: String, required: true},
  experience: {type: String, required: true},
  salary: {type: String, required: true},
  tasks: {type: String, required: true},
  requirements: {type: String, required: true}
});

module.exports = mongoose.model('Vacancy', vacancyOfCompany);
