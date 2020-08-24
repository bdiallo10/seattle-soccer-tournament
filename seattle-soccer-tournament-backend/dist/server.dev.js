"use strict";

var express = require('express');

var routes = require('./routes');

var cors = require('cors');

require('dotenv').config();

var port = process.env.PORT || 5000;
var app = express(); // middleware - JSON parsing

app.use(express.json());
app.use(cors()); // middleware API routes

app.use('/api/v1/tournament', routes.tournament);
app.use('/api/v1/team', routes.team);
app.use('/api/v1/player', routes.player);
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});