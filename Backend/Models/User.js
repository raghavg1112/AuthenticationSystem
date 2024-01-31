const mongoose = require("mongoose");

const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  countryCode: { type: Number, required: true },
  phoneNumber: { type: Number, required: true, unique: true },
};

const User = mongoose.model("User", userSchema);
module.exports = User;
