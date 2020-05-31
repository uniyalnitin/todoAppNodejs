class Model {
  constructor() {
    this.todos = [];
    this.getTodos();
  }
  getTodos() {
    let taskRows = document.querySelectorAll(".bottom-section > .row");
    taskRows.forEach((row, index) => {
      let taskName = row.querySelector("label").innerText.trim();
      let taskDate = row.querySelector(".task-date").innerText.trim();
      let taskCategory = row.querySelector(".task-category").innerText.trim();
      this.todos.push({
        id: index,
        description: taskName,
        dueDate: taskDate,
        category: taskCategory,
      });
    });
  }

  addTodo(todoText, todoDate, category, cssClass) {
    this.todos.push({
      id: 3,
      description: todoText,
      dueDate: todoDate,
      category: category,
    });
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

class View {
  constructor() {}

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  bindAddTodo() {
    let addTaskBtn = document.getElementById("add-task-button");
    addTaskBtn.addEventListener("click", function (ev) {
      let form = document.getElementById("add-task-form");
      form.submit();
    });
  }
  bindDeleteTodo() {
    let deleteTaskBtn = document.getElementById("delete-task-button");
    let deleteTaskForm = document.getElementById("delete-task-form");
    deleteTaskBtn.addEventListener("click", function (ev) {
      let checkboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      deleteTaskForm.submit();
      console.log(checkboxes);
    });
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.bindAddTodo();
    this.view.bindDeleteTodo();
  }
}

const model = new Model();
const app = new Controller(new Model(), new View());
