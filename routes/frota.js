const router = require('express').Router()

const frotaController = require('../controllers/frotaController')

router.route('/frota').get((req, res) => frotaController.getAll(req, res))
router.route('/frota').post((req, res) => frotaController.create(req, res))
router.route('/frota/:id').get((req, res) => frotaController.get(req, res))
router
  .route('/frota/:id')
  .delete((req, res) => frotaController.delete(req, res))
router.route('/frota/:id').patch((req, res) => frotaController.update(req, res))

module.exports = router
