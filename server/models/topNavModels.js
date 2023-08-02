const mongoose = require("mongoose");

const topNavSchema = mongoose.Schema(
  {
    id: { type: Number, require: true },
    title: { type: String, require: true },
    path: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const TopNav = mongoose.model("TopNav", topNavSchema);

module.exports = TopNav;

