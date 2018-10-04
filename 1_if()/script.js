//Instrukcja warunkowa "if"

const condition = 2;
if (condition < 4) {
    // console.log("console.log widać ponieważ warunek do wykonania 'if' jest prawdziwy");
    // alert('dizała')
}

const userName = "Danuśka";
if (userName) {
    // console.log("Witaj " + userName + "!")
}


const userName2 = "";
if (userName2 === "") {
    // console.log("Uzupełnij imię " + userName2 + "!")
}

//Instrukcja warunkowa "if else"
const hasTicket = false;
const moreThan15YearsOld = false;
const bossFamily = true;
if (hasTicket && moreThan15YearsOld || bossFamily) {
    // console.log('Wchodzi')
} else {
    // console.log("Sorry")
}

//klauzula else if
const age = 9;

if (age <= 19) {
    // console.log('jesteś dzieckiem');
} else if (age <= 18) {
    // console.log('jesteś młodzierzą')
} else if (age <= 50) {
    // console.log('złote gody')
} else if (age <= 70) {
    // console.log('jak emerytura?')
}

//Zagnieżdzienie if

const guestName = "Boleslaw";
const guestAge = 18;

if (guestName != "") {
    if (guestAge >= 18) {
        console.log("Witaj w klubie " + guestName)
    } else {
        console.log("No niestety " + guestName)
    };
} else {
    console.log("Nie wiem jak masz na imie.")
};

//Instrukcje warunkowe "switch"

const dayOfTheWeek = "poniedziałek";

//jako argument podajemy wartość, którą będziemy porównywać
switch (dayOfTheWeek) {
    //po "case" podajemy wartość do porównania z argumentem instrukcji
    case "poniedizałek":
        console.log("dziś poniedziałek");
        break;
    case "wtorek":
        console.log("dziś wtorek");
        break;
    case "Środa":
        console.log("dziś Środa");
        break;
    default:
        console.log("nie wiem co to za dzień")
};

//Operator warunkowy / operator potrójny (trójkowy)

/*
a ? b : c;
warunek ? wykonaj mnie jeśłi warunek jest true : wykonaj jeśłi warunek jest false
*/
const score = 100;

20 === "20" && score >= 100 ? console.log("wykonuję się ponieważ jest true") : console.log("wykonuje się ponieważ jest false");

true && false ? console.log("prawda") : console.log("fałsz");
score > 80 ? console.log("prawda") : console.log("fałsz");

//Z instrukcji warunkowej nie można przechwycić wartości i przypisać jej do zmiennej. Jednak w pewnych sytuacjach chcemy to zrobić.

let gameResult = 0;
let killMonsters = 9
gameResult += killMonsters > 10 ? 1 : 0;

const playerName = "Mściwoj"

console.log(`Witaj ${playerName ? playerName : "Wojowniku nieznany"}`)