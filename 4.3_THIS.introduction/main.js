//  THIS

// in global scope
this.table = "Window table";
console.log(window.table);

this.garage = {
  table: "garage table"
};

let jonnsRoom = {
  table: "jons table"
};
// console.log(this.jonnsRoom.table);
console.log(jonnsRoom.table);

// this in method
let marrysRoom = {
  table: "jons table",
  cleanTable() {
    console.log(`cleaning ${this.table}`);
  }
};

//  THIS explaiined in another tutorial "WTF is THIS"
/*
- Implicit binding (domniemany)
- Explicid binding (wyraźny)
- new Binding
- window Binding
*/

// Implicit Binding (domniemany)
// Left of the Dot at Call Time
console.log("------------------");

// 1.Example
var me = {
  name: "Jakub",
  age: 35,
  sayName: function() {
    console.log(this.name);
  }
};
me.sayName();
console.log("------------------");

// 2. Example
var sayNameMixin = function(obj) {
  obj.sayNameM = function() {
    console.log(this.name);
  };
};

var mySelf = {
  name: "Kuba",
  age: 35
};

var you = {
  name: "Kate",
  age: 24
};

sayNameMixin(mySelf);
sayNameMixin(you);

mySelf.sayNameM();
you.sayNameM();

console.log("------------------");

//3. Example
var Person = function(name, age) {
  return {
    name: name,
    age: age,
    sayName: function() {
      console.log(this.name);
    },
    mother: {
      name: "Stacy",
      sayName: function() {
        console.log(this.name);
      }
    }
  };
};
var jim = Person("Jim", 25);
jim.sayName();
jim.mother.sayName();

console.log("------------------");

//  Explicit Binding (wyraźny)
// .call, .apply, .bind

// 1. Example .call
var sayName = function(lang1, lang2, lang3, lang4) {
  console.log(
    "My name is " +
      this.name +
      " and I know " +
      lang1 +
      ", " +
      lang2 +
      ", " +
      lang3 +
      " and " +
      lang4
  );
};

var stacey = {
  name: "Stacey",
  age: 44
};

var languages = ["JavaScript", "React", "PHP", "Python"];

// sayName.call(stacey, languages[0], languages[1], languages[2], languages[3]);

var newFn = sayName.bind(
  stacey,
  languages[0],
  languages[1],
  languages[2],
  languages[3]
);
newFn();

//  The Neww and Window Binding
console.log("------------------");

// new Binding
var Animal = function(color, name, type) {
  //this=
  this.color = color;
  this.name = name;
  this.type = type;
};
var zebra = new Animal("B&W", "Zorro", "Zebra");

// window Binding
var sayAge = function() {
  // "use strict";
  console.log(this.age);
};

var itsMe = {
  age: 25
};

sayAge();
window.age = 34;
sayAge();

//  PRYWATNE I PUBLICZNE WŁAŚCIWOŚCI
// Domyślnine wszystkie metody i łaściwości obiektów są publiczne i JS

// Przykłady ukrywania danych

// 1. Konwencja
class Cat {
  constructor(color) {
    this._color = color;
  }
  getColor() {
    return this._color;
  }
  setColor(value, color) {
    if (typeof value === "string") {
      return (this._color = value);
    } else {
      console.log("błędna wartość");
    }
  }
}

const kotek = new Cat("Czorny kot");
// kotek.setColor(20);
// kotek.getColor();

//  2. Wykorzystanie closure - metody dostępowe do ukrytych danych

// 1. Example

class Dog {
  constructor(name, dogColor) {
    this.name = name;
    let color = dogColor;
    this.getColor = () => color;
    this.setColor = value => (color = value);
  }
}

const fafik = new Dog("Fafik", "brązowy");

class Car {
  constructor(name, counter = 100000, year = 2000) {
    this.name = name;
    let _counter = counter;
    let _year = year;
    let _changeNumber = 0;

    // this.getYear = function() {
    //   return _year;
    // };
    this.getYear = () => _year;

    this.setCounter = function(value) {
      _changeNumber++;
      return (_counter = value);
    };

    this.getCounter = function() {
      if (_changeNumber) alert(`Uważaj! Licznik zmieniony ${_changeNumber}`);
      return _counter;
    };
    this.showCarAge = function(year) {
      return year - _year;
    };
  }
}
const polonez = new Car("poldek", 200000, 2009);
