const toDoList = [];

const form = document.querySelector("form");
const inputAdd = document.querySelector("input.add");
const btnAdd = document.querySelector("button.add");
const spn = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");
const inputSearch = document.querySelector("input.search");

const addTask = e => {
  e.preventDefault();
  const titleTask = inputAdd.value;
  if (titleTask === "") {
    alert("Enter task name");
    return;
  }

  const task = document.createElement("li");
  task.innerHTML = titleTask + "<button>Delete</button>";
  toDoList.push(task);
  renderList();

  ul.appendChild(task);
  inputAdd.value = "";
  spn.textContent = toDoList.length;
  task.querySelector("button").addEventListener("click", removeTask);
};

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
};

const removeTask = e => {
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  spn.textContent = toDoList.length;
  inputSearch.value = "";
  renderList();
};

form.addEventListener("submit", addTask);
