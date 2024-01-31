const mongoose = require("mongoose");

const otpSchema = {
  email: { type: String, required: true, unique: true },
  otp: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
  },
};

const Otp = mongoose.model("Otp", otpSchema);
module.exports = Otp;
