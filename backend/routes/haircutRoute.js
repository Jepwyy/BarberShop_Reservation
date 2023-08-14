const { Router } = require('express')
const router = Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const haircutController = require('../controller/haircutController')

router.post('/create', upload.single('image'), haircutController.createHaircut)
router.get('/view', haircutController.viewHaircut)
module.exports = router
