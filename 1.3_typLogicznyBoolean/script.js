//Boolean zwraca tylko 2 wartości true/false

//funkcja boolean - zmienia wartość innego typu na wartość typu boolean
Boolean(0); //false
Boolean(2 >= 2); //true
Boolean("coś"); //true
Boolean({}); //true
Boolean(["kroś", 100, false]); //true
Boolean(""); //false

//Wartości konwertowane na false
0; //oraz -0
NaN;
null;
undefined;

//Operatory zwracające typ logiczny

1 > 1; //false
1 < 1; //false
1 == 1; //true
1 === "1"; //false
"1" === true; //false - konwersja na number a potem porównanie

//negacja logiczna - zamień na typ logiczny (jeśli nie jest) i odwóć
!false; //true
!0; //true;
!200; //false
!true; //false

//podwójna negacja
!!true; //true
!!0; //false
!!""; //flase

const userName1 = "Janek";
const userName2 = "";
!!userName1;
!!userName2;

//Logiczne "I" (iloczyn logiczny) &&
//oba elementy prawdziwe
let userAge = 22;
let userMoney = 10.2;
let beerPrice = 9;
//warunek
userAge >= 18 && userMoney > beerPrice; //true i pijesz piwo ;p
console.log(userAge >= 18 && userMoney < beerPrice);

//Logiczne "LUB" (suma logiczna, alternatywa)
const userConnection = "syn premiera";
const userExperience = 0;

Boolean(userConnection || userExperience);

1 || 0;

//konwersja z Boolean na inny ty: string/number

Number(true);
Number(false);
String(true);
String(false);
