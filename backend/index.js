const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 5000

/*Middleware*/
app.use(express.json())
express.urlencoded({ extended: true })
app.use(cors())

//connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

// Bind connection to open event (to get notification of connection successes)
db.once('open', function () {
  console.log('MongoDB database connected successfully!')
})

//routes
app.use('/auth', require('./routes/authRoute'))

app.listen(port, () => {
  console.log('Listening on port: ', port)
})
