var User = require('../models/user');

module.exports = {

  // create single user
  createUser: function (req, res) {
    var user = new User(req.body);
    user.save().then(function (user) {
      console.log(user);
      res.status(201).send(user);
    })
  },

  // query for single user
  getUser: function (req, res) {
    User.find({
      _id: req.params.id
    }).exec().then(function (user) {
      console.log(user);
      res.status(200).send(user);
    });
  },

  getUsers: function (req, res) {
    User.find({}).exec().then(function (users) {
      console.log(users);
      res.status(200).send(users);
    });
  },

  editUser: function (req, res) {
    User.findOneAndUpdate({
      _id: req.params.id
    }, req.body, function (err, doc) {
      if (!err) {
        console.log(doc);
        res.status(200).send(doc);
      } else {
        console.log(err);
        res.status(500).send(err);
      }
    });
  },

  deleteUser: function (req, res) {
    User.remove({
      _id: req.params.id
    }, function (err, result) {
      if (!err) {
        res.status(200).send(result);
      } else {
        res.status(500).send(err);
      }

    });
  }
}