// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  var db = mongoose.connect('mongodb://localhost/personalproject');

  // Load the application models 
  require('../models/group');
  require('../models/user');

  // Return the Mongoose connection instance
  return db;
};