const spnTxt = document.querySelector("span");
const txt = ["setInterval(addLeter, time)", "Another text"];

let time = 100;
let index = 0;
let letter = 0;

const addText = () => {
  spnTxt.textContent += txt[index][letter];
  letter++;
  if (letter === txt[index].length) {
    index++;
    if (index === txt.length) return;
    return setTimeout(() => {
      letter = 0;
      spnTxt.textContent = "";
      addText();
      1000;
    });
  }
  setTimeout(addText, time);
};
addText();
