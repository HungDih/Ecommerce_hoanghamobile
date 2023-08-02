const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModels");
const Name = require("./models/filterNameModels");
const Carousel = require("./models/carouselModels");
const Catelogy = require("./models/catelogyModels");
const Price = require("./models/filterPriceModels");
const TopNav = require("./models/topNavModels");
const Footer = require("./models/footerSectionModels");

const app = express();

//Midderware
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("hello homepage path:/");
});

//Products:
//Getdata
app.get("/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//Create:
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Name
//Getdata
app.get("/names", async (req, res) => {
  try {
    const name = await Name.find({});
    res.status(200).json(name);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//Create:
app.post("/names", async (req, res) => {
  try {
    const name = await Name.create(req.body);
    res.status(200).json(name);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Carousel
//Getdata
app.get("/carousels", async (req, res) => {
  try {
    const carousel = await Carousel.find({});
    res.status(200).json(carousel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//Create:
app.post("/carousels", async (req, res) => {
  try {
    const carousel = await Carousel.create(req.body);
    res.status(200).json(carousel);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Price
//Getdata
app.get("/prices", async (req, res) => {
  try {
    const price = await Price.find({});
    res.status(200).json(price);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//Create:
app.post("/prices", async (req, res) => {
  try {
    const price = await Price.create(req.body);
    res.status(200).json(price);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Catelogy
//Getdata
app.get("/catelogys", async (req, res) => {
  try {
    const catelogy = await Catelogy.find({});
    res.status(200).json(catelogy);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//Create:
app.post("/catelogys", async (req, res) => {
  try {
    const catelogy = await Catelogy.create(req.body);
    res.status(200).json(catelogy);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// TopNav
//Getdata
app.get("/navtitles", async (req, res) => {
  try {
    const nav = await TopNav.find({});
    res.status(200).json(nav);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
//Create:
app.post("/navtitles", async (req, res) => {
  try {
    const nav = await TopNav.create(req.body);
    res.status(200).json(nav);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


// Footers
//Getdata
app.get("/footers", async (req, res) => {
    try {
      const footer = await Footer.find({});
      res.status(200).json(footer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
  //Create:
  app.post("/footers", async (req, res) => {
    try {
      const footer = await Footer.create(req.body);
      res.status(200).json(footer);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });



mongoose
  .connect(
    "mongodb+srv://admin:Hung12345678@exampleproject.bmoqfb0.mongodb.net/"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Node ecommmerce server is running on port 5000");
    });
    console.log("Connect to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
