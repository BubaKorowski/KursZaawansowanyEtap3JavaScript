// OBIEKTY - WPROWADZENIE

//Nieuporządkowana lista właściwości złożonych z nazwy(klucza) i wartości (para key - value). Nazwa jest łańcuchem a wartość może być dowolnym typem. Jeśli wartość jest funkcją mówimy wtedy, że dana właściwość jest metodą.

// TWORZENIE OBIEKTU.

// 1 - operator new i konstruktor obiektu (funkcja)

// tworzymy obiekt
const cat = new Object();

// przypisujemy mu właściwości
cat.name = "Tabby";
cat["age"] = 2;
cat["eye color"] = "blue";
cat.meow = function() {
  console.log("meow meow");
};
console.log(cat.name + " " + cat["age"] + " " + cat["eye color"]);
cat.meow();
// 2 - tworzymy obiekt i od razu przypisujemy właściwości
const dog = {
  name: "Rex",

  age: 102,

  "eye color": "red",

  barking: function() {
    console.log("hau hau");
  },
  //ES6 można odrazu zdefiniować funkcję
  squeaking() {
    console.log("aaauuueeeee");
  }
};
dog.squeaking();
dog.barking();
console.log(dog["eye color"]);

// 3 - możemy dynamicznie dodawać (zmieniać) właściwości

dog.age = 9;

// DOSTĘP DO WŁAŚCIWOŚCI I METOD

console.log(dog.name);
console.log(dog.barking());

// USUWANIE

// delete dog.age;

// OODWOŁANIE SIĘ DO OBIEKTU W INNEJ FUNKCJI

const result = {
  value: 1
};

function plus() {
  result.value++;
  return result.value;
}
console.log(result.value); //zwraca 1 z zasięgu

// ODWOŁANIE DO OBIEKTU W METODZIE "THIS"

const counter = {
  score: 0,
  increment: function() {
    this.score++;
    console.log(this.score);
  }
};
counter.increment();
