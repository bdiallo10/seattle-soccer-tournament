const router = require('express').Router();
const ctrl = require('../controllers')

//routes
router.get('/', ctrl.player.index);
router.get('/:id', ctrl.player.show)
router.post('/', ctrl.player.create)
router.put('/:id', ctrl.player.update)
router.delete('/:id', ctrl.player.destroy)

module.exports = router;