const mongoose = require("mongoose");

// Định nghĩa schema cho trường "icon"
const iconSchema = mongoose.Schema({
  type: { type: String },
  key: { type: String },
  ref: { type: String },
  props: { type: mongoose.Schema.Types.Mixed },
  _owner: { type: String },
  _store: { type: mongoose.Schema.Types.Mixed },
});

// Định nghĩa schema cho một phần "menuList" trong "group"
const menuListSchema = mongoose.Schema({
  heading: { type: String, default: "" },
  extend: [
    {
      name: { type: String, default: "" },
      path: { type: String, default: "" },
    },
  ],
});

// Định nghĩa schema cho phần "group"
const groupSchema = mongoose.Schema({
  menuList: [menuListSchema],
  menuAds: {
    img: { type: String },
    path: { type: String },
  },
});

// Định nghĩa schema cho toàn bộ document
const catelogySchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  path: { type: String, required: true },
  icon: iconSchema,
  group: [groupSchema],
});

// Tạo model từ schema
const Catelogy = mongoose.model("Catelogy", catelogySchema);

module.exports = Catelogy;
