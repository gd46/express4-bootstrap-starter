var config = require('../../config/config');
var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
var utils = require(config.root + '/helper/utils');
var screenshot = require('url-to-screenshot');
var crypto = require('crypto');
var request = require('request');
var fs = require('fs');
var _ = require('lodash');


exports.create = function (req, res, next) {
  var contact = new Contact(req.body)
  contact.save(function(err){
  	if(err){
  		console.log(err);
  	}else{
  		console.log("New contact added");
  		console.log(contact);
  	}
  })
}