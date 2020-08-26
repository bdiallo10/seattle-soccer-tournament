const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName: {type: String, required: true},
    age: {type: String, required: true},
    countryOfOrigin: {type: String, required: true},
    playerLocation: {type: String, required: true}
    // add download a picture for the player later
}, { timestamps: true,
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player