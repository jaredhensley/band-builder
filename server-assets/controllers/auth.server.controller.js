module.exports = {

  login: function (req, res) {
    console.log(696969696969, req.user);
    res.status(200).send(req.user);
  },

  isAuthenticated: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return res.status(401).end();
    } else {
      next();
    }
  }

}