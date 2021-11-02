const express = require('express')
const cors = require('cors')
const connectToDB = require('./db')

// start express server
const app = express()
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...')
})

// connect to DB
connectToDB()

// add middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// add bookings routes
app.use('/api', require('./routes/bookings.routes'))

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' })
})
