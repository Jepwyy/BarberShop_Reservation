const Reservation = require('../model/reservationModel')
const cloudinary = require('../config/cloudinaryCon')
const jwt = require('jsonwebtoken')

const reservationController = {
  createReservation: async (req, res) => {
    const token = req.cookies['access-token']
    const { haircutId, datetime } = req.body
    const receiptImage = req.file

    try {
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized: JWT missing' })
      }
      if (!haircutId || !datetime) {
        return res.status(401).json({ message: 'Please Fill All' })
      }

      const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
      const userLoggedIn = decodedToken.user._id

      if (!userLoggedIn) {
        return res.status(403).json({ message: 'Forbidden: Log in required' })
      }

      const existingReservation = await Reservation.findOne({ datetime })
      if (existingReservation) {
        return res.status(400).json({ message: 'This slot already reserved.' })
      }

      if (receiptImage) {
        const upload = await cloudinary.uploader.upload(receiptImage.path)

        const newReservation = new Reservation({
          userId: userLoggedIn,
          haircutId,
          datetime,
          receipt: upload.url,
        })
        await newReservation.save()
      }

      res.status(201).json({ message: 'Reservation created successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal server error' })
    }
  },
}

module.exports = reservationController
