const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const rootDir = require("./util/path");

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

app.use((req, res, next) => {
  res.sendfile(path.join(rootDir, "views", "404.html"));
});

app.listen(7007, err => {
  if (err) console.log(err);
  else console.log("server running");
});
