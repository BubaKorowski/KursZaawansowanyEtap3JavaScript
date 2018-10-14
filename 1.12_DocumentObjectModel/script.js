//    DOCUMENT OBJECT MODEL

// DOM - jest to reprezentacja dokumentu HTML w prezglądarce
// elemennty strony są węzłami, które mogą być pobrane i modyfikowane. Możliwe jest również usuwanie i twożenie nowych węzłów.
// Stróktóra DOM przypomina drzewo. Na szczycie jest jest obiekt document
// DOM nie jest częścią JJS ale JS umożliwia pracę z DOM

// POBIERANIE ELEMENTÓW STRONY

// Właćsiwości obiektu 'document'

document.documentElement; //odwołuje się do elemenu HTML w DOM
document.body;
document.images; //lista pasujących elementów

//Łatwo zrobić z tego tablię
const imgs = Array.from(document.images);
const imgs2 = [...document.images];

//  METODY POBIERAJĄCE JEDEN (PIERWSZY) PASUJĄCY ELEMENT

//Poniższe metody znajdują pierwszy pasujący element, lub null jeśli nie znalazły żadnego pasującego elementu.
document.querySelector("li:nth-child(2)");
document.getElementById("first");

//  METODY POBIERAJĄCE WSZYSTKIE PASUJĄCE ELLEMENTY

// Zwracają listę pasujących elementów w formie tablicopodobnego obiektu(node-list w przypadku querySelectorAll i kolekcji HTML w przypadku dwóch pozostałych). Jeśli nie znajdują żadanego pasującego elementu to zwracany jest pusty obiekt.

document.querySelectorAll("ul>li"); //ten sposób jest częściej używany. Node list - lista węzłów (obiekt tablico-podobny)

document.getElementsByTagName("li"); //HTML Collection (obiekt tablico-podobny)

document.getElementsByClassName("even"); //HTML Collection (obiekt tablico-podobny)

// Zmiana obiektów tablico-podobnych na tabice

const liList = document.querySelectorAll("li");
const liArray = [...liList];
const liList2 = Array.from(liList);

//Pobieranie atrybutów z elementu

const h2 = document.querySelector("h2");
console.log(h2.getAttribute("class"));
console.log(h2.getAttribute("data-color"));
console.log(h2.getAttribute("id"));

//Skrócony zapis.
const h2Class = document.querySelector("h2").getAttribute("class");

const h2Text = h2.textContent;
const h2HTML = h2.innerHTML;

console.log(h2.classList);
h2.classList.contains("title"); // Zwraca true jeśli zawiera, lub false jeśli nie zawiera.

// MODYFIKACJA ELEMENTÓW

const firstLi = document.querySelector("li:first-child");
firstLi.innerHTML = `<strong>Pogrubienie</strong> i normal`;

firstLi.style.fontSize = "30px";
// firstLi.style.backgroundColor = "#ccc";
// firstLi.style.letterSpacing = "10px";

// firstLi.classList.toggle("space");
firstLi.classList.add("space");
// firstLi.classList.remove("space");

firstLi.className = "one two"; //nadpisuje poprzedni class

firstLi.setAttribute("title", "Uwaga, ważne"); //Jaki atrybut i co ma się w nim znaleźć. (Nie zawsze jest dobrym rozwiązaniem ponieważ go nadpisuje).

//  MODYFIKOWANIE WIELU ELEMENTÓW.

// const liItems = document.querySelectorAll("li");
const liItems = [...document.getElementsByTagName("li")];

// liItems.style.fontSize = "40px"; //Nie zadziała chyba, że wskażemy poprzez [1] konkretny element w tablicy. Przykład poniżej.
// liItems[2].style.fontSize = "40px"

//dodanie klasy (pętla i forEach)

// for (let i = 0; i < liItems.length; i++) {
//   liItems[i].style.fontSize = "40px";
//   liItems[i].classList.add("red");
// }

// liItems.forEach(function(liItem) {
//   liItem.style.textDecoration = "underline";
//   liItem.style.fontSize = "30px";
//   liItem.classList.add("red");
// });

//    NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ

// Metoda addEventListener, którą możemy wywołać na dowolnym elemencie DOM oraz na window.

window.addEventListener("scroll", function() {
  console.log("skroluje");
});

// window.addEventListener("dblclick", function() {
//   console.log("klikam podwójnie");
// });

window.addEventListener("scroll", () => console.log("scroll"));

document.querySelector("h1").addEventListener("click", function() {
  this.textContent += "+";
});

//example
const h1 = document.querySelector("h1");

const addText = function() {
  this.textContent += " :) ";
  h1.classList.toggle("red");
};
h1.addEventListener("click", addText);

// example z forEach
const items = document.querySelectorAll("li");

const addClassRed = function() {
  console.log("klik li");
  this.classList.toggle("red");
};
items.forEach(item => {
  item.addEventListener("click", addClassRed);
});

//  TWORZENIE I DODAWANIE ELEMENTÓW DO STRONY

const divElement = document.createElement("div");
divElement.textContent = "Ostatni";
divElement.style.backgroundColor = "yellow";
document.querySelector("ul").appendChild(divElement);

console.log("---------------------------------");

//    UZUPEŁNIENIE

// DOM - model bierzącej strny internetowej której głównym elementem jest document

// window - obiekt globalny dla środowiska uruchomieniowego jakim jest przeglądarka. Zawiera mnustwo metod i właściwości do wykożystania. Window reprezentuje okno przeglądarki(otwartą kartę)

// console.log(window);
// console.log(document);

window.innerHeight;
window.innerWidth;

//funkcja timeUot

//1. przykład
// window.setTimeout(function() {
//   alert("upłynęło juś 5 sekund");
// }, 5000);

//2. przykład
const showTime = function() {
  time += 5;
  console.log(`Już ${time} sekund minęło`);
  setTimeout(showTime, 5000);
};
let time = 0;

// setTimeout(showTime, 5000);

//funkcja setInterval
let timer = 0;
// window.setInterval(() => console.log("działam"), 1000);
// setInterval(() => console.log(++timer), 1000);
