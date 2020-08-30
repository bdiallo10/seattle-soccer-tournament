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

mongoose.connect( process.env.MONGODB_URI || `http://localhost:5000/api/v1` );


module.exports = {
    Tournament: require('./tournament'),
    Team: require('./team'),
    Player: require('./player'),
    User: require('./user')
}