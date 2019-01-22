const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express();

router.get("/add-product", (req, res) => {
  res.sendfile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  res.redirect("/shop/home");
});

router.get("/home", (req, res) => {
  res.sendfile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
