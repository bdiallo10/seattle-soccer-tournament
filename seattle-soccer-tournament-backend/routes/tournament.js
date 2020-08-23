const router = require('express').Router();
const ctrl = require('../controllers')

//routes
router.get('/', ctrl.tournament.index);
router.get('/:id', ctrl.tournament.show)
router.post('/', ctrl.tournament.create)
router.put('/:id', ctrl.tournament.update)
router.delete('/:id', ctrl.tournament.destroy)

module.exports = router;