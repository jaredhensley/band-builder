var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  nickname: String,
  public: Boolean,
  location: {
    lat: Number,
    lng: Number,
    city: String,
    zipcode: Number,
    address: String,
    loc: {
      type: [Number],
      index: '2d'
    }
  },
  users: [{
    type: String,
    ref: 'User'
  }],
  pendingUsers: [{
    type: String,
    ref: 'User'
  }],
  admin: {
    type: String,
    ref: 'User'
  },
  genre: [{
    type: String
  }],
  needs: [{
    type: String
  }]
});

module.exports = mongoose.model('Group', schema);