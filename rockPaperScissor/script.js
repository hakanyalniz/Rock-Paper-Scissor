function getComputerChoice() {
  let computerChoice;
  let random = Math.floor(Math.random() * 10);
  if (random < 3) {
    computerChoice = "Rock";
  } else if (random >= 3 && random < 6) {
    computerChoice = "Paper";
  } else if (random >= 6) {
    computerChoice = "Scissor";
  } else {
    computerChoice = "Error!";
  }
  console.log("The computer picks: " + computerChoice);
  return computerChoice;
}

// function getPlayerChoice(choice = "none") {
//   let playerChoice = choice;

//   console.log("The player picks: " + playerChoice);
//   return playerChoice;
// }

function whoWins(player, computer) {
  player = player.toLowerCase();
  console.log("The player picks: " + player);
  console.log(computerCounter, playerCounter);

  computer = computer.toLowerCase();
  if (
    (player == "rock" && computer == "rock") ||
    (player == "paper" && computer == "paper") ||
    (player == "scissor" && computer == "scissor")
  ) {
    changeScore("draw");
    return "Draw!";
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "scissor" && computer == "rock") ||
    (player == "paper" && computer == "scissor")
  ) {
    changeScore("computer");
    // computerCounter++;
    return "Player looses!";
  } else if (
    (player == "rock" && computer == "scissor") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissor" && computer == "paper")
  ) {
    changeScore("player");
    // playerCounter++;
    return "Player wins!";
  }
}

function changeScore(whoWon) {
  if (whoWon == "computer") {
    computerCounter++;
    computerScore.innerHTML = computerCounter;
  } else if (whoWon == "player") {
    playerCounter++;
    playerScore.innerHTML = playerCounter;
  } else if (whoWon == "draw") {
    drawCounter++;
  } else {
    throw new Error("Something went wrong in changeScore whoWon logic.");
  }

  // Computes and shows the last result
  if (computerCounter == 5) {
    console.log(
      `Final results: Computer: ${computerCounter} Player: ${playerCounter}`
    );
    finalResults.innerHTML = `Computer Won`;
  } else if (playerCounter == 5) {
    finalResults.innerHTML = `Player Won`;
  }
}

function game() {
  rockButton.addEventListener("click", () =>
    whoWins("rock", getComputerChoice())
  );
  paperButton.addEventListener("click", () =>
    whoWins("paper", getComputerChoice())
  );
  scissorButton.addEventListener("click", () =>
    whoWins("scissor", getComputerChoice())
  );
}

// References the buttons and adds event listeners later on to get player input via UI
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");

let computerScore = document.getElementById("computer-score");
let playerScore = document.getElementById("player-score");
let finalResults = document.getElementById("final-results");

let computerCounter = 0;
let playerCounter = 0;
let drawCounter = 0;

console.log("The game of Rock Paper Scissor is starting!");
console.log("The player goes first!");

game();
