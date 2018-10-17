document.body.addEventListener("click", function(e) {
  console.log(e.clientX, e.clientY);
  const x = e.clientX;
  const y = e.clientY;
  const conditionX = x % 2;
  const conditionY = y % 2;
  if (conditionX == 0 && conditionY == 0) {
    document.body.style.backgroundColor = `red`;
  } else if (conditionX !== 0 && conditionY !== 0) {
    document.body.style.backgroundColor = `green`;
  } else {
    document.body.style.backgroundColor = `blue`;
  }
});
