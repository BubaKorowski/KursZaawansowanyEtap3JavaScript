//  FILTER (PRZYPOMNIENIE MAP)

const arr = [23, 4255, 34656, 4, 33, 57767, 8877, 42];

//  Filter
const oddNumbers = arr.filter(number => number % 2);
const evenNumbers = arr.filter(number => !(number % 2));
const numbersBiggerThan100 = arr.filter(number => number > 100);

//  Map
const duble = arr.map(number => number * 2);

//  forEach
arr.forEach((number, index) => (arr[index] = number * 2));

//  SEARCH - CZYLI WYSZUKIWANIE ELEMENTÓW

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  console.log(tasks);
  ul.textContent = "";
  tasks.forEach(li => ul.appendChild(li));
};

input.addEventListener("input", searchTask);