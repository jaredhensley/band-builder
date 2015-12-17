var Group = require('../models/group');
var User = require('../models/user');
var geocoder = require('../node-geosearch');

module.exports = {

  findLocation: function (req, res, next) {
    console.log(req.body);
    var limit = req.query.limit || 10;

    // get the max distance or set it to 8 kilometers
    var maxDistance = req.query.distance || 8;

    // we need to convert the distance to radians
    // the raduis of Earth is approximately 6371 kilometers
    //    maxDistance /= 6371;

    // get coordinates [ <longitude> , <latitude> ]
    var coords = [];

    geocoder.geocode(req.body.search).then(function (res) {
      return [res[0].longitude, res[0].latitude];
    }).then(function (coords) {
      console.log(222222, coords, maxDistance, maxDistance);
      return Group.find({
        'location.loc': {
          $near: coords,
          $maxDistance: (maxDistance / 69)
        }
      }).exec();
    }).then(function (locations) {
      console.log(5555555555, locations);
      return res.json(locations);
    }).catch(function (err) {
      return res.status(500).json(err);
    });
  },

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
        address: results[0].formattedAddress,
        loc: [results[0].longitude, results[0].latitude]
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

    if (req.body.location) {
      geocoder.geocode(req.body.location, function (err, results) {
        req.body.location = {
          lat: results[0].latitude,
          lng: results[0].longitude,
          city: results[0].city,
          zipcode: results[0].zipcode,
          address: results[0].formattedAddress
        };
      }).then(function () {

        Group.findByIdAndUpdate(req.params.id, req.body, {
          new: true
        }, function (err, group) {
          if (!err) {
            console.log(group);
            res.status(200).send(group);
          } else {
            console.log(err);
            res.status(500).send(err);
          }
        });

      });
    } else {

      Group.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      }, function (err, group) {
        if (!err) {
          console.log(group);
          res.status(200).send(group);
        } else {
          console.log(err);
          res.status(500).send(err);
        }
      });
    }

    /*    Group.findByIdAndUpdate(req.params.id, req.body, {
          new: true
        }, function (err, group) {
          if (!err) {
            console.log(group);
            res.status(200).send(group);
          } else {
            console.log(err);
            res.status(500).send(err);
          }
        });*/
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