const Booking = require('../models/Booking.model')

exports.create = async (req, res) => {
  try {
    const { client, sessionType, month, day, hour } = req.body
    if (client && sessionType && month && day && hour) { // if fields are not empty...
      const newBooking = new Booking({ client, sessionType, month, day, hour })
      await newBooking.save()
      res.json(newBooking)
    } else {
      throw new Error('Wrong input!')
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getAll = async (_, res) => {

  try {
    res.json(await Booking.find().select('month day hour'));
  } catch (err) {
    res.status(500).json(err)
  }
}
