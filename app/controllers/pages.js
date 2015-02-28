var mongoose = require('mongoose');
var Trick = mongoose.model('Trick');
var tricks = require('express').Router();
var config = require('../config/config');
var request = require('request');
var _ = require('lodash');


exports.contacts = function (req, res) {
  var current_username = req.user.username;
  var username_params = req.params.username;

  if( current_username !== username_params) {
      res.redirect('/'+username_params)
  }

  res.render('pages/contacts', {
    title: 'My Contacts'
  })
}



// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/gd46/contacts', function(req, res, next) {
//   res.render('pages/contacts');
// });

// module.exports = router;