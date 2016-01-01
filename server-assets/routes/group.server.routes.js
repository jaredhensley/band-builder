var groupCtrl = require('../controllers/group.server.controller');
var passport = require('passport');

module.exports = function (app) {

  // group endpoints
  app.post('/api/groups', groupCtrl.addGroup);
  app.put('/api/groups/:id', groupCtrl.editGroup);
  app.get('/api/groups', groupCtrl.getGroups); // get all groups
  app.get('/api/groups/:id', groupCtrl.getGroup); // single group by group Id
  app.delete('/api/groups/:id', groupCtrl.deleteGroup);

  // query endpoints
  app.post('/api/search', groupCtrl.findLocation);

  // access endpoints
  app.post('/api/joinGroup', groupCtrl.joinGroup);
  app.post('/api/groups/approveUser', groupCtrl.approveUser);
}