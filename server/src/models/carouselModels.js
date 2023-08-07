const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    path: { type: String, require: true },
    logo: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Carousel = mongoose.model("Carousel", carouselSchema);

module.exports = Carousel;
