var User = require('../models/user');

module.exports = {

  login: function (req, res) {
    console.log('THIS MY USER', req.user);
    res.status(200).send(req.user);
  }

}