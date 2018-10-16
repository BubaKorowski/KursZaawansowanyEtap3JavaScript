document.body.style.height = "10000PX";
let size = 20;
let grow = true;

const square = document.createElement("div");
document.body.appendChild(square);

document.body.style.margin = 0;
square.style.position = "fixed";
square.style.top = 0;
square.style.left = 0;
square.style.width = 100 + "vw";
square.style.backgroundColor = "green";
square.style.height = size + "px";

let changeHeight = function() {
  // console.log("scrl");
  if (size >= this.window.innerWidth / 2) {
    grow = !grow;
  } else if (size < 20) {
    grow = !grow;
  }

  if (grow) {
    // square.style.height = size + "px";
    size += 10;
  } else {
    // square.style.height = size + "px";
    size -= 10;
  }
  square.style.height = size + "px";
};
window.addEventListener("scroll", changeHeight);

// changeHeight();
