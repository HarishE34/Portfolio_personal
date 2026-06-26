require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' })); // your React port
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, msg } = req.body;
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `Portfolio message from ${name}`,
      text: msg,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Email failed' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));