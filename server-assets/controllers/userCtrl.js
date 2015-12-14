var User = require('../models/user');

module.exports = {

  // create single user
  createUser: function (req, res) {
    User.findOne({
      username: req.body.username
    }, function (err, user) {
      if (user) {
        res.send(null);
      } else {
        var user = new User(req.body);
        user.save().then(function (user) {
          req.login(user, function (err) {
            if (err) {
              return next(err);
            } else {
              res.status(200).send(user);
            }
          });
          res.status(201).send(user);
        });
      }
    });
  },

  // query for single user
  getUser: function (req, res) {
    User.find({
      _id: req.params.id
    }).populate({
      path: 'groups',
      populate: {
        path: 'admin',
        model: 'User'
      }
    }).exec().then(function (user) {
      console.log(user);
      res.status(200).send(user);
    }, function (err) {
      console.log(err);
      res.status(500).send(err);
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