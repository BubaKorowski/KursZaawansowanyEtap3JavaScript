const spnTxt = document.querySelector("span");
const txt = "setInterval(addLeter, time)";

let time = 40;
let index = 0;

const addText = () => {
  spnTxt.textContent += txt[index];
  index++;
  if (index === txt.length) clearInterval(interval);
};

const interval = setInterval(addText, time);
