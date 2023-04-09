const mongoose = require('mongoose')
const Schema = mongoose.Schema

const haircutSchema = new Schema(
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
      type: Number,
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
const Haircut = mongoose.model('haircut', haircutSchema)

module.exports = Haircut
