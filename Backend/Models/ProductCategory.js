const mongoose = require("mongoose");

const productCategorySchema = {
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
};

const productCategory = mongoose.model(
  "productCategory",
  productCategorySchema
);
module.exports = productCategory;
