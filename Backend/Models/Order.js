const mongoose = require("mongoose");

// const productOrderSchema=new mongoose.Schema({                       //schema for defining multiple product orders in a single order

// })

const orderSchema = new mongoose.Schema({
  orders: { type: Array },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
