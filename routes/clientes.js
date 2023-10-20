const router = require('express').Router()

const clienteController = require('../controllers/clienteController')

router.route('/clientes').get((req, res) => clienteController.getAll(req, res))
router.route('/clientes').post((req, res) => clienteController.create(req, res))
router.route('/clientes/:id').get((req, res) => clienteController.get(req, res))
router
  .route('/clientes/:id')
  .delete((req, res) => clienteController.delete(req, res))
router
  .route('/clientes/:id')
  .patch((req, res) => clienteController.update(req, res))

module.exports = router
