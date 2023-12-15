const router = require('express').Router()

const cobrancaController = require('../controllers/cobrancaController')

router.route('/cobrancas').get((req, res) => cobrancaController.getAll(req, res))
router.route('/cobranca').post((req, res) => cobrancaController.create(req, res))
router.route('/cobranca/:id').get((req, res) => cobrancaController.get(req, res))
router
    .route('/cobranca/:id')
    .delete((req, res) => cobrancaController.delete(req, res))
router
    .route('/cobranca/:id')
    .patch((req, res) => cobrancaController.update(req, res))

module.exports = router
