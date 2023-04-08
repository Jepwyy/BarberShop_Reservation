const Users = require('../model/authModel')
const User = require('../model/authModel')
const bcrypt = require('bcryptjs')
const userController = {
  register: async (req, res) => {
    const { email, name, password } = req.body

    // Validate input
    if (!email || !name || !password) {
      return res.status(400).json({ message: 'Please enter all fields' })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
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
  refreshToken: (req, res) => {
    if (req.session.user) {
      res.json({ token: true, user: req.session.user })
    } else {
      res.json({ token: false })
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
