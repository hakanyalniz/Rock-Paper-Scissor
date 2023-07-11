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
  if (player == "rock" && computer == "rock") {
    // Rock
    return "Draw!";
  } else if (player == "rock" && computer == "paper") {
    return "Player looses!";
  } else if (player == "rock" && computer == "scissor") {
    return "Player wins!";
  } else if (player == "paper" && computer == "rock") {
    // Paper
    return "Player wins!";
  } else if (player == "paper" && computer == "paper") {
    return "Draw!";
  } else if (player == "paper" && computer == "scissor") {
    return "Player looses!";
  } else if (player == "scissor" && computer == "rock") {
    //Scissor
    return "Player looses!";
  } else if (player == "scissor" && computer == "paper") {
    return "Player wins!";
  } else if (player == "scissor" && computer == "scissor") {
    return "Draw!";
  }
}

function game() {
  console.log(whoWins(getPlayerChoice(), getComputerChoice()));
}

console.log("The game of Rock Paper Scissor is starting!");
console.log("The player goes first!");
for (let i = 0; i < 5; i++) {
  game();
}
