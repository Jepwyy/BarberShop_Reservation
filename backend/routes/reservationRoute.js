const { Router } = require('express')
const router = Router()

const reservationController = require('../controller/reservationController')

router.post('/create', reservationController.createReservation)

module.exports = router
