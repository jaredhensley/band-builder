var userCtrl = require('../controllers/user.server.controller.js');
var authCtrl = require('../controllers/auth.server.controller.js');
var passport = require('passport');

module.exports = function (app) {

  app.route('/api/users')
    .get(authCtrl.isAuthenticated, userCtrl.getUsers)
    .post(userCtrl.registerUser);

  app.route('/api/users/:id')
    .get(authCtrl.isAuthenticated, userCtrl.getUser)
    .put(authCtrl.isAuthenticated, userCtrl.editUser)
    .delete(authCtrl.isAuthenticated, userCtrl.deleteUser);

  app.get('/api/user', authCtrl.isAuthenticated, userCtrl.currentUser);
  /*app.post('/api/users', authCtrl.isAuthenticated, userCtrl.registerUser);*/
  /*app.get('/api/users/:id', authCtrl.isAuthenticated, userCtrl.getUser);*/
  /*app.get('/api/users', authCtrl.isAuthenticated, userCtrl.getUsers);*/
  /*app.put('/api/users/:id', authCtrl.isAuthenticated, userCtrl.editUser);*/
  /*app.delete('/api/users/:id', authCtrl.isAuthenticated, userCtrl.deleteUser);*/

}