// const User = require('../models/user')
// const passport = require('../passport')
// module.exports = {
//     login,
//     logout
// }
// function login(req, res) {
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//         failureFlash: true
//     })
//     User.findOne({'email': req.body.email}, (err, foundUser) => {
//         if(foundUser !== null) {
//             req.session.user = foundUser._id
//             req.session.loggedIn = true
//             res.redirect('/')
//             window.confirm('You are loggedin')
//         } else {
//             res.render('/login', {
//                 error: 'email not found'
//             })
//         }
//     })
// }
// function logout(req, res) {
//     req.logout()
//     window.confirm("you are logged out")
//     req.session.destroy()
//     res.redirect('/')
// }
"use strict";