const router = require('express').Router()

const motoristaController = require('../controllers/motoristaController')

router
  .route('/motorista')
  .get((req, res) => motoristaController.getAll(req, res))
router
  .route('/motorista')
  .post((req, res) => motoristaController.create(req, res))
router
  .route('/motorista/:id')
  .get((req, res) => motoristaController.get(req, res))
router
  .route('/motorista/:id')
  .delete((req, res) => motoristaController.delete(req, res))
router
  .route('/motorista/:id')
  .patch((req, res) => motoristaController.update(req, res))

module.exports = router
