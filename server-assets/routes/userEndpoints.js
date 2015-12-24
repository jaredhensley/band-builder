var userCtrl = require('../controllers/userCtrl.js');

function auth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).end();
  } else {
    next();
  }
}

module.exports = function (app) {

  app.post('/api/users', userCtrl.createUser);
  app.get('/api/users/:id', userCtrl.getUser);
  app.get('/api/users', userCtrl.getUsers);
  app.put('/api/users/:id', userCtrl.editUser);
  app.delete('/api/users/:id', userCtrl.deleteUser);

  app.get('/api/user', auth, function (req, res) {
    if (!req.user) return res.status(401).send('user not logged in');
    return res.json(req.user);
  });

}