const Carousel = require("../models/carouselModels");

const carouselController = {
  getData: async (req, res) => {
    try {
      const carousel = await Carousel.find({});
      res.status(200).json(carousel);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  createData: async (req, res) => {
    try {
      const carousel = await Carousel.create(req.body);
      res.status(200).json(carousel);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = carouselController;
