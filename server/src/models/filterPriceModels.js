const mongoose = require("mongoose");

const priceSchema = mongoose.Schema(
  {
    label: { type: String, require: true },
    minPrice: { type: Number, require: true },
    maxPrice: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Price = mongoose.model("Price", priceSchema);

module.exports = Price;


