// Make your global array here.
// Put a few todos in there to start with!
// This is mostly for testing purposes.
const addButton = document.querySelector(".add-todo")
const removeButton =document.querySelector(".remove-todo")
let userInput = document.querySelector(".todo-input")
let removeInput = document.querySelector(".index-input")
const todos = []


function printTodo(todo) {
let li = document.createElement("li")
    li.innerText = todo;
let ul = document.querySelector(".todo-list")
    ul.appendChild(li)  
}

addButton.addEventListener("click",function (){
  event.preventDefault();
  addTodo(userInput.value);
  printTodo(userInput.value)
  userInput.value = "";
})

removeButton.addEventListener("click",function (){
  event.preventDefault();
  removeTodo(removeInput.value);
  clearList();
  printList();
  removeInput.value = "";
})

function clearList() {
  event.preventDefault();
  let ul = document.querySelector(".todo-list")
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}

// A function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
function printList() {
  let i = 0;
  while (i < todos.length) {
    printTodo(todos[i]);
    i = i + 1;
  }
}

// A function that adds an item to our todo list.
// Where on the list should we add it?
function addTodo(todo) {
  todos.push(todo);
}

// A function that removes an item at a given index from our todo list.
function removeTodo(i) {
  todos.splice(i, 1);
}