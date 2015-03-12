var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
var contacts = require('express').Router();
var config = require('../config/config');
var request = require('request');
var _ = require('lodash');


exports.create = function(req, res) {
  res.render('contacts/new',{
      title: 'New Contact',
      contact: new Contact({})
  })
}

exports.save = function(req,res){
  var newContact = Contact({
      // Left is defined my schema, right is what you want to call it.
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber

  });
  newContact.save(function(err, data){
    if(err){
      console.log(err);
    } res.redirect('/' + req.user.username + '/contacts');
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
