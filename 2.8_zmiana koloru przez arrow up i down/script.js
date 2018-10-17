let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// INSTRUKCJA IF

// const changeColor = e => {
//   let up = e.keyCode || e.wich;
//   let down = e.keyCode || e.wich;
//   console.log(e.keyCode, e.wich); //sprawdza keyCode wybranego klawisza.
//   if (up === 38 && red < 255) {
//     console.log(red);
//     document.body.style.backgroundColor = `rgb(${(red += 5)}, ${(green += 5)}, ${(blue += 5)})`;
//   } else if (down === 40 && red > 0) {
//     console.log(red);
//     document.body.style.backgroundColor = `rgb(${(red -= 5)}, ${(green -= 5)}, ${(blue -= 5)})`;
//   }
// };
// window.addEventListener("keydown", changeColor);

//  INSTRUKCJA SWITCH

const changeColor = e => {
  switch (e.keyCode || e.wich) {
    case 38:
      {
        document.body.style.backgroundColor = `rgb(${
          red < 255 ? (red += 5) : red
        }, ${green < 255 ? (green += 5) : green}, ${
          blue < 255 ? (blue += 5) : blue
        })`;
        console.log(red);
      }
      break;
    case 40: {
      document.body.style.backgroundColor = `rgb(${
        red > 0 ? (red -= 5) : red
      }, ${green > 0 ? (green -= 5) : green}, ${
        blue > 0 ? (blue -= 5) : blue
      })`;
      console.log(red);
    }
  }
};
window.addEventListener("keydown", changeColor);
