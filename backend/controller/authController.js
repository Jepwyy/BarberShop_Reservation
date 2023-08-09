const Users = require('../model/authModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {
  register: async (req, res) => {
    const { email, name, password } = req.body
    try {
      // Validate input
      if (!email || !name || !password) {
        return res.status(400).json({ message: 'Please enter all fields' })
      }

      // Check if user already exists
      const existingUser = await Users.findOne({ email })
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' })
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create new user document
      const newUser = new Users({
        email,
        name,
        password: hashedPassword,
      })

      // Save user to database

      await newUser.save()
      res.status(200).json({ message: 'Registration successful' })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Registration failed' })
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
        const token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
          expiresIn: 60 * 60 * 24 * 30 * 1000,
        })

        res.cookie('access-token', token, {
          sameSite: 'none',
          httpOnly: true,
          secure: true,
        })
        res.status(200).json({
          message: 'Login Successfull',
          auth: true,
          user: user,
        })
      }
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Login failed' })
    }
  },

  logout: (req, res) => {
    try {
      res.clearCookie('access-token', {
        sameSite: 'none',
        httpOnly: true,
        secure: true,
      })

      res.status(200).json({
        message: 'Logout Successful',
      })
    } catch (err) {
      console.error(err)
      res.status(500).json({ message: 'Logout failed' })
    }
  },
  verify: (req, res) => {
    const user = req.user
    res.json({ message: 'Authenticated Successfully!', auth: true, user: user })
  },
}

module.exports = userController
