var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  public: Boolean,
  location: Object,
  users: [{
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