const router = require('express').Router()
const passport = require('../passport')
const ctrl = require('../controllers')

const test = (req, res, next) => {
    console.log('trying to log in')
    next()
}

router.post('/login', test, passport.authenticate('local'), ctrl.auth.login)
router.post('/register', ctrl.auth.register)
router.delete('/logout', ctrl.auth.logout)
// router.get('/verify', ctrl.auth.verify)

module.exports = router