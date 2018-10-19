const btn = document.querySelector("button");
const nameGenerator = () => {
  const names = [
    "dada",
    "mada",
    "lada",
    "maton",
    "baton",
    "kraton",
    "lelum",
    "pollelum",
    "pogoda",
    "dekada"
  ];
  // const random = Math.floor(Math.random() * names.length);
  // console.log(random);
  const div = document.querySelector("div");
  // div.textContent = `Wylosowane Imię to: ${names[random]}.`;
  div.textContent = `Wylosowane Imię to: ${
    names[Math.floor(Math.random() * names.length)]
  }.`;
};

btn.addEventListener("click", nameGenerator);
