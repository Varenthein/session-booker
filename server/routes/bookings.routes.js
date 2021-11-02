const express = require('express')
const router = express.Router()

const bookings = require('../controllers/bookings.controller')

router.get('/bookings', bookings.getAll)
router.post('/bookings', bookings.create)

module.exports = router
