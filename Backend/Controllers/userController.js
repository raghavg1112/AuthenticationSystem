const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const User = require("../Models/User");
const Otp = require("../Models/otp");

const signUp = async (req, res) => {
  console.log(`server signUp`);
  console.log(req.body);
  // const { name, email, password, countryCode, phoneNumber } = req.body;

  // const salt = await bcrypt.genSalt(10);
  // const securePassword = await bcrypt.hash(password, salt);

  // const user = new User({
  //   name: name,
  //   email: email,
  //   password: securePassword,
  //   countryCode: countryCode,
  //   phoneNumber: phoneNumber,
  // });

  // user
  //   .save()
  //   .then(() => {
  //     return res.status(201).json({
  //       success: true,

  //       message: "User created successfully",
  //       errorCode: 201,
  //       data: null,
  //     });
  //   })
  //   .catch((err) => {
  //     return res.json({
  //       success: false,
  //       message: err,
  //       errorCode: 500,
  //       data: null,
  //     });
  //   });
};

const login = async (req, res) => {
  console.log(`login`);
  console.log(req.body);
  // try {

  //   const { email, password } = req.body;

  //   const user = User.findOne({ email: email });
  //   if (!user) {
  //     return res.status(401).json({
  //       success: false,
  //       errorCode: 401,
  //       message: "Authentication failed. User not found.",
  //       data: null,
  //     });
  //   }

  //   const checkPassword = await bcrypt.compare(password, user.password);
  //   if (!checkPassword) {
  //     return res.status(401).json({
  //       success: false,
  //       errorCode: 401,
  //       message: "Authentication failed. Wrong Password.",
  //       data: null,
  //     });
  //   }
  //   const SECRETKEY = process.env.SECRETKEY;
  //   const token = await jwt.sign(
  //     {
  //       name: user.name,
  //       email: user.email,
  //       phoneNumber: user.phoneNumber,
  //       countryCode: user.countryCode,
  //     },
  //     SECRETKEY,
  //     { expiresIn: `10m` }
  //   );

  //   res.cookie("jwt", token, { secure: true });
  //   return res.statues(200).json({
  //     success: true,
  //     errorCode: 200,
  //     message: "Authentication successful",
  //     data: null,
  //   });
  // } catch (err) {
  //   return res.status(500).json({
  //     success: false,
  //     errorCode: 500,
  //     message: err.message,
  //     data: null,
  //   });
  // }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      success: false,
      errorCode: 401,
      message: " User not found.",
      data: null,
    });
  }

  nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.email,
      pass: process.env.nodemailerPassword,
    },
  });

  const mailOptions = {
    from: process.env.email, // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",
  };

  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail();
      console.log(`mail sent`);
    } catch (err) {
      console.log(err);
    }
  };
  sendMail(transporter, mailOptions);
};

const otpVerification = async (req, res) => {
  const { email, otp } = req.body;

  const user = Otp.findOne({ email: email });

  if (user.otp != otp) {
    return res.status(401).json({
      success: false,
      errorCode: 401,
      message: " User not found.",
      data: null,
    });
  }

  const token = await jwt.sign(
    {
      email: email,
    },
    SECRETKEY,
    { expiresIn: `5m` }
  );

  res.cookie("jwt", token, { secure: true });
  return res.statues(200).json({
    success: true,
    errorCode: 200,
    message: "Authentication successful",
    data: null,
  });
};

const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  const user = User.findOneAndUpdate(
    { email: email },
    { $set: { password: password } }
  );
  if (!user) {
    return res.status(401).json({
      success: false,
      errorCode: 401,
      message: "failed to change password",
      data: null,
    });
  }

  return res.statues(200).json({
    success: true,
    errorCode: 200,
    message: "Password changed successfully",
    data: null,
  });
};

const fetchData = async (req, res) => {
  return res.statues(200).json({
    success: true,
    errorCode: 200,
    message:
      "Data Fetched successfully after authorisation by middleware using jwt",
    data: { wAdmin },
  });
};

module.exports = {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  otpVerification,
  fetchData,
};
