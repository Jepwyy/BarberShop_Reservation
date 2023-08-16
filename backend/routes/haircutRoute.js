const { Router } = require('express')
const router = Router()
const haircutController = require('../controller/haircutController')

router.post('/create', haircutController.createHaircut)
router.get('/view', haircutController.viewHaircut)
module.exports = router
