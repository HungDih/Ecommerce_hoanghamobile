const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");

//Midderware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", routes);

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
