const btn = document.querySelector("button");
let txt = 1;
let circle = 0;
let txtCircle = 1;

btn.addEventListener("click", function() {
  console.log("klik");
  const divElement = document.createElement("div");
  divElement.textContent = txt;

  // if (txt % 5 == 0) {
  //   divElement.classList.add("circle");
  //   console.log("5 element");
  // }

  if (txtCircle == 5) {
    txtCircle = 0;
    divElement.classList.add("circle");
    console.log("5 element");
  }

  document.body.appendChild(divElement);
  txt++;
  txtCircle++;
});
