const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const catelogyController = require("../controllers/catelogyController");
const carouselController = require("../controllers/carouselController");
const nameController = require("../controllers/filterNameController");
const footerController = require("../controllers/footerSectionController");
const navtitlesController = require("../controllers/topNavController");
const priceController = require("../controllers/filterPriceController");

// Product
router.get("/products", productController.getData);
router.post("/products", productController.createData);
// Carousel
router.get("/carousels", carouselController.getData);
router.post("/carousels", carouselController.createData);
// Price
router.get("/prices", priceController.getData);
router.post("/prices", priceController.createData);
// Name
router.get("/names", nameController.getData);
router.post("/names", nameController.createData);
// Footer
router.get("/footers", footerController.getData);
router.post("/footers", footerController.createData);
// Catelogy
router.get("/catelogys", catelogyController.getData);
router.post("/catelogys", catelogyController.createData);
// Navities
router.get("/navtitles", navtitlesController.getData);
router.post("/navtitles", navtitlesController.createData);

module.exports = router;
