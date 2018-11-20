const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const input = document.querySelector("input");
const inputSearch = document.querySelector("input.search");
const liElements = document.querySelectorAll("li");
const btnClear = document.querySelector("button.clear");

const addTask = e => {
  e.preventDefault();
  const titleTask = input.value;

  if (!input.value) {
    alert("Dodaj treść");
    return
  }

  const task = document.createElement("li");
  task.innerHTML = titleTask + "<button>Usuń</button>";
  toDoList.push(task);
  renderList(); //Czemu renderList po każdym dodaniu?

  ul.appendChild(task);
  input.value = "";
  taskNumber.textContent = toDoList.length;
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
  taskNumber.textContent = toDoList.length;
  inputSearch.value = "";
  renderList();
};

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  console.log(searchText);
  let tasks = [...liElements];
  tasks = toDoList.filter(li =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
};

const clearSearch = () => {
  inputSearch.value = "";
  renderList();
};

form.addEventListener("submit", addTask);
inputSearch.addEventListener("input", searchTask);
btnClear.addEventListener("click", clearSearch);