const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)


sgMail.send({
    to: 'hvpatil060999@gmail.com',
    from : 'hvpatil060999@gmail.com',
    subject: 'FHRITP',
    text: 'laughnhsjithead'
})
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);