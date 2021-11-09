const Booking = require('../models/Booking.model')
const { sendMail } = require('../utils/sendMail')

exports.create = async (req, res) => {
  try {
    const { client, sessionType, month, day, hour } = req.body

    // if fields are empty or booking already exists throw error
    if ([client, sessionType, month, day, hour].includes('')) { throw new Error('Wrong input...') }
    if (await Booking.exists({ month, day, hour })) { res.status(403).json({ msg: 'Booking already exists' }) }
    else {
      const newBooking = new Booking({ client, sessionType, month, day, hour })
      await newBooking.save()

      await sendMail({
        to: 'maja.kuczynska@interia.pl',
        subject: 'Nowy klient!! <3 <3',
        text: `${client.firstName} ${client.lastName} (${client.phone}) zarezerwował sesję typu ${sessionType} w terminie ${day}.${month + 1} o godzinie ${hour + 1}:00`
      })

      res.json(newBooking)
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.getAll = async (_, res) => {

  try {
    res.json(await Booking.find().select('month day hour'))
  } catch (err) {
    res.status(500).json(err)
  }
}
