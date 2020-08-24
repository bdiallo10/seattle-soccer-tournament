const express = require('express');
const routes = require('./routes');
const cors = require('cors');


require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors());


// middleware API routes
app.use('/api/v1/tournament', routes.tournament)
app.use('/api/v1/team', routes.team)
app.use('/api/v1/player', routes.player)
  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});