const Catelogy = require("../models/catelogyModels");

const catelogyController = {
  getData: async (req, res) => {
    try {
      const catelogy = await Catelogy.find({}).sort({ id: 1 });
      res.status(200).json(catelogy);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  createData: async (req, res) => {
    try {
      const catelogy = await Catelogy.create(req.body);
      res.status(200).json(catelogy);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = catelogyController;
