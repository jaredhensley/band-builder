var Group = require('../models/group');

module.exports = {

  addGroup: function (req, res) {
    req.body.users = [req.body.admin];
    var group = new Group(req.body);
    group.save().then(function (group) {
      console.log(group);
      res.status(201).send(group);
    });
    console.log('test');
    res.status(200).send(group);
  },

  editGroup: function (req, res) {
    Group.findOneAndUpdate({
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

  getGroups: function (req, res) {
    Group.find({}).exec().then(function (groups) {
      console.log(groups);
      res.status(200).send(groups);
    });
  },

  getGroup: function (req, res) {
    Group.find({
      _id: req.params.id
    }).exec().then(function (group) {
      console.log(group);
      res.status(200).send(group);
    });
  },

  deleteGroup: function (req, res) {
    Group.remove({
      _id: req.params.id
    }, function (err, result) {
      if (!err) {
        console.log(result);
        res.status(200).send(result);
      } else {
        console.log(err);
        res.status(500).send(err);
      }
    });
  }

}