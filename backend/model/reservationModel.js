const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
      unique: true,
    },
    price: {
      type: String,
      required: [true, 'Please enter a price'],
      min: 8,
    },
    image: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)
const Reservation = mongoose.model('reservation', reservationSchema)

module.exports = Reservation
