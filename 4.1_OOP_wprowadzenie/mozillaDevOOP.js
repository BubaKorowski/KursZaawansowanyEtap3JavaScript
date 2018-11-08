var person = {
  //   name: ["bob", "smith"],
  name: {
    first: "bob",
    last: "smith"
  },
  age: 32,
  gender: "male",
  interests: ["coding", "learning"],
  bio: function() {
    alert(
      this.name.first +
        " " +
        this.name.last +
        "is " +
        this.age +
        " yers old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1]
    );
  },
  greeting: function() {
    alert("Hi! I'm " + this.name[0] + ".");
  }
};
// bracets notation
console.log(person.name.first);
console.log(person["name"]["first"]);

//Setting(updateing) values of object
person.age = 100;
person["name"]["first"] = "Jon";
console.log(person.name.first);

//Creating new members
person.eyes = "Transparent";
person.ferwell = () => {
  alert("Bye bye everybody!");
};
console.log(person.eyes);
// console.log(person.ferwell());

//storing text values from text inputs:
// var myDataName = nameInput.value;
// var myDataValue = nameValue.value;

// person[myDataName] = myDataValue;

var myDataName = "Height";
var myDataValue = "1,33m";
person[myDataName] = myDataValue;

//  CONSTRUCTOR AND OBJECT INSTANCES

function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert("Hi I'm " + this.name + ".");
  };
  return obj;
}

// var salva = createNewPerson("Salva");
// salva.name;
// salva.greeting();

// And with a constructor...
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert("Hi I'm " + this.name + ".");
  };
}
var person1 = new Person("Mark");
var person2 = new Person("Lisa");

person1.name;
// person1.greeting();

//  CREATING FINISHED CONSTRUCTOR

function PersonFull(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    var string =
      this.name.first +
      " " +
      this.name.last +
      " is " +
      this.age +
      " years old.";
    var pronoun;
    if (
      gender === "female" ||
      gender === "Female" ||
      gender === "F" ||
      gender == "f"
    ) {
      pronoun = "She likes ";
    } else if (
      gender === "male" ||
      gender === "Male" ||
      gender === "M" ||
      gender == "m"
    ) {
      pronoun = "He likes ";
    } else {
      pronoun = "It likes ";
    }
    string += pronoun;
    if (this.interests.length === 1) {
      string += this.interests[0] + ".";
    } else if (this.interests.length === 2) {
      string += this.interests[0] + " and " + this.interests[1];
    } else {
      for (var i = 0; i < this.interests.length; i++) {
        if (i === this.interests.length - 1) {
          string += "and " + this.interests[i] + ".";
        } else {
          string += this.interests[i] + ", ";
        }
      }
    }
    alert(string);
  };

  this.greeting = () => {
    alert("Hi! I'm " + this.name.first + ".");
  };
}
var Person2A = new PersonFull("Lili", "Smith", 44, "f", [
  "programing",
  "being rich",
  "fucking",
  "jumping",
  "Banging"
]);
