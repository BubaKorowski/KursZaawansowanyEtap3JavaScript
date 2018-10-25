// let number = 0;

// const addClick = () => {
//   number++;
//   document.body.textContent = `aktualny stan licznika to ${number}`;
// };

// document.addEventListener("click", addClick);

//  PRZYKŁAD CLOSURE

function x() {
  let number = 0;
  function y() {
    console.log(number);
  }
  return y;
}
const example = x();
example();

const add = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `Aktualnie kliknięć jest: ${number}`;
  };
};

const counter = add();
const counterFrom5 = add(5);
document.addEventListener("click", counterFrom5);

//

const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(
      `Cześć ${userName}, ${
        userAge >= 18 ? "Pijesz piwo!!!" : "Pijesz mleko hehe :D"
      }`
    );
  }
  return showName;
};

const mieszko = user("mieszko", 20);
const Jagna = user("JAgna", 15);
mieszko();
Jagna();

const noName = user();
noName();
