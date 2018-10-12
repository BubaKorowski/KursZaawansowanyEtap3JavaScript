const showConsoleLog = function(message) {
  true && true ? console.log(message) : console.log("fałsz");
};
showConsoleLog("prawda");

console.log("------------------------------------------");
// //s

function dodaj(x, y) {
  return x + y;
}
const wynik = dodaj(2, 3);
console.log("wynik to " + wynik);

//JS data type
//boolean

var pismo = false;

if (pismo) {
  console.log("Pismo jes prawdą");
} else {
  console.log("Szukaj dalej");
}

//null

var n = null;
console.log(n / 23);

//unndefined

var a;
console.log(a + 2);

//number
var num = 3.4;
var ber = 3.6;
console.log(num + ber);
//String
var welcome = "Hello ";
var people = "World.";
console.log(welcome + people);

//Symbols
var symbol = Symbol("foo");
var symbol2 = Symbol("foo");
console.log(symbol === symbol2);
console.log(String(symbol));
console.log(String(symbol) === String(symbol2));

//Objects

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make + " " + myCar.model);

//Numbers and operations on numbers
var number = 12; // - + / * %
console.log(--number);
console.log(number);

//Strings
var myName = "Jakub";

var sentence = "He said 'Hi'";

/*
Code Output
\' single quote
\" duble quote
\\ backslash
\n newline
\r carrige return
\t tab
\b backspace
\f form feed
*/
var fullName = "Jakub " + "Borowski";
var sentence = myName + "Borowski";

myName += " Borowski";

//Strinngs: [Brackets Notation]

var firstName = "Jakub";
// console.log(firstName[0]);
// console.log(firstName[1]);
// console.log(firstName[2]);
// console.log(firstName[3]);
// console.log(firstName[4]);
// firstName = "Line brake";
// console.log(firstName[0]);
// console.log(firstName);

// 20 STRING METHODS

var stringOne = "Learning live is the way to live";
var stringTwo = "Frontend and Backend development";

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()  (return unicode)
console.log(stringOne.charCodeAt(1));

//concat
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("live"));

//fromCharCode()
console.log(String.fromCharCode(114));

//includes()
console.log(stringOne.includes("live"));

//indexOf()
console.log(stringOne.indexOf("live"));

//lastIndexOf
console.log(stringOne.lastIndexOf("live"));

//match()
console.log(stringOne.match(/live/g)); //why /g is used??

//repeat()
console.log(stringOne.repeat(2));

//replace()
console.log(stringOne.replace(/live/g, "LIVE"));

//search()
console.log(stringTwo.search("end"));

//slice()
console.log(stringOne.slice(0, 8));

//split()
console.log(stringOne.split(" "));

//startWith()
console.log(stringOne.startsWith("Learning"));

//subtract()
console.log(stringOne.substr(0, 7));

//substring()
console.log(stringOne.substring(0, 6));

//toUpperCase()
console.log(stringOne.toUpperCase());

//trim()
var stringThree = "   String with white spaces on eather side   ";
console.log(stringThree);

console.log(stringThree.trim());

// FUNCTIONS

function square(number) {
  return number * number;
}
console.log(square(4));

//scope in functions

var someVar = "Bart";
function myFun() {
  var someVar = "Lisa";
  console.log(someVar);
}
myFun();
// console.log(someVar);

//nestig a function

console.log(addSquares(3, 3) + " hoisting example");

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3));
const usersNames = ["Jakub", "aa", "bb", "cc"];
const birthDate = [1983, 1900, 1863, 1945];
curentDate = 2018;
for (i = 0; i < birthDate.length; i++) {
  console.log(
    `Wiek użytkownika imieniem ${usersNames[i]} to ` +
      (curentDate - birthDate[i])
  );
}
