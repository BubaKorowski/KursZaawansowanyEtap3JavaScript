const sqr = document.createElement("div");
document.body.appendChild(sqr);
let size = 100;
let grow = true;

sqr.style.height = size + "px";
sqr.style.width = size + "px";

window.addEventListener("scroll", function() {
  if (size >= this.window.innerWidth / 1.5) {
    grow = !grow;
  } else if (size < 100) {
    grow = !grow;
  }

  if (grow) {
    sqr.style.height = size + "px";
    sqr.style.width = size + "px";
    size += 10;
  } else {
    sqr.style.height = size + "px";
    sqr.style.width = size + "px";
    size -= 10;
  }
});
