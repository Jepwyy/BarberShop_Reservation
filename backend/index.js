const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const corsOptions = require('./config/corsOptions')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 5000

/*Middleware*/
app.use(express.json())
express.urlencoded({ extended: true })
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(
  session({
    key: 'userId',
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
)
//connection
const uri = process.env.ATLAS_URI
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err))

//routes
app.use('/auth', require('./routes/authRoute'))

app.listen(port, () => {
  console.log('Listening on port: ', port)
})
