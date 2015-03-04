var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
var contacts = require('express').Router();
var config = require('../config/config');
var request = require('request');
var _ = require('lodash');


exports.create = function(req, res) {
  res.render('contacts/new',{
      title: 'New Contact',
      contact: new Contact({}).save(function(err){
          if(err){
            console.log(err);
          }else{
            console.log("New contact added");
            console.log(contact);
          }
      })
  })
}

exports.contacts = function (req, res) {
  var current_username = req.user.username;
  var username_params = req.params.username;

  if( current_username !== username_params) {
      res.redirect('/'+username_params)
  }

  res.render('contacts/main', {
    title: 'My Contacts'
  })
}
