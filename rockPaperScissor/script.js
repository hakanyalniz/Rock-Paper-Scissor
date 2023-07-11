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

function getPlayerChoice() {
  let playerChoice = prompt("Your turn!").toLowerCase();

  console.log("The player picks: " + playerChoice);
  return playerChoice;
}

function whoWins(player, computer) {
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (
    (player == "rock" && computer == "rock") ||
    (player == "paper" && computer == "paper") ||
    (player == "scissor" && computer == "scissor")
  ) {
    return "Draw!";
  } else if (
    (player == "rock" && computer == "paper") ||
    (player == "scissor" && computer == "rock") ||
    (player == "paper" && computer == "scissor")
  ) {
    computerCounter++;
    return "Player looses!";
  } else if (
    (player == "rock" && computer == "scissor") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissor" && computer == "paper")
  ) {
    playerCounter++;
    return "Player wins!";
  }
}

function game() {
  console.log(whoWins(getPlayerChoice(), getComputerChoice()));
}

let computerCounter = 0;
let playerCounter = 0;

console.log("The game of Rock Paper Scissor is starting!");
console.log("The player goes first!");

for (let i = 0; i < 5; i++) {
  game();
}

console.log(
  `Final results: Computer: ${computerCounter} Player: ${playerCounter}`
);
