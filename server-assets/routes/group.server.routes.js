var groupCtrl = require('../controllers/group.server.controller');
var authCtrl = require('../controllers/auth.server.controller.js');
var passport = require('passport');

module.exports = function (app) {

  // group endpoints
  app.route('/api/groups')
    .get(authCtrl.isAuthenticated, groupCtrl.getGroups)
    .post(authCtrl.isAuthenticated, groupCtrl.hasAuthorization, groupCtrl.addGroup);

  app.route('/api/groups/:id')
    .get(authCtrl.isAuthenticated, groupCtrl.getGroup) // need more auth
    .put(authCtrl.isAuthenticated, groupCtrl.editGroup) // need more auth
    .delete(authCtrl.isAuthenticated, groupCtrl.deleteGroup); // need more auth

  app.post('/api/groups/approveUser', authCtrl.isAuthenticated, groupCtrl.approveUser);

  // query endpoints
  app.post('/api/search', groupCtrl.findLocation);

  // access endpoints
  app.post('/api/joinGroup', authCtrl.isAuthenticated, groupCtrl.joinGroup);

  /*  app.post('/api/groups', authCtrl.isAuthenticated, groupCtrl.addGroup);
    app.put('/api/groups/:id', authCtrl.isAuthenticated, groupCtrl.editGroup);
    app.get('/api/groups', authCtrl.isAuthenticated, groupCtrl.getGroups); // get all groups
    app.get('/api/groups/:id', authCtrl.isAuthenticated, groupCtrl.getGroup); // single group by group Id
    app.delete('/api/groups/:id', authCtrl.isAuthenticated, groupCtrl.deleteGroup);*/
}