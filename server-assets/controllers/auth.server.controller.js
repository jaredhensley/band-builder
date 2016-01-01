var User = require('../models/user.server.model');

module.exports = {

  login: function (req, res) {
    console.log(696969696969, req.user);
    res.status(200).send(req.user);
  }

}