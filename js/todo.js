document.addEventListener("DOMContentLoaded", () => {
  const inputBox = document.getElementById("todo-input");
  const addButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  loadTodos();

  addButton.addEventListener("click", addTodo);

  inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });

  function addTodo() {
    const todoText = inputBox.value.trim();
    if (todoText === "") return;

    const todo = {
      text: todoText,
      completed: false,
    };
    const todoElement = createTodoElement(todo);
    todoList.appendChild(todoElement);
    saveTodoToLocal(todo);
    inputBox.value = "";
  }
  function createTodoElement(todo) {
    const li = document.createElement("li");
    if (todo.completed) li.classList.add("checked");

    li.innerHTML = `
            <span class="checkbox" onclick="toggleCheck(this)">ㅇ</span>
            <span class="todo-text">${todo.text}</span>
            <span class="delete" onclick="deleteTodo(this)">X</span>
        `;
    return li;
  }
  window.toggleCheck = (checkbox) => {
    const li = checkbox.parentElement;
    li.classList.toggle("checked");

    const todoText = li.querySelector(".todo-text").textContent;
    updateTodoInLocal(todoText, {
      completed: li.classList.contains("checked"),
    });
  };
  window.deleteTodo = (deleteIcon) => {
    const li = deleteIcon.parentElement;
    const todoText = li.querySelector(".todo-text").textContent;
    li.remove();
    deleteTodoFromLocal(todoText);
  };

  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => {
      const todoElement = createTodoElement(todo);
      todoList.appendChild(todoElement);
    });
  }

  function saveTodoToLocal(todo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function updateTodoInLocal(todoText, updatedTodo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const index = todos.findIndex((todo) => todo.text === todoText);
    if (index !== -1) {
      todos[index] = { ...todos[index], ...updatedTodo };
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  function deleteTodoFromLocal(todoText) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = todos.filter((todo) => todo.text !== todoText);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
});
