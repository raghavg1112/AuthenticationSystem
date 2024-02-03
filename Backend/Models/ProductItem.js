const mongoose = require("mongoose");

const productItemSchema = {
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  specification: { type: String, required: true },
  categories: { type: Array },
};

const productItem = mongoose.model("productItem", productItemSchema);
module.exports = productItem;
