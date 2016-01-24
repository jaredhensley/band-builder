var authCtrl = require('../controllers/auth.server.controller');
var passport = require('passport');

module.exports = function (app) {

  app.post('/api/login', passport.authenticate('local'), authCtrl.login);

  app.get('/api/logout', function (req, res) {
    req.logout();
    return res.status(200).end(req.user);
  });
}