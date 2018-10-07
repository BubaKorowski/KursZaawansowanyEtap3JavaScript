// TABLICE - METODY

const italianUsers = [
  "Giovanni",
  "Michele",
  "Angelo",
  "Luigi",
  "Valentina",
  "Marco"
];

// console.log(italianUsers);

// Podstawowe metody

// METODA PUSH - dodaje element do końca tablicy

// italianUsers.push("Allesandra");
// console.log(italianUsers);

// METODA UNSHIFT - dodaje element na początku tablicy.

// italianUsers.unshift("Tomatto");
// console.log(italianUsers);

// METODA POP - Usuwa ostatni element tablicy wraz z jego indexem.

// italianUsers.pop(italianUsers);
// console.log(italianUsers);
// const invitedUsers = italianUsers.pop();

// METODA SHIFT - Usuwa pierwszy element tablicy wraz z jego indexem.

// italianUsers.shift();
// italianUsers.shift();
// console.log(italianUsers);

// POWYŻSZE METODY ZWRACAJĄ:

// const removedLastElement = italianUsers.pop();
// metoda zwraca ostatni, usunięty element tablicy

// const removedFirstElement = italianUsers.shift();

// Poniższe dwie metody zwracają długość tablicy jaką ma tablica po jej wykonaniu.
// const lengthArrayAfterPush = italianUsers.push("Vito");

// const lengthArrayAfterUnshift = italianUsers.unshift("Apollonia");

// METODA CONCAT - łączenie tablic. Dokładnie to tworzy nową tablicę poprzez konkatenację wybranych tablic.

// const redColors = ["Czerwony", "redorange", "crimson"];
// const greenColors = ["Zielony", "Green", "Trawiasty", "Zielonny bnan"];

// const redAndGreenColors = redColors.concat(greenColors);
// const redGreenBlueColors = redColors.concat(greenColors, ["Morski"]);

// OPERATOR SPREAD - Nowy sposób prowadzony w ES6 to operator spread(operator rozwijania, operator trzech kropek)

// const colorsCollection = [...redColors, ...greenColors];

//elementy tablicy są pojedyńczo wyjęte
// const colorsCollection2 = [...redColors, ...greenColors, "Morski"];

//METODA SLICE
//zwraca nową tablicę, która słada się z części tablic na których jst wykonywana
const items = ["zad", "buff", "lan", "sss", "Zzz", "vvc", "grt"];
// console.log(items);

//tnie od elementu z indexem 3
items.slice(3);

//tnie od elementu z indexem 3 i kończy na 4 index ale go nie uwzględnia
items.slice(3, 4);

//tnie ostatni element w tablicy
items.slice(-1);

//METODA SPLICE
//jest to metoda destrukcyjna i modyfikuje tablicę na której pracujemy.

const animals = ["dog", "cat", "bird", "human", "ape"];
console.log(animals);

//(splice element z index 2, splice tylko 1 element)
// animals.splice(2, 1);

//splice wszystko od elementu z index 2
// animals.splice(2);

//usuwa elementy w tablicy i zwraca usunięte elementy
// animals.splice(0);

//zastępuje usunięty element
// animals.splice(3, 2, "Dinosaur");

//dodaje element do wybranego numeru index
// animals.splice(3, 0, "Dinosaur");

//SPLICE zwraca w formie tablicy usunięte elementy
// const splicedAnimal = animals.splice(3, 1);

//METODA SORT
//metoda destrukcyjna
// animals.sort();

//METODA INDEXOF
// animals.indexOf("cat");
// console.log(animals.indexOf("bird"));

//METODA INCLUDES
// animals.includes("human");

//METODA JOIN
//tworzy string z elementów domyślnie oddzielonych przecinkiem
// animals.join();

//można oddzielić innnym znakiem
// animals.join(" --- ");
// animals.join(" - skazani na shawshank - ");

//METODA REVERSE
//metoda destrukcyjna. Odwraca kolejność
[1, 2, 3, 4].reverse();

//METODA SPLIT WYKONANA NA STRING, KTÓRA TWORZY TABLICĘ
"aaaa, bbbbb, cccccc, dddddd, eeeeee".split("");
"aaaa, bbbbb, cccccc, dddddd, eeeeee".split(" ");
"aaaa, bbbbb, cccccc, dddddd, eeeeee".split(",");
"aaaa, bbbbb, cccccc, dddddd, eeeeee".split(",", 3); //tworzy array z 3 pierwszych elementów
