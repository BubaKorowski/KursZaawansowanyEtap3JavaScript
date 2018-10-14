// ZAKRES LOKALNY (FUNKCJA)

// 1. Przykład

var varFun = "a";
// let letFun = "b";
// const constFun = "c";

function variablesInFunction() {
  // var inFunction = "I am";
  // var varFun = 0;
  varFun = 4;
  // console.log(inFunction);
  // console.log(varFun);
  let letFun = 5;
  // const constFun = 6;
  // console.log(letFun);

  // console.log(localInLocalFun); //nie ma dostępu z zakresu globalnego do lokalnego i wywali błąd

  function showVariable() {
    let localInLocalFun = "local in local";

    const constFun = "Function in Function.";
    varFun = "I am overwriting value of variable from higher scope.";
    console.log(varFun);
    console.log(letFun);
    console.log(constFun);
  }
  // showVariable();
}
variablesInFunction();

// showVariable(); //nie ma dostępu z zasięgu globalnego

// 2. Przykład

function calculate(a, b) {
  // const a = a;
  // const b = b;
  // const number1 = a;
  // const number2 = b;
  // console.log(a);
  // console.log(b);
  // console.log(number1);
  // console.log(number2);

  function add() {
    // number2 = 10; //nie nadpisze wartości stałej const ;p
    // const number2 = 10;
    // console.log(number1 + number2);
  }
  add();
}
calculate(2, 3);

// ZAKRES LOKALNY (BLOK) - ZAKRES BLOKOWY

//Wprowadzony w ES6.

// 1. Przykład

let var1 = 1;
const var2 = 2;
var var3 = 3;
{
  // let var1 = "inner 1";
  // const var2 = "inner 2";
  // var var3 = "inner 3";
  // console.log(var1);
  // console.log(var2);
  // console.log(var3);
  var1 = "inner 1";
  // var2 = "inner 2";
  var3 = "inner 3";
}
// console.log(var1); //jeśli nie znajdzie zmiennej w swoim zakresie to już dalej nie szuka w zakresie lokalnym.
// console.log(var2);
// console.log(var3); //zaciąga wartość zmiennej var3 z zakresu lokalnego ponieważ wartość zmiennej "var" można redeklarować.

// 2. Przykład

// const a = "1 in global scope";
let b = "2 in global scope";
var c = "3 in global scope";

if (true) {
  // console.log(a); // zmienna globalna jest widoczna w bloku
  // a = "Przypisanie do a'ale którego'";
  // const a = "1 in block";
  // console.log("a in block is: " + a);
  // b = "2 in block";
  // console.log("b in block is: " + b);
  // var c = "3 in block";
}
// console.log(a);
// console.log(c);

// 3. Przykład

let i = 100;

//zakres parametrów pętli jest odrębnym zakresem od zakresu bloku
for (let i = 0; i < 10; i++) {
  // let i = 10;
  // console.log(i);
  const inFor = "inside loop";
  if (i < 4) {
    // i = 10;
    let i = 20;
    //   inFor = "inside loop and inside ranch conrol";
    //  const inFor = "inside loop and inside ranch conrol";
    // console.log("i inside branch control w pętli " + i);
  }
  // console.log(i);
}
// console.log(i);

// 4. Przykład

// Zakres zagnieżdżony w innym zakresie. Zakres lokalny może być zagnieżdżony w innym zakresie lokalnym.
// Najpierw sprawdzany jest zakres ..

let example1 = "global";

if (true) {
  let example2 =
    "zakres lokalny. dla którego zakresem zewnętrznym jest zakres globalny";
  if (true) {
    let example3 =
      "zakres lokalny. dla którego zakresem zewnętrznnym jest inny zakres lokalny";
    let example1 = "nowa wartość";
    console.log(example1);
    console.log(example2);
    console.log(example3);
  }
}
