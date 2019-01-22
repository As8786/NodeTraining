const express = require("express");
const router = express();

router.get("/add", (req, res) => {
  res.send("<h1>testtttt</h1>");
});

module.exports = router;
