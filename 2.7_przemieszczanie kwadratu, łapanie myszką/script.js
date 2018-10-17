const div = document.querySelector("div");
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;
div.style.position = "absolute";

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", e => {
  console.log("wciśnięte");
  div.style.backgroundColor = "red";
  drawActive = !drawActive;

  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});

div.addEventListener("mousemove", e => {
  // console.log("ruszam");
  if (drawActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mouseup", () => {
  console.log("puszczam");
  div.style.backgroundColor = "black";
  drawActive = !drawActive;
});
