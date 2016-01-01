// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var express = require('express'),
  morgan = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  flash = require('connect-flash'),
  passport = require('passport');

// Define the Express configuration method
module.exports = function () {

  // Create a new Express application instance
  var app = express();

  // Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
  /*if (process.env.NODE_ENV === 'development') {*/
  app.use(morgan('dev'));
  /* } else if (process.env.NODE_ENV === 'production') {
     app.use(compress());
   }*/

  // Use the 'cookie-parser' middleware
  app.use(cookieParser());

  // Use the 'body-parser' and 'method-override' middleware functions
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  // Configure the 'session' middleware
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'this is the secret'
  }));

  // Set the application view engine and 'views' folder
  app.set('views', './server-assets/views');
  app.set('view engine', 'ejs');

  // Configure the flash messages middleware
  app.use(flash());

  // Configure the Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Load the routing files
  require('../routes/index.server.routes')(app);
  require('../routes/auth.server.routes')(app);
  require('../routes/user.server.routes')(app);
  require('../routes/group.server.routes')(app);

  // Configure static file serving
  app.use(express.static('./public'));

  // Return the Express application instance
  return app;
};