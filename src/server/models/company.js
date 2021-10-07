const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const profileOfCompany = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  jurisdiction: {type: String, required: true},
  request: {type: String, required: true},
  industry: {type: String, required: true},
  solved: {type: String, required: true},
  phone: {type: String, required: true},
  vasc: {type: Array},
  hrs: {type: Array},
  show: {type: String}
});

module.exports = mongoose.model('User', profileOfCompany);

module.exports.createUser = function(newUser, callback) {
var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {

    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
