//ARAYS - Tablice


//Jest to obiekt wbudowany(ma więc właściwości i metody)
//posiada uporządkowany zbiór wartości (kolejność jest ważna)
//każda przechowywana wartość posiada swój index liczony od wartości "0"

//Tworzenie tablicy

//Literał z podaniem wartości
const nameList = ["Janek", "Franek", "Asia", "Basia"];

//Literał pustej tablicy a potem uzupełnienie za pomocą odwołania się do indexu

const cityList = [];
cityList[0] = "Konin";
cityList[1] = "Leszno";

//Konstruktor - pusta tablica
const gameItems = new Array();
//konstruktor z uzupełnionymi elementami
const colors = new Array("red", "blue");
colors[3] = "green"


//W obydwu powyższych metodach powstaje instancja Tablicy o tych samych właściwościach i metodach
console.log(typeof nameList);
console.log(nameList);
console.log(typeof colors);
console.log(colors);

//Możemy edytować tablicę nawet jeśli jest ona przypisana do zmiennej const. (const jest najczęściej wybierana dla Arrays) Nie możemy nic innego przypisać do zmiennej const.

const myArrayConst = [];
let myArrayLet = [];
myArrayConst[0] = "Pierwszy";
myArrayLet[0] = "Pierwszy";

// myArrayConst = "coś innego";
// myArrayLet = "coś innego"

//Co może zawierać Tablica
//każdą inną wartość

const diferentValues = ['string', 20, {},
    ['jeden', 'dwa'], null
]

//W celu odwołania się do elementów tablicy używamy indexu
console.log(nameList[1]);
const popularName = nameList[0];
nameList[3] = "Wiesław"; //zastąpienie wartośći tablicy o indeksie 3 
nameList[2] === "Borys" //false

//Usuwanie elementów z tablicy
//delete nie zkraca wielkoćsi tablicy. Zostaje ta sama ilość indexów.
delete nameList[1];
typeof nameList[1];

// Długość Tablicy - właściwość length
const cities = ['Poznań', 'Leszno', 'Londek', "NT", "Warszawa"];
cities.length

// Wykożystanie długości tablicy
//szybkie tworzenie długiej tablicy
const longArray = [];
longArray.length = [200]

//odwołanie do ostatniego elementu
cities[cities.length - 1]

//dodanie elementu jako ostatniego w tablicy
cities[cities.length] = "Tokio"
cities[cities.length] = "Oslo"

//powiekszenie, zmniejszenie, wyzerowanie tablicy
// cities.length += 2
// cities.length = 3
// cities.length = 0

//Sprawdzenie czy to jest Tablica

cities instanceof String;
cities instanceof Array;
cities instanceof Object;
cities instanceof Function;

Array.isArray(cities)

// Dereferencja obiektu (nie tlko tablicy)

let letters = ['a', 'b']
let characters = letters //ta sama tablica, obie zmienne mają tylko referencje (link do tablicy);

//Tablica (i inny obiekt) zostanie usunięta jeśli nie ma do niej referencji
// letters = null;
// characters = null;
// letters = characters = null


// CIEKAWOSTKA - stworzenie wielu zmiennych w oparciu o zawartość tablicy;
// Destructuring Arrays - przypisanie destrukturyzujące
// Wykożystujemy Tablicę do tworzenia nowych zmiennych

const [nameUser, idUser, ageUser] = ["Sylwia", 210, 18]

const game = [120.12, 88, "dobro powszechne"];
let [time, cannon, idea] = game