var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  email: String,
  username: String,
  password: String,
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
  }],
  instruments: [{
    type: String
  }],
  newInvites: [{
    type: String,
    ref: 'Group'
  }],
  requestForMembership: [{
    type: String,
    ref: 'Group'
  }]

});





module.exports = mongoose.model('User', schema);