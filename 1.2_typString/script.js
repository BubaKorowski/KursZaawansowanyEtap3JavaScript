//Literał tekstowy  - sposób na tworzenie wartości typu prostego

//SRING - kolekcja znaków znajdujących się wewnątrz cudzysłowów ("") ('') (``). Inaczej łańcuch znaków, ciąg znaków, 'łańcuhc'.

const userName1 = "Jaś Fasola"
const userName2 = "Mieszko Pierwszy"
const userName3 = `Super String` //od ES6 będzie miał osobny materiał ;)

//Możłiwość pobrania konkretnego znaku wg indeksu (pierwsza litera ma indeks 0)
const seckondLetter = userName1[1]; //a

//tworzenie instancji (obiektu) string
const objUserName = new String(userName1); //obiekt
const primitiveUserName = userName1; //typ prosty

//typ prosty
const emptyString = "";

//obiekt będący instancją string
const emptyObjectString = new Object("");
const emptyObjectString2 = new String();

const stringExample = new String("aasfuih");
// const stringExample2 = new String(200. l) //Co to za błąd???

//Metody dla typu string

userName1.toUpperCase();
userName1.toLocaleLowerCase();
console.log(userName1.toUpperCase());
console.log(userName1.toLowerCase());

//metody coś robią. Metody wywołujemy()
//właściwości coś zawierają

userName1.length; //właściwość zwraca długość stringa. Notacja kropkowa
userName1['length']; //właściwość j.w. Notacja tablicowa, natacja z nawiacami.

userName1.charAt(3); //pobranie konkretnego znaku;
userName1[2] //metoda j.w.

//łączenie stringów
userName1.concat(" - fajne imię!", " I super.");
userName1 + ' - fajne imię!' + ' I super.'; //łączenie poprzez konkatenację.
`${userName1} - fajne imię!` //ES6 poprzez super string - do omówienia w dalszej części.

userName1.indexOf('d'); // zwóci -1 bo nie ma tego znaku
userName1.indexOf(' '); //zwróci 3 bo biały znak jest 4 w kolejności

//czy dany znak znajduje się w łańcuchu
userName1.includes('o'); //true
userName1.includes('0'); //false

//pozbywa się białych znaków na początku i na końcu łańcucha
const afterTrim = "    słowo  ".trim();

//kopiowanie stringa
const repeatString = 'Jestem napisem. '.repeat(1e7); //nie może == infinite, ale i nie może być > maximum string size.

const sliceWord = userName1.slice(0, 3); //wycina "Jaś"

//cudzysłów w środku stringa
const singleQuoteExample1 = "I'm Borys"; //różne cudzysłowy
const singleQuoteExample2 = 'I\'m Borys'; //używamy backslash jako oznaczenia wyjątku

//backslash jako element tekstu
const slash = 'ktoś\\coś';
const longText = 'texttttt \n nowa linia tekstu';

const superText = ` tekst
tekst w nowej linii z cudzysłowem"aaa" 'aaa' \\`; //Super String mówi sam za siebie ;)

//Konwersja innego typu na string
String(100000)

200..toString(); //domyślnie jest system dziesiętny
200..toString(16); //tutaj wskazujemy konkretnie szestnastkowy
//Niejawna konwersja - trick konkatenacji
"" + 200; //"200"
"" + true; //"true"