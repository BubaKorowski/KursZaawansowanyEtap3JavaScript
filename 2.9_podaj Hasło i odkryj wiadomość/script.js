const input = document.getElementById("pass");
const passwords = ["111", "222", "333"];
const messages = ["Aaa", "Bbb", "Ccc"];
const div = document.querySelector(".message");

input.addEventListener("input", e => {
  div.textContent = "";

  const text = e.target.value;

  console.log(text);

  passwords.forEach((password, index) => {

    if (password === text) {
      div.textContent = messages[index];
      e.target.value = "";
      console.log(password, index);
    }
  });
});

input.addEventListener("focus", e => {
  e.target.classList.add("active");
});
input.addEventListener("blur", e => {
  e.target.classList.remove("active");
});

// if (password === e.target.value) {
//     div.textContent = message;
//     e.target.value = "";
//   } else {
//     div.textContent = "";
//   }