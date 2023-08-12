const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reservationSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    haircutId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'haircut',
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
    },
    receipt: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rate', 'finished'],
      default: 'pending',
    },
  },
  { timestamps: true }
)
const Reservation = mongoose.model('reservation', reservationSchema)

module.exports = Reservation
