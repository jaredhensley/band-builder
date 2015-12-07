var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  email: String,
  username: String,
  location: String,
  bio: String,
  skill: {
    type: Number,
    min: 0,
    max: 10
  },
  genres: [{
    type: String
  }],
  groups: [{
    type: String,
    ref: 'Group'
  }]

});

module.exports = mongoose.model('User', schema);