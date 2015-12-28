// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var passport = require('passport'),
  mongoose = require('mongoose');

// Define the Passport configuration method
module.exports = function () {
  // Load Passport's strategies configuration files
  require('./strategies/local.js')();
  // Load the 'User' model
  var User = mongoose.model('User');

  // Use Passport's 'serializeUser' method to serialize the user id
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Use Passport's 'deserializeUser' method to load the user document
  passport.deserializeUser(function (id, done) {
    User.findOne({
      _id: id
    }).populate({
      path: 'groups',
      populate: {
        path: 'admin',
        model: 'User'
      }
    }).exec().then(function (user) {
      done(null, user);
    });
  });


};