const btn = document.querySelector("button");
// let listElements = [...document.getElementsByTagName("li")];
let listElements = document.querySelectorAll("li");
let size = 10;

// for (i = 0; i < listElements.length; i++) {
//   listElements[i].style.fontSize = size + "px";
// }

listElements.forEach(function(item) {
  item.style.fontSize = size + "px";
});

//  Wywołanie listy i powiększenie fz poprzez funkcję

// btn.addEventListener("click", function() {
//   for (i = 0; i < listElements.length; i++) {
//     listElements[i].style.display = "block";
//     listElements[i].style.fontSize = size + "px";
//     // size += 10; hehehe ;)
//   }
//   size += 10;
// });

//  Wywołanie lisy za pomocą forEach

btn.addEventListener("click", function() {
  listElements.forEach(function(item) {
    item.style.display = "block";
    item.style.fontSize = size + "px";
  });
  size += 10;
});
