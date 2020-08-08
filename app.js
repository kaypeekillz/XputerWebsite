const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/src', express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname +  '/dist/xputerWebsite'));

// app.get('/', (req, res) => {
    // res.render('scr/app')
    app.get('/*', (req, res) => {
        res.sendFile('index.html', { root: './dist/xputerWebsite'});
      });
// });

app.post('/send', (req, res) => {
    // console.log();
    const output = `
        <p>Hello, you have a message from the website</p>
        <h3>Contact Details</h3>
        <ul>
            <li> <strong>Name:</strong> ${ req.body.name } </li>
            <li> <strong>Email:</strong> ${ req.body.email } </li>
            <li> <strong>Number:</strong> ${ req.body.phone } </li>
            <li> <strong>Subject:</strong> ${ req.body.subject } </li>
        </ul>
        <h3><strong>Message</strong></h3>
        <p>${ req.body.message }</p>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    // host: 'smtp.zoho.com',
    // host: 'smtp.ethereal.email',
    // host: "info@xputertechnologies.com",
    // port: 587,
    // secure: false,
    auth: {
      user: "kehindepeter79@gmail.com", // generated ethereal user
      pass: "kennypeter123", // generated ethereal password
    },
    tls: {
        rejectUnauthorised: false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Xputer Tecgnologies Website" <kehindepeter79@gmail.com>', // sender address
    to: "kehindepeter79@yahoo.com", // list of receivers
    subject: "Contact Mail", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // res.sendFile('index.html', { root: './dist/mailing'}, {msg: "Email Sent!"});
      console.log("EMAIL SENT!!!");  
  })

});

app.listen(3000, () => console.log('Server started...'));