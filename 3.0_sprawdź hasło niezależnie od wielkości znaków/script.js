const input = document.querySelector("input");
const passwords = ["JedEn", "DwA"];
const messages = ["super", "działa"];
const div = document.querySelector(".message");

//    PIERWSZE ROZWIĄZANIE

// const showMessage = e => {
//   const text = e.target.value.toLowerCase();
//   for (let i = 0; i < passwords.length; i++) {
//     passwords[i] = passwords[i].toLowerCase();
//   }
//   passwords.forEach((password, i) => {
//     if (password === text) {
//       div.textContent = messages[i];
//       e.target.value = "";
//       console.log(password, i);
//     }
//   });
// };

//    DRUGIE ROZWIĄZANIE

// const input = document.querySelector("input");
// const passwords = ["JedEn", "DwA"];
// const messages = ["super", "działa"];

// const showMessage = e => {
//   passwords.forEach((password, i) => {
//     if (password.toUpperCase() === e.target.value.toUpperCase()) {
//       document.querySelector("div").textContent = messages[i];
//       console.log("jest");
//     }
//   });
// };

//    TRZECIA METODA

const passwordToLowerCase = passwords.map(password => password.toLowerCase());
// console.log(passwordToLowerCase);

const showMessage = e => {
  const text = e.target.value.toLowerCase();

  for (let i = 0; i < passwordToLowerCase.length; i++) {
    if (text === passwordToLowerCase[i]) {
      div.innerHTML = messages[i];
      e.target.value = "";
    }
  }
};

input.addEventListener("input", showMessage);
