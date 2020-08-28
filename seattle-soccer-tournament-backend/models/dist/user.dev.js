"use strict";

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
UserSchema.methods = {
  checkPassword: function checkPassword(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: function hashPassword(plainTextPassword) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainTextPassword, salt);
  }
};
UserSchema.pre('save', function (next) {
  if (!this.password) {
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;