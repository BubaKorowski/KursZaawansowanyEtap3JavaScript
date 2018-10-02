//dodanie i odjęcie kliknięć
let plus = document.querySelector(".add");
let minus = document.querySelector(".subtract");
let klik = 0;
let spn = document.querySelector("span");

plus.addEventListener("click", function() {
  klik += 1;
  spn.textContent = klik;
});

minus.addEventListener("click", function() {
  klik -= 1;
  spn.textContent = klik;
});

//powiększenie i pomniejszenie font-size
const big = document.querySelector(".bigger");
const small = document.querySelector(".smaller");

let txtSize = 60;
function txtIncrease() {
  txtSize += 10;
  spn.style.fontSize = txtSize + "px";
  console.log("bigger");
}
big.addEventListener("click", txtIncrease);

function txtDecrease() {
  txtSize -= 10;
  spn.style.fontSize = txtSize + "px";
  console.log("Smaller");
}
small.addEventListener("click", txtDecrease);

//Zmiana textContent względem .ofsetTop czyli licznik pixeli dla wybranego elementu.
const txt = document.querySelector("div.info");

function changeText() {
  const wielkośćScrollaY = window.scrollY;
  //   console.log(wielkośćScrollaY);
  const wysokoscSekcji1 = document.querySelector(".sekcja1").clientHeight;
  const wysokoscSekcji2 = document.querySelector(".sekcja2").clientHeight;
  const wysokoscSekcji3 = document.querySelector(".sekcja3").clientHeight;
  const wysokoscSekcji4 = document.querySelector(".sekcja4").clientHeight;
  //   console.log(wysokoscSekcji4);

  const odlegloscOdPoczatkuSekcji1 = document.querySelector(".sekcja1")
    .offsetTop;
  const odlegloscOdPoczatkuSekcji2 = document.querySelector(".sekcja2")
    .offsetTop;
  const odlegloscOdPoczatkuSekcji3 = document.querySelector(".sekcja3")
    .offsetTop;
  //   const odlegloscOdPoczatkuSekcji4 = document.querySelector(".sekcja4")
  //     .offsetTop;

  if (wielkośćScrollaY < wysokoscSekcji1) {
    txt.textContent = "Sekcja 1";
  } else if (wielkośćScrollaY < wysokoscSekcji2 + odlegloscOdPoczatkuSekcji2) {
    txt.textContent = "Sekcja 2";
  } else if (wielkośćScrollaY < wysokoscSekcji3 + odlegloscOdPoczatkuSekcji3) {
    txt.textContent = "Sekcja 3";
  } else {
    txt.textContent = "Sekcja 4";
  }
}
window.addEventListener("scroll", changeText);
