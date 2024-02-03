const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productItem",
    required: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  state: { type: "String", required: true },
  orderPlacedDate: Date.now(),
  dispatchDate: { type: Date },
  deliveryDate: { type: Date },
});

const productOrder = mongoose.model("productOrder", productOrderSchema);
module.exports = productOrder;
