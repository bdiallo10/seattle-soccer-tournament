const mongoose = require('mongoose');
require('dotenv').config()

//mongoose connection string
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

module.exports = {
    Tournament: require('./tournament'),
    Team: require('./team'),
    Player: require('./player'),
    User: require('./user')
}