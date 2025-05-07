// Select elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Handle form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent page reload

  const task = input.value.trim();
  if (task !== "") {
    addTodo(task);
    input.value = ""; // clear input box
  }
});

// Function to add a todo
function addTodo(task) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";

  // Delete todo on button click
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
  });
  //Build the <li> Structure
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  //Add the <li> to the List <ul>:
  list.appendChild(li);
}
