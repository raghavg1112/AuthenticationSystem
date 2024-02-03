const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productItem",
    required: true,
  },
  price: { type: Number, required: true },
});

const sellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  location: { type: String },
  product: [productSchema],
});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;
