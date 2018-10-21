let advices = [];
const h2 = document.querySelector("h2");

const addAdvice = e => {
  e.preventDefault();
  const input = document.querySelector("input");
  const newAdvice = input.value;
  if (newAdvice.length) {
    for (presentAdvice of advices) {
      if (presentAdvice === newAdvice) {
        alert("Ta sugestia już jest");
        return;
      }
    }
    advices.push(newAdvice);
    console.log(advices);
    input.value = "";
  }
};

const btn = document.querySelector(".add");
btn.addEventListener("click", addAdvice);

const reset = document.querySelector(".clean");
reset.addEventListener("click", e => {
  e.preventDefault();
  h2.textContent = `Komputerze kochany, pokaż co mam zrobić z tym o czym myślę...`;
  advices.length = 0; //Jeśli advices = 0 to wywala błąd w linii 9 "advices not iterable" ponieważ po tym przypisaniu advices nie jest uż tablicą ;p
});

const getAdvice = document.querySelector(".showAdvice");

getAdvice.addEventListener("click", () => {
  if (advices.length) {
    h2.textContent = `Maszyna losująca wybrała następującą możliwość: ${
      advices[Math.floor(Math.random() * advices.length)]
    }.`;
  } else {
    h2.textContent = `Jesteś skończony. Maszyna losująca nie posiada dla Ciebie żadnej rady!`;
  }
});

const tableOfOptions = document.querySelector(".showOptions");
tableOfOptions.addEventListener("click", () => {
  if (advices.length) {
    alert(`Lista losowych możliwości: ${advices}.`);
  } else {
    alert(`Lista możliwości jest pusta.`);
  }
});
