const router = require('express').Router()

const viagemController = require('../controllers/viagemController')

router.route('/viagem').get((req, res) => viagemController.getAll(req, res))
router.route('/viagem').post((req, res) => viagemController.create(req, res))
router.route('/viagem/:id').get((req, res) => viagemController.get(req, res))
router
  .route('/viagem/:id')
  .delete((req, res) => viagemController.delete(req, res))
router
  .route('/viagem/:id')
  .patch((req, res) => viagemController.update(req, res))

module.exports = router
