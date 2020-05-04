let scoreUser = 0;
let scoreComputer = 0;

// определение выбора компьютера
const selections = ["rock", "scissors", "paper"];
let computerSelection = selections[Math.floor(Math.random() * 3)];

// конвертация выбора в иконку
function convert(word) {
  if (word === "rock") {
    return '<i class="far fa-hand-rock"></i>';
  } else if (word === "scissors") {
    return '<i class="far fa-hand-scissors"></i>';
  } else return '<i class="far fa-hand-paper"></i>';
}

// подсчет очков
function scoreCount() {
  const scoreItem = document.getElementById("score");
  scoreItem.innerHTML = `${scoreUser} : ${scoreComputer}`;
}
setInterval(scoreCount, 50);

function game(userSelection) {
  const challenge = document.querySelector(".challenge");
  challenge.style.display = "flex";

  const userResult = document.querySelector(".challenge__user-selection");
  userResult.innerHTML = convert(userSelection);

  const computerResult = document.querySelector(
    ".challenge__computer-selection"
  );
  computerResult.innerHTML = convert(computerSelection);

  if (
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "rock" && computerSelection === "scissors") ||
    (userSelection === "scissors" && computerSelection === "paper")
  ) {
    win();
  } else if (userSelection === computerSelection) {
    draw();
  } else {
    lose();
  }

  // обновление выбора компьютера
  function continueGame() {
    computerSelection = selections[Math.floor(Math.random() * 3)];
    challenge.style.display = "none";
  }
  setTimeout(continueGame, 1300);
}

function win() {
  scoreUser++;
  const resultText = document.querySelector(".challenge__result");
  resultText.innerHTML = "Ты выиграл!";
}

function lose() {
  scoreComputer++;
  const resultText = document.querySelector(".challenge__result");
  resultText.innerHTML = "Компьютер выиграл!";
}

function draw() {
  const resultText = document.querySelector(".challenge__result");
  resultText.innerHTML = "Ничья!";
}
