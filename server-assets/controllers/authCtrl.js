var User = require('../models/user');

module.exports = {

  login: function (req, res) {
    res.status(200).send(req.user);
  }

}