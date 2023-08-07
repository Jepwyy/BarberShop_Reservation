const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const reservationController = require('../controller/reservationController')

router.post(
  '/create',
  upload.single('receiptImage'),
  reservationController.createReservation
)

module.exports = router
