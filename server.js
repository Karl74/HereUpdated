var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./serverRoutes/routes");
var axios = require("axios");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var dbi = require('./db');
var path = require('path');

var PORT = process.env.PORT || 3023;
mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(__dirname + "/public"));
app.use("/", routes);


//-------------Database configuration with Mon

var db = process.env.MONGODB_URI || "mongodb://localhost/here";
/////////////////New Passport Information//////////////////////
passport.use(new Strategy(
  function(username, password, cb) {
    dbi.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));


  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    dbi.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });


  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');

  app.use(require('morgan')('combined'));
  app.use(require('cookie-parser')());
  app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/',
    function(req, res) {
      res.render('home.ejs', { user: req.user });
    });

  app.get('/login',
    function(req, res){
      res.render('books');
    });

  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/books' }),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/logout',
    function(req, res){
      req.logout();
      res.redirect('/');
    });

  app.get('/Welcome',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      res.render('adminWelcome', { user: req.user });
    });




///////////////////END of CRAZY!!!!!/////////////////
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

app.listen(PORT, function(){
  console.log("Now listening on port:", PORT);
});
