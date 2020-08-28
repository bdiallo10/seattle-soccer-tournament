"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

var routes = require('./routes');

var cors = require('cors');

var session = require('express-session');

var MongoStore = require('connect-mongo')(session);

var passport = require('./passport');

var port = process.env.PORT || 5000; // middleware - JSON parsing

app.use(express.json()); //middle - cors

var corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));
app.use(session({
  store: new MongoStore({
    url: process.env.ATLAS_URI
  }),
  secret: 'Ilovesoccer',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
})); // middleware - passport config

app.use(passport.initialize());
app.use(passport.session()); // const test = (req, res, next) => {
//     console.log("testing")
//     next()
// }
// middleware API routes

app.use('/api/v1/tournament', routes.tournament);
app.use('/api/v1/team', routes.team);
app.use('/api/v1/player', routes.player);
app.use('/api/v1/auth', routes.auth);
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});