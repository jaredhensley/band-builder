var authCtrl = require('../controllers/authCtrl');
var passport = require('passport');

function auth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).end();
  } else {
    next();
  }
}

module.exports = function (app) {
  app.post('/api/login', passport.authenticate('local'), authCtrl.login);
  app.get('/api/loggedin', auth, function (req, res) {
    return res.json(req.user);
  });

  app.get('/api/logout', function (req, res) {
    req.logout();
    return res.status(200).end();
  });
}