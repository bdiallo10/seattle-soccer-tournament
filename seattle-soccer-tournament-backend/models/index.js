const mongoose = require('mongoose');


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
    tournament: require('./tournament'),
    team: require('./team'),
    player: require('./player')
}