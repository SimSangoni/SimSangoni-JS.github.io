// function playGame() {
//     const choices = ["rock", "paper", "scissors"];
//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     const userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
//     console.log(`Computer chose ${computerChoice}`);
//     if (!choices.includes(userChoice)) {
//       console.log("Invalid input. Please choose rock, paper, or scissors.");
//     } else if (userChoice === computerChoice) {
//       console.log("It's a tie!");
//     } else if (
//       (userChoice === "rock" && computerChoice === "scissors") ||
//       (userChoice === "paper" && computerChoice === "rock") ||
//       (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//       console.log("You win!");
//     } else {
//       console.log("Computer wins!");
//     }
//   }
  
//   playGame();
  