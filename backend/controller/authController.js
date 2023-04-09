const Users = require('../model/authModel')
const bcrypt = require('bcryptjs')
const cloudinary = require('../config/cloudinaryCon')
const { OAuth2Client } = require('google-auth-library')
//const fetch = require('node-fetch')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const userController = {
  googleLogin: async (req, res) => {
    const { token } = req.body

    try {
      // Verify Google access token
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      })

      const { name, email, picture } = ticket.getPayload()

      // Check if user already exists
      const existingUser = await Users.findOne({ email })
      if (existingUser) {
        req.session.user = existingUser
        return res.status(200).json({
          message: 'Login Successfull',
          user: req.session.user,
        })
      }

      // Upload profile image to Cloudinary
      const response = await fetch(picture)
      const buffer = await response.buffer()
      const result = await cloudinary.uploader.upload(buffer, {
        public_id: email.split('@')[0],
        folder: 'profile-images',
      })

      // Create new user document
      const newUser = new Users({
        email,
        name,
        avatar: result.secure_url,
      })

      // Save user to database
      await newUser.save()
      req.session.user = newUser
      res.status(200).json({
        message: 'Login Successfull',
        user: req.session.user,
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Login failed' })
    }
  },
  register: async (req, res) => {
    const { email, name, password } = req.body

    // Validate input
    if (!email || !name || !password) {
      return res.status(400).json({ message: 'Please enter all fields' })
    }

    // Check if user already exists
    const existingUser = await Users.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    // Hash and salt password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create new user document
    const newUser = new Users({
      email,
      name,
      password: hashedPassword,
    })

    // Save user to database
    try {
      await newUser.save()
      res.json({ message: 'Registration successful' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Registration failed' })
    }
  },
  refreshToken: (req, res) => {
    if (req.session.user) {
      res.json({ token: true, user: req.session.user })
    } else {
      res.json({ token: false })
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body
    try {
      // Validate input
      if (!email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' })
      }

      // Find user by email or username
      const user = await Users.findOne({ email })
      if (!user) {
        return res.status(400).json({ message: "Email doesn't exist! " })
      }

      // Check password
      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        return res
          .status(400)
          .json({ message: 'Email or password is incorrect' })
      } else {
        req.session.user = user
        res.status(200).json({
          message: 'Login Successfull',
          user: req.session.user,
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Login failed' })
    }
  },

  logout: (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          res.status(400).json({ message: 'unable to logout' })
        } else {
          res.status(200).json({ message: 'logout successfully' })
        }
      })
    }
  },
}

module.exports = userController
