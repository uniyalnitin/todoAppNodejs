const express = require("express");

const router = express.Router();

const taskController = require("../controllers/task_controller/taskController");
router.get("/", taskController.tasks);
router.post("/addTask", taskController.addTask);
router.get("/deleteTask", taskController.deleteTask);
module.exports = router;
