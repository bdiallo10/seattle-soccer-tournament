"use strict";

var passport = require('passport');

var LocalStrategy = require('./localStrategy');

var User = require('../models/user');

passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, 'email', function (err, user) {
    console.log(user);
    done(null, user);
  });
});
passport.use(LocalStrategy);
module.exports = passport;