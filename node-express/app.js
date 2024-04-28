const express = require("express");
require("colors");

const PORT = 3013;

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Main route");
});

router.get("/about", (req, res) => {
  res.send("About ");
});

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`.yellow);
});
