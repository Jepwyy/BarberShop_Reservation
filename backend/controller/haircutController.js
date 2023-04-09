const Haircut = require('../model/haircutModel')
const cloudinary = require('cloudinary').v2

// Configuration
cloudinary.config({
  cloud_name: 'dzlvwbkos',
  api_key: '521159292165238',
  api_secret: 'GgdXSgJPUDeMFP40JB3R7XIDpwc',
})

const haircutController = {
  createHaircut: async (req, res) => {
    try {
      const image = req.file
      const { name, description, price } = req.body

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
          description,
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
}

module.exports = haircutController
