const { Router } = require('express')
const router = Router()
const authController = require('../controller/authController')

router.post('/register', authController.register)
router.post('/login', authController.login)
router.delete('/logout', authController.logout)
router.post('/google', authController.googleLogin)

module.exports = router
