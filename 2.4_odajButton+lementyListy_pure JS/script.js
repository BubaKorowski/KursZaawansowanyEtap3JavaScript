const button = document.createElement("button");
const buttonRes = document.createElement("button");
const ul = document.createElement("ul");
let size = 10;
order = 1;

document.querySelector("html").appendChild(button);
document.querySelector("html").appendChild(buttonRes);
document.querySelector("html").appendChild(ul);

button.textContent = "Dodaj element listy";
buttonRes.textContent = "Reset";

button.addEventListener("click", () => {
  console.log("klik");
  for (y = 0; y < 10; y++) {
    const li = document.createElement("li");
    document.querySelector("ul").appendChild(li);
    liElements = document.querySelectorAll("li");

    //poniżej linijki rozwiązania nauczyciela.
    li.textContent = `Element numer ${order++}`;
    li.style.fontSize = `${size++}px`;

    // for (i = 0; i < liElements.length; i++) {
    //   li.textContent = "Element " + [i + 1];
    //   li.style.fontSize = size + "px";
    // }
    // size++;
  }
});

//  Przycisk resetu
buttonRes.addEventListener("click", () => {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  size = 10;
  order = 1;
});
