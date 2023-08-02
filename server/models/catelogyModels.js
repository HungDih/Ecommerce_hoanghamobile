const mongoose = require("mongoose");

// Định nghĩa schema cho một mục "menuExtend"
const menuExtendSchema = mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  logo: { type: String },
});

// Định nghĩa schema cho mục "menuList" có chứa các mục "menuExtend"
const menuListSchema = mongoose.Schema({
  heading: { type: String },
  extend: [menuExtendSchema],
});

// Định nghĩa schema cho mục "menuAds"
const menuAdsSchema = mongoose.Schema({
  img: { type: String, required: true },
  path: { type: String, required: true },
});

// Định nghĩa schema cho mục "group" chứa các mục "menuList" và "menuAds"
const groupSchema = mongoose.Schema({
  menuList: [menuListSchema],
  menuAds: menuAdsSchema,
});

// Định nghĩa schema cho mục "catelogy" chứa các mục "group"
const catelogySchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  path: { type: String, required: true },
  icon: {
    type: {
      type: String,
      required: true,
    },
    key: String,
    ref: String,
    props: {
      className: String,
    },
    _owner: String,
    _store: {},
  },
  group: [groupSchema],
});

const Catelogy = mongoose.model("Catelogy", catelogySchema);

module.exports = Catelogy;
