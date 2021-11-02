const mongoose = require('mongoose')

const connectToDB = () => {

  // connect to DB
  const uri = process.env.NODE_ENV !== 'production' ? 'mongodb://localhost:27017/photosDB' : process.env.DB_URI
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection

  // on success
  db.once('open', () => {
    console.log('Connected to the database')
  })

  // on error
  db.on('error', err => console.log('Error ' + err))
}

module.exports = connectToDB
