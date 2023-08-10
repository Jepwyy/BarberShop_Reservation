const { Router } = require('express')
const router = Router()
const authController = require('../controller/authController')
const verifyJWT = require('../middlewares/verifyJWT')

router.get('/cookie', verifyJWT, authController.verify)
router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/logout', authController.logout)

module.exports = router
