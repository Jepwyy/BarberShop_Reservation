const jwt = require('jsonwebtoken')

const verifyJWT = (req, res, next) => {
  const token = req.cookies['access-token']
  if (!token) {
    res.json({ auth: false, message: 'Invalid Token' })
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: 'Authentication Failed!' })
      } else {
        req.user = decoded.user
        next()
      }
    })
  }
}
module.exports = verifyJWT
