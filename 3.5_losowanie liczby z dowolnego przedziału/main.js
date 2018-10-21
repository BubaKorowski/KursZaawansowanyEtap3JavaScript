Math.random() * 7; //od 0 do 7;

//od 4 do 6 (5.999(9))
Math.random() * (6 - 4) + 4;

// Funkcja uniwersalna
const numberRandom = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return number;
};

// od do (liczba całkowita)
// od 4 do 6 (wliczając 6) -> 4,5,6
//x>=4 i x <=6

Math.floor(Math.random() * (6 - 4 + 1) + 4);

const numberRandomInt = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};
