const Name = require("../models/filterNameModels");

const nameController = {
  getData: async (req, res) => {
    try {
      const name = await Name.find({});
      res.status(200).json(name);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  createData: async (req, res) => {
    try {
      const name = await Name.create(req.body);
      res.status(200).json(name);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = nameController;
