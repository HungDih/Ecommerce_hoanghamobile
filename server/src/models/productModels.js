const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    sticker: { type: String, default: "" },
    newPrice: { type: String, require: true },
    price: { type: String, default: "" },
    upPrice: { type: String, default: "" },
    brand: { type: String, require: true },
    discount: { type: String, default: "" },
    saleAdd: { type: String, require: true },
    images: { type: String, require: true },
    id: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
