var User = require('../models/user');

module.exports = {

  login: function (req, res) {
    console.log(req.user);
    res.json('HEY', req.user);
  }

}