const sendmail = require('sendmail')();
const { argv } = require('node:process');

const userName = argv[0];
const message = argv[1];
const email = argv[2];

let mailOptions = {
    from: 'jleblanc304@gmail.com',
    to: 'jleblanc304@gmail.com',
    subject: 'Leblades Inquiry',
    html: `Hello, my name is ${userName}. I am reaching out from leblades.com.\n
    My message is: ${message}. \nPlease reach out to me at ${email}.`,
}

sendmail(mailOptions, function(e, inf) {
    if (e) {
        console.log(e);
    } else {
        console.log('email sent: ' + inf.response);
    }
})
