// Get references to DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array to store todos
let todos = [];

// Function to render todos inside the ul
function renderTodos() {
  // Clear the current list
  todoList.innerHTML = '';

  // Loop through todos array and create li elements
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = todo;

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn btn-danger btn-sm';

    // Delete event
    deleteBtn.addEventListener('click', () => {
      deleteTodo(index);
    });

    // Append delete button to li
    li.appendChild(deleteBtn);

    // Append li to ul
    todoList.appendChild(li);
  });
}

// Function to add a todo
function addTodo(todo) {
  todos.push(todo);
  renderTodos();
}

// Function to delete a todo by index
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Handle form submission
todoForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  const newTodo = todoInput.value.trim();
  if (newTodo !== '') {
    addTodo(newTodo);
    todoInput.value = ''; // Clear input
  }
});
