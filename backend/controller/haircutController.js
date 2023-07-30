const Haircut = require('../model/haircutModel')

const cloudinary = require('../config/cloudinaryCon')

const haircutController = {
  createHaircut: async (req, res) => {
    try {
      const image = req.file
      const { name, price } = req.body

      if (!name || !price) {
        return res.status(400).json({ message: 'Please enter all fields' })
      }

      const existingHaircut = await Haircut.findOne({ name })
      if (existingHaircut) {
        return res.status(400).json({ message: 'Haircut already on the list' })
      }
      if (image) {
        const upload = await cloudinary.uploader.upload(image.path)

        const newHaircut = new Haircut({
          name,
          price,
          image: upload.url,
        })
        await newHaircut.save()
        res.json({ message: 'Haircut added successfully' })
      } else {
        res.status(400).json({ message: 'Image is required' })
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Haircut failed to add' })
    }
  },
  viewHaircut: async (req, res) => {
    try {
      const haircuts = await Haircut.find({})
      if (!haircuts) {
        res.status(400).json({ message: 'No haircuts exist!' })
      } else {
        res.status(200).json(haircuts)
      }
    } catch (err) {}
  },
  deleteHaircut: async (req, res) => {
    const haircutId = req.params.id
  },
  updateHaircut: async (req, res) => {},
}

module.exports = haircutController
