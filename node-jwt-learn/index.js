const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./authRouter");

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5000;
const DB_LINK = process.env.DB_LINK;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(DB_LINK);
    app.listen(PORT, () => {
      console.log(`SERVER IS WORKING ON PORT ${PORT}`);
    });
  } catch (error) {
    console.log("ERROR start", error);
  }
};

start();
