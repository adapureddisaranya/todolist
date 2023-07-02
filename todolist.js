 const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMessage = document.getElementById("errorMessage");

addButton.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskActions);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    displayErrorMessage("Task cannot be empty");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <i class="fas fa-edit"></i>
    <i class="fas fa-trash"></i>
  `;
  
  taskList.appendChild(listItem);
  taskInput.value = "";
  hideErrorMessage();
}

function handleTaskActions(event) {
  const target = event.target;

  if (target.classList.contains("fa-edit")) {
    const taskText = target.previousElementSibling;
    const newTaskText = prompt("Enter new task:", taskText.textContent);

    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskText.textContent = newTaskText.trim();
    }
  } else if (target.classList.contains("fa-trash")) {
    const listItem = target.parentElement;
    listItem.remove();
  }
}

function displayErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
  
  function hideErrorMessage() {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }
