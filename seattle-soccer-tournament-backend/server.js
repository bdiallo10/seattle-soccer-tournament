const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors());


//mongoose connection string
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

  // middleware API routes
  app.use('/api/v1/tournament', routes.tournament)
  app.use('/api/v1/team', routes.team)
  app.use('/api/v1/player', routes.player)
  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});