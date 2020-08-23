"use strict";

var express = require('express');

var routes = require('./routes');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var port = process.env.PORT || 5000;
var app = express(); // middleware - JSON parsing

app.use(express.json());
app.use(cors()); //mongoose connection string

var uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established successfully");
}); // middleware API routes

app.use('/api/v1/tournament', routes.tournament);
app.use('/api/v1/team', routes.team);
app.use('/api/v1/player', routes.player);
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});