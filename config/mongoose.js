const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/todo_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Cannot connect to mongodb"));

db.once("open", function () {
  console.log("Successfully connected to mongodb");
});
