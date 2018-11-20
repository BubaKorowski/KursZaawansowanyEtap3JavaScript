const toDoList = [];

const form = document.querySelector("form");
const inputAdd = document.querySelector("input.add");
const btnAdd = document.querySelector("button.add");
const spn = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");
const inputSearch = document.querySelector("input.search");
const z = document.querySelector("button.clear");

const addTask = e => {
  e.preventDefault();
  const titleTask = inputAdd.value;
  if (titleTask === "") {
    alert("Dodaj treść");
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

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  console.log(searchText);
  let tasks = [...liElements];
  tasks = toDoList.filter(li =>
    li.textContent.toLowerCase().includes(searchText)
  );
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
  console.log(toDoList)
};

const clearSearch = e => {
  console.log("clear");
  inputSearch.value = "";
  renderList();
};

form.addEventListener("submit", addTask);
inputSearch.addEventListener("input", searchTask);
document.querySelector("button.clear").addEventListener("click", clearSearch);