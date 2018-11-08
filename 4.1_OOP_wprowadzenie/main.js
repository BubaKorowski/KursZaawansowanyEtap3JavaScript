//  KONSTRUKTOR PRZEZ WYRAŻENIE FUNKCYJNE
// const Car = function() {};

function Car2(name) {
  this.name = name;
  console.log(this);
}
const maluch = new Car2("maluch");
const polonez = new Car2("polonez");

//  PROTOTYP

const Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.children = [];
  //   this.addChildren = function(name) {
  //     this.children.push(name);
  //   };
};

Person.prototype.addChildren = function(name) {
  this.children.push(name);
};

const arek = new Person("arek", 20);
const monia = new Person("monia", 18);
monia.addChildren("basia");

//  CZYM JEST PORTOTYP

//  Prototyp to obiekt w funkcji konstruktora, współdzielony przz wszystkie egzemplarze. Każdy dostęp ma dostęp do obiktu.

function Player() {}

class User {}

Player.prototype.age = 25;

const janek = new Player();
const marta = new User();

janek.constructor;
marta.constructor;

// const darek = new Player();
const darek = new janek.constructor();

// Dodawanie elementów do prototypu (konstruktor)
function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;

  this.changeCitizenship = function(citizenship) {
    this.citizenship = citizenship;
    console.log(
      `zmiana za pomocą metody w insancji na obywatelstwo ${this.citizenship}`
    );
  };
}

Citizen.prototype.changeCitizenship = function(citizenship) {
  this.citizenship = citizenship;
  console.log(
    `zmiana za pomocą metody w prototypie na obywatelstwo ${this.citizenship}`
  );
};

const zenek = new Citizen("Polska", "polskie");
const maria = new Citizen("Anglia", "niemieckie");

// Obiekt prototype jest zawsze aktualny
console.log(zenek.age);
Citizen.prototype.age = 21;
console.log(zenek.age);

// Przysłanianie

// Rozszerzanie prototypu. Także wbudowanych konstruktorów

const arr = [3, 4, 5, 6, 7];
Array.prototype.delete = function(index) {
  return this.splice(index, 1);
};
//po dodaniu nowej metody do proto można z niej skożystać
// arr.delete(1)

//  ŁAŃCUCH PROTOTYPÓW (PROTOTYPE CHAIN)

arr.__proto__; // prototyp konstruktora
arr.__proto__.__proto__; // prototyp Object
arr.__proto__.__proto__.__proto__; //null
