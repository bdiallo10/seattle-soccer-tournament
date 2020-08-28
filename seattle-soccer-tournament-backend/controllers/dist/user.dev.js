"use strict";

var db = require('../models/user');

var bcrypt = require('bcrypt'); //User login in


var login = function login(req, res) {
  res.json({
    userName: req.user.userName,
    password: req.user.password
  });
}; // User registration


var register = function register(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      username = _req$body.username,
      password = _req$body.password;

  if (!name || !email || !username || !password) {
    return res.json({
      message: 'Please enter a name, an email and a password'
    });
  }
}; //making sure the user doesn't already exist


db.User.findOne({
  email: email
}, function (err, foundUser) {
  if (err) return res.json({});
  if (foundUser) return res.json({
    message: "An acount with that email already exists"
  });
  var newUser = new db.User({
    name: name,
    username: username,
    email: email,
    password: password
  });
  newUser.save(function (err, savedUser) {
    if (err) res.json(err);
    res.json(savedUser);
  });
});

var logout = function logout(req, res) {
  if (!req.user) return res.json({
    message: 'No User to log out'
  });
  req.logout();
  res.json({
    message: "User logged out"
  });
}; // const verify = (req, res) => {
//research about what it does
// }


module.exports = {
  login: login,
  register: register,
  logout: logout //verify

};