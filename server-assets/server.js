// packages
var express = require('./config/express');
var mongoose = require('./config/mongoose');
var passport = require('./config/passport');


// controllers

var groupCtrl = require('./controllers/groupCtrl');

// models 
var User = require('./models/user');

// app

var db = mongoose();
var app = express();
var passport = passport();

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

// server
app.listen(9001, function (err) {
  if (!err) {
    console.log('server up');
  } else {
    console.log('server down');
  }
});