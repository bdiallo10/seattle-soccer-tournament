const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/user')

passport.serializeUser((user, done) => {

    done(null, user._id)
})

passport.deserializeUser((id, done) => {
    
    User.findById(id, 'email', (err, user) => {
        if (err) return done(err, null)
        console.log(user)
        done(null, user)
    })
})

passport.use(LocalStrategy)
module.exports = passport