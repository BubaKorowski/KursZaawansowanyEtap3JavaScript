//LOOPS - PĘTLE

//Loops pozwalają na ielokrotne wykonanie kodu, lub bloku kodu tyle razy ile razy jest spełniony warunek. Pozwala pracować na elementach tablicy lub obiektu.

//FOR

// for (inicjalizacja iteratora; warunek; zwiększenie iteratora) {tutaj jest blok kodu wykonywany przez pętle}

// for (let i = 0; i < 5; i++) {
//   console.log("wyświetlam kolejno " + i);
// }

//działanie
// 1 - inicjalizacja naastępuje raz(zgodnie z konwencją iterator nazywamy zmienna: "let i" ani var ani const). Najczęściej deklarujemy wartość let i = 0.

// 2 - warunek jest sprawdzany za każdym razem przed wykonaniem bloku kodu.Warunek jest konwertowany do wartości boolean true/false. if false to pętla kończy działanie.

// 3 - wykonanie kodu (o ile warunek jest true).

// Iterację można zrobić w pętli a zainicjalizować poza nią. Nie jest to polecane rozwiązanie.

// let i = 0;
// for (; i < 2; ) {
//   console.log(i);
//   i++;
// }

//WHILE

//uruchamia blok kodu dopóki warunek jest prawdziwy

// UWAGA. PONIŻEJ PRZYKŁAD PĘTLI NIESKOŃCZONEJ. ZWIECHA PRZEGLĄDARLKI MUROWANA!!! ;D
// while (true) {
//   console.log("nieskończoność");
// }

//example 1
// let number = 0;
// while (number < 10) {
//   number++;
//   console.log(number);
// }

//example 2
// let money = 50;
// while (money >= 8) {
//   console.log("Mamy jeszcze " + money + " PLN. To pijemy");
//   money -= 8;
// }
// alert(`za ${money} pln, już piwa nie kupię :(`);

//example 3
// let gasoline = 40;
// let km = 0;

// while (gasoline--) {
//   km += 18;
//   console.log(
//     "Przejechaliśmy " +
//       km +
//       " kilometrów. Zostało nam jeszcze " +
//       gasoline +
//       " litrów bęzyny"
//   );
// }

//DO...WHILE
//Blok wykona się przynajmniej raz nawet jeśli warunek jest false, a po tym będzie wykonywać się jeśli warunek jest true

// let study = "nie wyrzucilii mnie";

// do {
//   console.log("idę do szkoły");
// } while (study === true);

//PĘTLA W PĘTLI
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(
//       `zmiennna i czyli ${i} pomnożona przez zmienną j czyli ${j} da wynik ${i *
//         j}`
//     );
//   }
// }

// PĘTLA NA TABLIY

//wyświetlamy wiek użytkownika
// const userAge = [19, 18, 15, 35, 66, 29, 35, 44, 33];
// userAge.sort();
// for (let i = 0; i < userAge.length; i++) {
//   console.log(`wiek użytkownika numer ${i + 1} to ${userAge[i]}`);
// }

// obliczamy wiek użtkownika
const userBirthDate = [2000, 1980, 1600, 1948, 1932];
const currentYear = 2018;

for (let i = 0; i < userBirthDate.length; i++) {
  const userAge = currentYear - userBirthDate[i];
  console.log(`wiek użytkownika z numerem index ${i} wynosi ${userAge}`);
}

// for + instrukcja warunkowa alert

// const guest = [
//   "pilkarz",
//   "kucharz",
//   "dekarz",
//   "programista",
//   "polityk",
//   "pisarz",
//   "magazynier",
//   "emeryt"
// ];

// for (let i = 0; i < guest.length; i++) {
//   if (guest[i] === "programista") {
//     console.log("Nie wpuszczać. Programiści to nudziarze ;p");
//   } else if (guest[i] === "polityk") {
//     console.log("Oj oj, to " + guest[i] + ". Przepraszamy, ale kurwy już mamy");
//   } else {
//     console.log("witamy Panie " + guest[i] + ", zapraszamy!");
//   }
// }

//PĘTLA FOR - OF (ES6)

const colors = [
  "red",
  "green",
  "black",
  "yellow",
  "white",
  "gold",
  "siver",
  "brown"
];
for (const color of colors) {
  console.log(color);
}