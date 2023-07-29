const { Router } = require('express')
const router = Router()
const authController = require('../controller/authController')
const verifyJWT = require('../middlewares/verifyJWT')

router.get('/', verifyJWT, authController.verify)
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.post('/google', authController.googleLogin)

module.exports = router
