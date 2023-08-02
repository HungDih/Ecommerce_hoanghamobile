const mongoose = require("mongoose");

const footerSectionSchema = mongoose.Schema({
  header: { type: String, required: true },
  extends: [
    {
      title: { type: String, required: true },
      path: { type: String, required: true },
    },
  ],
});

const Footer = mongoose.model("FooterSection", footerSectionSchema);

module.exports = Footer;
