const express = require('express')
const router = express.Router()
const rootController = require('../controllers/root')

router.get('/', rootController.getIndex)
router.post('/createTest', rootController.createTest)

module.exports = router