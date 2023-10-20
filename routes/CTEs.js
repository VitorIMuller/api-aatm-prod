const router = require('express').Router()

const CTEController = require('../controllers/CTEController')

router.route('/CTE').get((req, res) => CTEController.getAll(req, res))
router.route('/CTE').post((req, res) => CTEController.create(req, res))
router.route('/CTE/:id').get((req, res) => CTEController.get(req, res))
router.route('/CTE/:id').delete((req, res) => CTEController.delete(req, res))
router.route('/CTE/:id').patch((req, res) => CTEController.update(req, res))

module.exports = router
