const Price = require("../models/filterPriceModels");

const priceController = {
  getData: async (req, res) => {
    try {
      const price = await Price.find({});
      res.status(200).json(price);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  createData: async (req, res) => {
    try {
      const price = await Price.create(req.body);
      res.status(200).json(price);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = priceController;
