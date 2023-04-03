const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());
app.use(cors());

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
  app.use("/api/post", postRoute)
  app.use("/api/categories", categoryRoute)

app.listen("5005", () => {
  console.log("Backend is running");
});
