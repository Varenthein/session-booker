const nodemailer = require('nodemailer')
const { MAIL_OPTIONS } = require('../config')

exports.sendMail = (options) => {
  return new Promise((resolve, reject) => {

    const transporter = nodemailer.createTransport({
      host: MAIL_OPTIONS.host,
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: MAIL_OPTIONS.auth.user,
        pass: MAIL_OPTIONS.auth.pass
      }
    })

    const message = {
      from: MAIL_OPTIONS.from.mail,
      to: options.to,
      envelope: {
        from: `${MAIL_OPTIONS.from.name} <${MAIL_OPTIONS.from.mail}>`,
        to: `${options.to}`
      },
      subject: options.subject,
      text: options.text
    }

    transporter.sendMail(message, (error, info) => {
      if (error) { reject(error) }
      else { resolve() }
    })
  })
}

