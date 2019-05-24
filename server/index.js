const compression = require('compression');
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(compression());
const API_PORT = process.env.PORT || 5000;
const router = express.Router();

const error = require("./views/error.js");
const success = require("./views/success.js");

app.use(express.static(__dirname + "/dist"));
app.use("/css", express.static(__dirname));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Form POST route
router.post("/send", (req, res) => {
  const output = `

    <p>You have a new contact request</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  //Nodemailer set up
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: process.env.EMAIL, // sender address
      to: process.env.EMAIL2, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Sending Email using Node.js", // plain text body
      html: output // html body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  }

  main().catch(console.error);
  res.send(success);
});

app.get("*", (req, res) => {
  res.status(404).send(error);
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));