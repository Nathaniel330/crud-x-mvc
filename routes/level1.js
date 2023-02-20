const express = require('express')
const router = express.Router()
const level1Controller = require('../controllers/level1')

router.get('/', level1Controller.getLevel1)
router.post('/createObject', level1Controller.createObject)
router.delete('/deleteObject', level1Controller.deleteObject)
router.put('/updateObject', level1Controller.updateObject)

module.exports = router