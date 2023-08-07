const Product = require("../models/productModels");

const productController = {
  getData: async (req, res) => {
    try {
      const product = await Product.find({}).sort({ id: 1 });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  createData: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = productController;
