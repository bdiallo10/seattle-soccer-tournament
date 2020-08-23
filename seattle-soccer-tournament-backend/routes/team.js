const router = require('express').Router();
const ctrl = require('../controllers')

//routes
router.get('/', ctrl.team.index);
router.get('/:id', ctrl.team.show)
router.post('/', ctrl.team.create)
router.put('/:id', ctrl.team.update)
router.delete('/:id', ctrl.team.destroy)

module.exports = router;