// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const nodemailer = require('nodemailer');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());


// const otps = {};


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });


// app.post('/send-otp', async (req, res) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ error: 'Email is required' });
//   }

//   const otp = Math.floor(100000 + Math.random() * 900000).toString();
//   otps[email] = otp;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Your OTP Code',
//     text: `Your OTP is ${otp}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'OTP sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ error: 'Failed to send OTP' });
//   }
// });


// app.post('/verify-otp', (req, res) => {
//   const { email, otp } = req.body;

//   if (!email || !otp) {
//     return res.status(400).json({ error: 'Email and OTP are required' });
//   }

//   if (otps[email] === otp) {
//     delete otps[email]; 
//     res.json({ success: true });
//   } else {
//     res.status(400).json({ success: false, message: 'Invalid OTP' });
//   }
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(express.json());

app.post('/send-otp', (req, res) => {
  // Your send OTP logic
  res.send('OTP sent!');
});

module.exports.handler = serverless(app);
