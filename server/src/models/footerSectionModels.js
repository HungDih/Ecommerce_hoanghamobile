const mongoose = require("mongoose");

const footerSectionSchema = mongoose.Schema({
  id: { type: Number, require: true },
  header: { type: String, required: true },
  extends: [
    {
      title: { type: String, required: true },
      path: { type: String, required: true },
    },
  ],
  label: [
    {
      row: { type: String, required: true },
      src: [String],
    },
  ],
});

const Footer = mongoose.model("FooterSection", footerSectionSchema);

module.exports = Footer;
