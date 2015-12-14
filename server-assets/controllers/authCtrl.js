var User = require('../models/user');

module.exports = {

  login: function (req, res) {

    console.log('HEY HEY HEY', req.body);
    console.log('test');
    console.log(req.user);
    res.json(req.user);
  }

}