const chars = "ABCDEFGHIJKLŁMNOPRSTUWXYZ1234567890";

const btn = document.querySelector("button");
const section = document.querySelector("section");

const codesNumber = 10;
const charsNumber = 20;

const codeGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random() * 35);
      code += chars[index];
    }

    const div = document.createElement("div");
    div.textContent = code;
    section.appendChild(div);
  }
};
btn.addEventListener("click", codeGenerator);
