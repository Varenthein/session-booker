const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true }
})

const bookingSchema = new mongoose.Schema({
  client: {
    type: clientSchema,
    required: true
  },
  sessionType: { type: String, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  hour: { type: Number, required: true }
})

module.exports = mongoose.model('Booking', bookingSchema)
