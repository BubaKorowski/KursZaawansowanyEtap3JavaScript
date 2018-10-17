// document.body.addEventListener("mousemove", e => {
//   console.log(e.clientX, e.clientY);
//   document.querySelector("h1").textContent = `${e.clientX}, ${e.clientY}`;
// });

//lub
const h1 = document.querySelector("h1");
document.body.addEventListener("mousemove", e => {
  // console.log(e.clientX, e.clientY);

  // h1.textContent = `${e.clientX}, ${e.clientY}`;
  // h1.textContent = `${e.pageX}, ${e.pageY}`;
  // h1.textContent = `${e.screenX}, ${e.screenY}`;

  // document.body.style.backgroundColor = `rgb(${e.clientX / 2}, ${e.clientY /
  //   2},${e.clientY * 10})`;

  const x = e.clientX;
  const y = e.clientY;
  h1.textContent = x + ", " + y;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = ((x / width) * 100 + (y / height) * 100) / 2;

  document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
});
