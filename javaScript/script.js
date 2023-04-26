function computerPlay(){
  const choices = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * choices.length);
  return choices[compChoice];
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); 
  let result;
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  return result;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const prompt=require("prompt-sync")({sigint:true});
    const playerSelection = prompt("Enter your choice (rock/paper/scissors):");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.startsWith("You win!")) {
      playerScore++;
    } else if (result.startsWith("You lose!")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore}-${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game! Final score: ${playerScore}-${computerScore}`);
  } else {
    console.log(`It's a tie game! Final score: ${playerScore}-${computerScore}`);
  }
}
game()  