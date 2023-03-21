const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDb Connection Succesfull");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen("5005", () => {
  console.log("Backend is running");
});
