// HOISTING
//interpreten czyta kod od góry do doły, ale hoisoting  zaburza ten proces.

// Zanim kod zostanie wykonany jest przetworzony. więc interpreter przechodzi przez kod kilka razy (szyka błędów, wyszukuje deklaracji...)

// hoisting - przeniesienie deklaracji na początek zakresu.

// ZMIENNE a hoisting
console.log(array); //undefined ponieważ var array jest jedynie deklaracją zmiennej
var array = [];
console.log(array); //zwraca array poonieważ została już do zmiennej przypisana wartość

//console.log(typeNumber); //const nie podlega hoistingowi
const typeNumber = 20;
console.log(typeNumber);

//console.log(typeString); //let nie podlega hoistingowi
let typeString = "String";
console.log(typeString);

// FUNKCJA stworzona za pomocą deklaracji
//wywołanie przed deklaracją

namedFunction(); //tutaj wywołuję funkcję przed jej deklaracją
function namedFunction() {
  console.log("I am named function");
}

// constFunction(); //nie można wywołać
const constFunction = function() {
  console.log("I am const function. FU hoisting ;p");
};
constFunction();

// letFunction(); //nie można wywołać
let letFunction = function() {
  console.log("I am let function. hoisting go home");
};
letFunction();

//varFunction(); //oisting wynosi tylko deklarację a nie inicjalizację więc teraz widać tylko "var varFunction" a to jest zmienna a nie funkcja ;p
var varFunction = function() {
  console.log("I am var function. Declaration of var is not a function");
};
varFunction();
