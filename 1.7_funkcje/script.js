// FUNKCJE W JavaScript

//funkcje są obiektami
//funkcje można wywoływać
//funkcje to małe programy które orbią coś z danymi, lub coś zwracają. Funkcja może modyfikować program(nazywamy to efektem ubocznym), lub go nie modyfikować a jedynie przetwazrać elementy zwracając nową wartość(do zwracania służy słowo 'return').
//funkcje są wielokrotnego użytku i mogą być uruchamiane/wykożystywane wielokrotnie.
//można ich używać tam gdzie innych obiektów np. przypisać do zmiennych, lub jako argumentu w innej funkcji, czy też jako wartość zwracana z funkcji(są first-class-objectsczyli są pełnoprawnymi obiektami)

//JAK STWORZYĆ FUNKCJE

// 1. WYRAŻENIE FUNKCYJNE (funkcja bez nazwy - do wunkcji odwołujemy się za pomocą zmiennej). Function Expression.

// const nazwaFunkcjiCoRobi = function() {};

// const showMessage = function (message) {
//   console.log(message);
// };
// showMessage("Pokazuję wiadomość");

// 2. DEKLARACJA FUNKCJI - ndeviajpierw słowo kluczowe function a potem nazwa. Function Declaration.

// function addNumber(number1, number2) {
//   return number1 + number2;
// }
// addNumber(2, 4);

// showCourseName(); //wywołanie funkji przed jej deklaracją dzięki hoistingowi.

// function showCourseName() {
//   console.log("JS Programing");
// }
// showCourseName();

// 3. KONSTRUKOR (Function Constructor)

// const newFunctionCoRobi = new Function();

// const textAlert = new Function("text", "alert (text);");
// textAlert("działa");

// 4. FUNKCJA STRZAŁKOWA (ARROW FUNCTION)

// const nazwaFunkcjiCoRobi = () => {};

//funkcja strzałkowa ma inną składnię i trochę inne zachowania. Ta funkcja jest zawsze anonimowa.Jest krótsza

// const showMyTextMyArrowFunction = txt => {
//   console.log(txt);
// };
// showMyTextMyArrowFunction("Hej!");

// PRZYPISANIE FUNKCJI DO INNEJ ZMIENNEJ
//funkcje są obiektami a więc działają jak inne obiekty. Przypisujemy referencje a obiekt jest cięgle jeden

// const showNewCourse = showCourseName;
// console.log(showNewCourse());

// WYWOŁANIE FUNKCJI (invoking)
//nazwa() - tak wywołujemy funkcję
//nazwa(argument1, argument2)
//funkcja może być wywoływana wielokrotnie
//innych wartości niż funkcje nie można wywołać
// const name = "Ada";
// name();

// ZWRACANIE WARTOŚCI Z FUNKCJI
//funkcja moze coś zrobić i coś zwracać
//domyśnie każda funkcja po wykonaniu zwraca undefined jednak możemy to zmienić używając instrukcji return

// example 1 - Funkcja która wpływa na program(efekt uboczny) i zwraca undefined

// const divideBy2 = function (number) {
//   console.log(number / 2);
// };

// const result1 = divideBy2(10);
//do zmiennej result1 zostało przypisane undefined

// example 2 - Funkcja która tylko przetwarza dane(bez efektu ubocznego) i zwraca wartość
// const devideBy3 = function (number) {
//   return number / 3;
// };
// const result2 = devideBy3(9);
// console.log("Wynik to " + result2);
//w powyższym przypadku resut2 przechowuje zwruconą wartość a nie undefined

// example 3 Funkcja z efektem ubocznym i zwracająca wartość

// const divideBy5 = function (number) {
//   const result = number / 5;
//   console.log(result);
//   return result;
// };

// PARAMETRY I ARGUMENTY

// parametr to element składowy funkcji na etapie jej tworzenia. Nie trzeba ich umieszczać (funkcja nie musi mieć parametrów)

//bez parametru
// const showMyName = function () {
//   console.log("Jakub");
// };

//z parametrem
// Parametr - pojęcie używane dla określenia nazwy używanej przy twworzeniu funkcji
// const showUserName = function (userName) {
//   console.log(userName);
// };

//Argument - pojęcie użyte przy wywołaniu funkcji
// showUserName("Izabella");

//W funnkcji powyżej tworząc funkcję ustawiamy jede n parametr. Przy wywołaniu  miejsce parametru podajemy argument, który pełni rolę wartości dla parametru.

//Jeśli nie podamy argumentu to w jego miejsce zostanie wstawione undefined

//Jeśli podamy więcej argumentów niż parametrów to nie spowoduje to błędu
// showUserName("piotr", 200);
// showUserName.length; // pokazuje ilu argumentów oczekuje dana funkcja(czyli ile paramatrów posiada w momencie jej tworzenia)

// WARTOŚCI DOMYŚLNE W FUNKCJI ES6

// jeśli nie podamy argumentów na etapie wywołania funkcji to funkcja weźmie argumentu domyślne

// const addTwoNumbers = (x, y) => {
//   const result = x + y;
//   console.log(result);
//   return x + y;
// };

// Deklaracja funkcji (poniżej to samo co powyżej, ale inny sposób tworzenia)

// const addTwoNumbers2 = function(x = 0, y = 3) {
//   const result = x + y;
//   console.log(result);
//   return result;
// };

// CALLBACK
// Jest to funkcja wywołania zwrotnego, czyli funkcja przekazana jako argument do funkcji i wywołana w niej
// Funkcja do której przekazujemy inną funkcję, czyli nasz callback, nazywa się funkcją wyższego rzędu.

//1. Przykład CALLBACK

// function count(x, callback, callback) {
//   return callback(x);
// }

// function addOne(number) {
//   number++;
//   console.log(number);
//   return number;
// }

// function subtractFour(number) {
//   number -= 4;
//   console.log(number);
//   return number;
// }
// const result = count(4, addOne, subtractFour);

// 2. Przykład CALLBACK

//funkcja anonimowa

document.body.addEventListener("click", function() {
  console.log("kliknąłeś");
});

//funkcja nazwana

// function klik() {
//   console.log("kliknięcie");
// }
// document.body.addEventListener("click", klik);

// 3. Przykład CALLBACK

// setInterval(() => console.log("minęła 1 sekunda"), 1000)]

//albo

// const showTime = () => {
//   console.log("minęła 1 sekunda")
// }
// setInterval(showTime, 1000)

// 3. Przykład CALLBACK

const usersAge = [20, 30, 40, 50, 60, 70, 80];

// usersAge.forEach(userAge => console.log(`Wiek użytkownika to ${userAge}`))

//albo

// usersAge.forEach(function (userAge) {
//   console.log("wiek użytkownika to " + userAge)
// })

// ARGUMENTS - obiekt ARGUMENTS zawiera aktualną listę argumentów przekazanych do tablicy. (podobny do tablicy)

const showArguments = function() {
  console.log(arguments); //arguments - nazwa dla obiektu (nazwa przypisana)
  console.log(arguments.length); //długość - ile argumentów przekazaliśmy
  console.log(arguments[0]); //odwołanie do konkretnego argumentu
  console.log(typeof arguments); //obiekt (tablico-podobny). Ma właściwość length, można odwołać się za pomocą notacji tablicowej np. arguments[2]. Nie ma metod znanych z tablicy
};

// showArguments("5", null, {})

//wykorzystanie w praktyce

const addAllNumbers = function() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const usersMoney = addAllNumbers(2, 2, 2);
