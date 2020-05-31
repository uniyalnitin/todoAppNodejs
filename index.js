const express = require("express");
const port = 8080;

const db = require("./config/mongoose");

const app = express();

const Task = require("./models/Task");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded());
app.use(express.static("assets"));
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.error.bind(console, `Cannot start server on port: ${port}`);
    return;
  }
  console.log(`Server running on port: ${port}`);
});
