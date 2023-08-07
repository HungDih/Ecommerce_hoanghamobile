const Footer = require("../models/footerSectionModels");

const footerController = {
  getData: async (req, res) => {
    try {
      const footer = await Footer.find({}).sort({ id: 1 });
      res.status(200).json(footer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  createData: async (req, res) => {
    try {
      const footer = await Footer.create(req.body);
      res.status(200).json(footer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = footerController;
