// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('./config/mongoose'),
  express = require('./config/express'),
  passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();

// Configure the Passport middleware
var passport = passport();

// server
app.listen(9001, function (err) {
  if (!err) {
    console.log('server up');
  } else {
    console.log('server down');
  }
});