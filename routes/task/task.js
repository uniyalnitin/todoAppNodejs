const express = require("express");

const router = express.Router();

const taskController = require("../../controllers/task_controller/taskController");

router.get("/", taskController.tasks);
router.get("/gettasks", taskController.getTasks);
router.post("/addTask", taskController.addTask);
module.exports = router;
