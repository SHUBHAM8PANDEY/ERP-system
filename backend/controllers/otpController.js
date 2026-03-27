// const nodemailer = require("nodemailer");

// const otpStore = {}; // temporary store

// // send OTP
// exports.sendOtp = async (req, res) => {
//   const { email } = req.body;

//   const otp = Math.floor(100000 + Math.random() * 900000);
//   otpStore[email] = otp;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "YOUR_EMAIL@gmail.com",
//       pass: "YOUR_APP_PASSWORD"
//     }
//   });

//   await transporter.sendMail({
//     from: "YOUR_EMAIL@gmail.com",
//     to: email,
//     subject: "ERP OTP",
//     text: `Your OTP is ${otp}`
//   });

//   res.send({ message: "OTP sent" });
// };

// // verify OTP
// exports.verifyOtp = (req, res) => {
//   const { email, otp } = req.body;

//   if (otpStore[email] == otp) {
//     delete otpStore[email];
//     res.send({ message: "Login success" });
//   } else {
//     res.send({ message: "Invalid OTP" });
//   }
// };