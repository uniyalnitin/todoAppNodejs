const Task = require("../../models/Task");

module.exports.tasks = function (req, res) {
  // return res.json([{ id: 1, name: "Task 1" }]);
  Task.find({}, function (error, tasks) {
    if (error) {
      console.error.bind(console, "Error while fetching data");
    }
    return res.render("index", {
      title: "ToDo App",
      tasks: tasks,
    });
  });
};

module.exports.addTask = function (req, res) {
  description = req.body.description;
  date = req.body.date;
  category = req.body.category;
  Task.create(
    {
      description: description,
      dueDate: date,
      category: category,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error While creating new contact");
        return;
      }
      return res.redirect("back");
    }
  );
};

module.exports.deleteTask = function (req, res) {
  tasks = req.body;
  taskIds = req.query.checkboxes;
  try {
    console.log(typeof taskIds);
    if (typeof taskIds == "string") {
      console.log(Task.findById(taskIds).exec());
      Task.findByIdAndDelete(taskIds).exec();
    } else {
      taskIds.forEach((taskId) => {
        Task.findByIdAndDelete(taskId).exec();
      });
    }
    return res.redirect("back");
  } catch (error) {
    console.log(error);
    return res.redirect("back");
  }
};
