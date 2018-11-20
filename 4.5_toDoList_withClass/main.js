class AddListItem {
  constructor() {
    this.btn = document.querySelector("button");

    this.btn.addEventListener("click", e => {
      e.preventDefault();
      let input = document.querySelector("input").value;
      let li = document.createElement("li");
      let ul = document.querySelector("ul");
      li.innerHTML = input;
      ul.appendChild(li);

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "X";
      li.appendChild(delBtn);
      delBtn.addEventListener("click", function(e) {
        e.target.parentNode.remove();
      });
    });
  }
}

let add = new AddListItem();
