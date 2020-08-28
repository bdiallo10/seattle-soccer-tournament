const User = require('../models/user')

const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
    {usernameField: 'email'},

    function(email, password, done) {
        User.findOne({ email: email }, (err, foundUser) => {
            if(err) return done(err)
            if(!foundUser) return done(null, false, {message: 'invalid credential'})
            if(!foundUser.checkPassword(password)) return done(null, false, {message: 'Invalid Credentials' })
            return done(null, foundUser)
        })
    }
)

module.exports = strategy