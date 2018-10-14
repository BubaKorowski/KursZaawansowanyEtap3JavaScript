// TEMPLATE STRING - LITERAŁ SZABLONU

//GRAWIS, LEWY APOSTROF

`tekst`;
("tekst");
("tekst");

//użycie pojedyńczych i podwójnych cudzyslowów w środku
`"I'm Only aaaa" - kktos to powwiedzial`;
('"I\'m only" - lalala');
('"I\'m only" - aaaaa');

//wielowierszowe stringi

//ES5
const text1 = "text\ntext\ntext\naaa";
//ES6
const text2 = `text
text
text`;

//  ${} - osadzanie kodu JS wewnątrrz stringa

const name = "Jagna";

//wstrzykiwanie kodu wewnątrz stringa
const greeting = `Cześć ${name}`;

//Możliwość użycia wyrażenia (zostanie wykonane i zwrócone jako wynik)

const usr1 = 29;
const usr2 = 19;
const usr3 = 25;

console.log(
  `Sredni wynik użytkowników to : ${(usr1 + usr2 + usr3) /
    3}, a łączny wiek to ${usr1 + usr2 + usr3}`
);

//Pobieranie i wyświetlanie aktualnej daty

console.log(`Obecnie zegar wskazuje ${new Date().toLocaleTimeString()}`);
const price = 80.99;
const tax = 40;

console.log(`Do zapłaty jest: ${price + price * tax}`);
console.log(`Do zapłaty jest: ${(price + price * tax).toFixed(2)}`);
console.log(`Cena jest obecnie${price <= 80 ? " za wysoka" : " za niska"}`);
