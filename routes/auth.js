const router = require('express').Router()

const authController = require('../controllers/authController')

router.route('/auth').post((req, res) => authController.create(req, res))
router.route('/auth/:id').get((req, res) => authController.get(req, res))

module.exports = router
