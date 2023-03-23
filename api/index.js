const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");


dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDb Connection Succesfull");
  })
  .catch((err) => {
    console.error(err);
  });

  app.use("/api/auth", authRoute)
  app.use("/api/user", userRoute)

app.listen("5005", () => {
  console.log("Backend is running");
});
