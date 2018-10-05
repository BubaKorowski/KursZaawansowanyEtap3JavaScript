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

const lengthArrayAfterPush = italianUsers.push("Vito");
// metoda zwraca długość tablicy jaką ma tablica po jej wykonaniu

const lengthArrayAfterUnshift = italianUsers.unshift("Apollonia");

// METODA CONCAT - łączenie tablic. Dokładnie to tworzy nową tablicę.

const redColors = ["Czerwony", "redorange", "crimson"];
const greenColors = ["Zielony", "Green", "Trawiasty", "Zielonny bnan"];

const redAndGreenColors = redColors.concat(greenColors);
const redGreenBlueColors = redColors.concat(greenColors, ["Morski"]);

// OPERATOR SPREAD - Nowy sposób prowadzony w ES6 to operator spread(operator rozwijania, operator trzech kropek)

const colorsCollection = [...redColors, ...greenColors];

//elementy tablicy są pojedyńczo wyjęte
const colorsCollection2 = [...redColors, ...greenColors, "Morski"];
