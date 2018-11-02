const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const input = document.querySelector("input");

// const listItems = document.getElementsByClassName("task");


//  DODAWANIE ZADANIA

const addTask = e => {
  e.preventDefault();
  const titleTask = input.value;

  if (titleTask === "") return;
  const task = document.createElement("li");
  // task.className = "task";
  task.innerHTML = titleTask + "<button>Usuń</button>";
  toDoList.push(task);
  renderList();

  ul.appendChild(task);
  input.value = "";
  // const liItems = document.querySelectorAll("li.task").length;
  taskNumber.textContent = toDoList.length;
  task.querySelector("button").addEventListener("click", removeTask);
};

//  PONOWNE RENDEROWANIE LISTY

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
};

//  USUWANIE ZADANIA

const removeTask = e => {
  // e.target.parentNode.remove(); // po ponownym stworzeniu tablicy ta linijka nie jest już potrzebna
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = toDoList.length;
  renderList();
};

form.addEventListener("submit", addTask);