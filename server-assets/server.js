// packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// controllers
var authCtrl = require('./controllers/authCtrl');
var userCtrl = require('./controllers/userCtrl');
var groupCtrl = require('./controllers/groupCtrl');

// models 
var User = require('./models/user');

// app
var app = express();
mongoose.connect('mongodb://localhost/personalproject');

// middleware 
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// cookies and sessions
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
  secret: 'this is the secret'
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// passport local strategy configuration
passport.use(new LocalStrategy(function (username, password, done) {
  User.findOne({
    username: username,
    password: password
  }, function (err, user) {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, {
        message: 'unable to login'
      })
    }
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  User.find({
    _id: user._id
  }).populate({
    path: 'groups',
    populate: {
      path: 'admin',
      model: 'User'
    }
  }).exec().then(function (user) {
    console.log(user);
    done(null, user[0]);
  });
});

// auth middleware
function auth(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).end();
  } else {
    next();
  }
}

// authentication endpoints
app.post('/api/login', passport.authenticate('local'), authCtrl.login);
app.get('/api/loggedin', auth, function (req, res) {
  return res.json(req.user);
});

app.get('/api/logout', function (req, res) {
  req.logout();
  return res.status(200).end();
});

// user endpoints
app.post('/api/users', userCtrl.createUser);
app.get('/api/users/:id', userCtrl.getUser);
app.get('/api/users', userCtrl.getUsers);
app.put('/api/users/:id', userCtrl.editUser);
app.delete('/api/users/:id', userCtrl.deleteUser);

app.get('/api/user', auth, function (req, res) {
  if (!req.user) return res.status(401).send('user not logged in');
  return res.json(req.user);
});

// group endpoints
app.post('/api/groups', groupCtrl.addGroup);
app.put('/api/groups/:id', groupCtrl.editGroup);
app.get('/api/groups', groupCtrl.getGroups); // get all groups
app.get('/api/groups/:id', groupCtrl.getGroup); // single group by group Id
app.delete('/api/groups/:id', groupCtrl.deleteGroup);

// location endpoints
app.post('/api/search', groupCtrl.findLocation);

// server
app.listen(9001, function (err) {
  if (!err) {
    console.log('server up');
  } else {
    console.log('server down');
  }
});