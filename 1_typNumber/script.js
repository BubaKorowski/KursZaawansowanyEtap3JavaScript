//inkrementacja
let position = 2;

// position += 1
position++;

//dekrementacja
// position -= 1
position--;

//preinkrementacja
++position;

//predekrementacja
--position;

//Modulo
10 % 0;

//potęga
2 ** 2;

//OPERATORY LOGICZNE

//operatory porównawcze
2 > 3;
'tekst'.length > 3;
20 >= 20;

//operatory porównania (czy są równe)
'tekst' == 'tekst2';
2 == 2.2;
'2' == 2; //true bo następuje niejawna konwersja typu number na string bo js to język słabo typowany ;)
'2' === 2; //bez konwersji bo porównóje również typ

//operator różne od
100 != 101;
100 != '100'; //konwersja niejawna więc jest true
!0; //true
!!0; //false

//Suma logiczna (logiczne "lub") pierwszy czy true a jeśli pierwszy false to czy drugi jest true
true || false;
false || true;
true || true;
false || false;
(false || true);
(null || 200);

//Iloczyn logiczny (logiczne "i") obydwa muszą być true
true && false;
200 && 0;
"1" && "2";
"1" && "";
(20 > 10 && 20 < 10);

//kolejność operatorów
2 + 3 * 5;
(2 + 3) * 5;
"2" + 3 * 5;

//OPERATOR WARUNKOWY (trujargumentowy)
//warunek? zrobToJesliPrawda : zrobToJesliFalsz
2 > 2 ? "tak" : "nie"

//Literały oraz właściwości i metody typów prostych
const txt = 'jakis tekst';
let score = 12.54;

//nowe wartości można przypisać do nowych zmiennych
const newTxt = txt.toLocaleUpperCase();
const newScore = score.toFixed();

//Przykładowe metody, które możemy wykonać na typie number.
const newNumber = 123.454;

//zaokrąglenie
newNumber.toFixed();
newNumber.toFixed(2);
123..toFixed

//Metoda .toString() - jawna zmiana typów z number na string z możliwością zmiany systemu liczbowego.
newNumber.toString(); //na stytem ziesiętny
newNumber.toString(2); //na system dwójkowy(binarny)
255..toString(16) //na system szestnastkowy
newNumber.toExponential() //na notację naukową
typeof newNumber.toExponential() //pierwszeństwo ma wykonanie metody a potem typeof
newNumber.toExponential() == newNumber.toExponential();

//Funkcje które pozwalają robić różne działania z liczbami
const decimalExample = 10.2;
const integerExample = 10;
//sprawdzanie czy jest liczbą całkowitą
Number.isInteger(decimalExample); //false
Number.isInteger(.49) //false
Number.isInteger(integerExample); //true
Number.isInteger(500000); //true

//Sprawdza czy liczba jest skończona
Number.isFinite(2) //true
Number.isFinite(NaN) //false
Number.isFinite(Infinity) //false
Number.isFinite(3e400) //false - ponieważ maksymalna liczba ma wartość 1e308 ;)
Number.isFinite(1e300) //true - ponieważ maksymalna liczba ma wartość 1e308 ;)

//Tworzenie obiektu instancji Number
const numberOBj1 = new Number() //bez podania wartości da 0
const numberOBj2 = new Number('string') //podanie string zwróci NaN
const numberOBj3 = new Number('222.22') //zwróci liczbę nawet jeśłi będzie wpisana jako string
const numberOBj4 = new Number(222.22) //wynik j.w. 

//konwersja niejawna/automatyczna (coercion) liczby w string, lub stringa w liczbę (przy różnych operandach)

//konkatenacja
20 + "20" //"2020" zmiana number na string oraz konkatenacja
20 * "20" //400 zmiana string na number i mnożenia

//konwersja jawna - inny typ w number
Number('210'); //210
Number(true); //1
Number(false); //
Number(''); //0
Number('string'); //NaN - jeżeli czegoś nie może zmienić w liczbę

//Wykożystanie konwersji niejawnej

//trick - mnożenie przez jeden zmienia string w number
"20" * 1;
//sztuczka działająca (hack)
+
"20";
//Liczbę zmieniamy na string dodając pusty string
20 + "";


// parseInt() pozwala nam zmienić stringa w number. Najpierw podajemy string (w któryma jest liczba) a potem możemy powiedzieć w jakim jest systenie. Wynikiem działania funkcji będzie number w zapisie dizesiętnym
parseInt('20', 10) //20
parseInt('100', 2) //4
parseInt('0xff', 16) //255
//druga wartość jest nie potrzebna jeśłi chcemy uzyskać wartość dziesiętną 
parseInt('100') //100
parseInt('200') //100
parseInt('0xff') //255
parseInt('222abc2#$2!') //222 bo usunie litery jeśli liczba występuje jako pierwsza(usuwa też wszystkie znaki następujące po tejże liczbie)
parseInt('22.55') //22 usuwa liczbę po przecinku
parseFloat('22.55') //22.55 nie usuwa liczby po przecinku

parseInt('22') + parseInt('22.55') //22 + 22 = 44 ponieważ usuwa liczbę po przecinku
parseInt('22') + parseFloat('22.55') //22 + 22.55 = 44.55 ponieważ nie usuwa liczby po przecinku

//obiekt Math
Math.round(2.33);
Math.floor(2.33);
Math.random()