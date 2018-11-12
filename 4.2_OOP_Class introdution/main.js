//  CLASSES IN JS

//Class in JS apeared in ES 2015

//TWORZENIE KLASY

// class Family {
//   constructor() {
//     this.name = name;
//     this.addMember = function() {
//       console.log("wywołane z instancji");
//     };
//   }
//dodanie metody do prototypu w klasie
//   addMember() {
//     console.log("wywołane z prototypu");
//   }
// }

// const nowakowie = new Family("nowakowie");
// nowakowie.addMember();

//KONSTRUKTOR

// const Family2 = function(name) {
//   this.name = name;
// };
// //dodawanie metody do prototypu konstruktora
// const kowalscy = new Family2("kowalscy");
// Family2.prototype.addMember = function() {};

//  WYRAŻENIE KLASY

//wyrażenie funkcyjne
const Person = function() {};

//Deklaracja klasy
function Person2() {}

//Deklaracja klasy
class Person3 {}

//Wyrażenie klasy
const Person4 = class {};

//  PRZYKŁAD KLASY

class Rodzina {
  constructor(members, ...names) {
    this.members = members;
    this.names = names;
  }
  addMember(newMember) {
    this.names.push(newMember);
    this.members++;
    console.log(
      `Nowy członek rodziny: ${newMember}. Rodzina liczy ${this.members} osób`
    );
  }
  //  METODY STATYCZNE deloarowane w klasie poprzez dodanie prefix static. Metody statyczne można wywołać z poziomu klasy(nie są dostępne z poziomu instancji)

  static makeFamily(...members) {
    return members;
  }
}
