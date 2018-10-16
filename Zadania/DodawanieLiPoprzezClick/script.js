const btn = document.querySelector("button");
let number = 1;

btn.addEventListener("click", function() {
  let list = document.createElement("li");
  document.querySelector("ul").appendChild(list);
  list.textContent = number;

  //   number += 2; //number = 1 i tworzy li oraz dodaje text i dodaje += 2 a potem robi if i sprawdza warunem dla number = 3 a nie number = 1(przez co fałszuje wynik i dodaje .big do number = 1...) i z tąd wywala błąd dlatego powinno być po if

  if (number % 3 == 0) {
    list.classList.add("big");
    console.log(number % 3);
  }
  number += 2;
});
