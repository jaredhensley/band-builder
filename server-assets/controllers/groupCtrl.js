var Group = require('../models/group');
var User = require('../models/user');
var geocoder = require('../node-geosearch');

module.exports = {

  // creates a new group from admin account
  addGroup: function (req, res) {

    //handles req.body before save
    req.body.users = [req.body.admin];
    geocoder.geocode(req.body.location, function (err, results) {
      req.body.location = {
        lat: results[0].latitude,
        lng: results[0].longitude,
        city: results[0].city,
        zipcode: results[0].zipcode,
        address: results[0].formattedAddress
      };

      // make a new group based on req.body
      var group = new Group(req.body);
      var newGroup;
      group.save().then(function (theNewGroup) {
        newGroup = theNewGroup;
        return User.findById(req.body.admin).exec();
      }).then(function (user) {
        user.groups.push(newGroup._id);
        return user.save();
      }).then(function (newUser) {
        res.status(201).send(group);
      }).then(null, function (err) {
        return res.status(500).send(err);
      });
    });
  },

  //edit existing group from admin account
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
      res.status(200).send(groups);
    });
  },

  getGroup: function (req, res) {
    Group.find({
      _id: req.params.id
    }).populate('users').exec().then(function (group) {
      res.status(200).send(group[0]);
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