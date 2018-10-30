// http://websamuraj.pl/examples/js/projekt11/
const btnTime = document.querySelector(".main");
const btnTimeReset = document.querySelector(".reset");
const div = document.querySelector(".time div");

let time = 0;
let active = false;
let idI;
let min = 0;

const timer = () => {
  if (!active) {
    active = !active;
    console.log("active");
    btnTime.textContent = "Pauza";
    idI = setInterval(start, 10);
  } else {
    active = !active;
    btnTime.textContent = "Start";
    clearInterval(idI);
  }
};
const reset = () => {
  active = false;
  clearInterval(idI);
  time = 0;
  div.textContent = "---";
  btnTime.textContent = "Start";
};

const start = () => {
  time++;
  div.textContent = (time / 100).toFixed(2);
  if (time == 1000) {
    min++;
    div.textContent = `${min}`;
  }
};

btnTime.addEventListener("click", timer);
btnTimeReset.addEventListener("click", reset);

//  KONKLUZJA: rozwiązanie prawidłowe dla time == 60.00sekund. jeśli time > 60sec to powinno doliczyć 1 min...1godzinę. jeśli godziny >= 24 reset licznika
