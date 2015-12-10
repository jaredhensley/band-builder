// packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// controllers
var userCtrl = require('./controllers/userCtrl');
var groupCtrl = require('./controllers/groupCtrl');

var app = express();
mongoose.connect('mongodb://localhost/personalproject');

// middleware 
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// user endpoints
app.post('/api/users', userCtrl.createUser);
app.get('/api/users/:id', userCtrl.getUser);
app.get('/api/users', userCtrl.getUsers);
app.put('/api/users/:id', userCtrl.editUser);
app.delete('/api/users/:id', userCtrl.deleteUser);

// group endpoints
app.post('/api/groups', groupCtrl.addGroup);
app.put('/api/groups/:id', groupCtrl.editGroup);
app.get('/api/groups', groupCtrl.getGroups); // get all groups
app.get('/api/groups/:id', groupCtrl.getGroup); // single group by group Id
app.delete('/api/groups/:id', groupCtrl.deleteGroup);


// server
app.listen(9001, function (err) {
  if (!err) {
    console.log('server up');
  } else {
    console.log('server down');
  }
});