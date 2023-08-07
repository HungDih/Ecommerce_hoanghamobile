const mongoose = require("mongoose");

const nameSchema = mongoose.Schema(
  {
    validation: { type: String, require: true },
    keyword: { type: [String], require: true },
  },
  {
    timestamps: true,
  }
);

const Name = mongoose.model("Name", nameSchema);

module.exports = Name;