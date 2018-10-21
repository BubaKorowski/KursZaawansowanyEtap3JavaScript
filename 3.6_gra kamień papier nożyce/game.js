// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
  numbers: 0,
  wins: 0,
  looses: 0,
  draws: 0
};
const game = {
  playerHand: "",
  aiHand: ""
};
const hands = [...document.querySelectorAll(".select img")];

//  WYBÓR GRACZA
function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach(hand => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px blue";
}

//  WYBÓR KOMPUTERA

function aiChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  return aiHand;
}

//  SPRAWDZENIE WYNIKU

function checkResult(player, ai) {
  if (player === ai) {
    return "draw";
  } else if (
    (player === "papier" && ai === "kamień") ||
    (player === "kamień" && ai === "nożyczki") ||
    (player == "nożyczki" && ai === "papier")
  ) {
    return "Win";
  } else {
    return "Loss";
  }
}
//  Publikkacja wyniku
function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result === "Win") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś";
  } else if (result === "Loss") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "Przegrałeś";
  } else {
    document.querySelector("p.losses span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent = "Remis";
  }
}
function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
}

//  FUNKCJA STERUJĄCA

function startGame() {
  if (!game.playerHand) {
    return alert("Wybierz dłoń");
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);
