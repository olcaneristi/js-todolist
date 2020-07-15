// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners (Olaylar)

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions (Fonksiyonlar)

function addTodo(event) {
  // formun gönderilmesini önle
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-times"></i>';
  trashButton.classList.add("delete-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;

        // Drop animation

        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
          todo.remove();
        })
    }
}
