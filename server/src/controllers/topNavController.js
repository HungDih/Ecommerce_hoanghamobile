const TopNav = require("../models/topNavModels");

const navtitlesController = {
  getData: async (req, res) => {
    try {
      const topnavs = await TopNav.find({}).sort({ id: 1 });
      res.status(200).json(topnavs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  createData: async (req, res) => {
    try {
      const topnavs = await TopNav.create(req.body);
      res.status(200).json(topnavs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = navtitlesController;
