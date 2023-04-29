const userScoreDisplay = document.getElementById('userScore')
const compScoreDisplay = document.getElementById('compScore')
const roundDisplay = document.getElementById('round')
const userPlaceholder = document.getElementById('user-placeholder');
const compPlaceholder = document.getElementById('comp-placeholder');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const rockImage = document.getElementById('rockImage');
const paperImage = document.getElementById('paperImage');
const scissorsImage = document.getElementById('scissorsImage');

let playerScore = 0;
let computerScore = 0;
let round = 0;


// Notification for Pop Up Images
function showNotification(message ,imageUrl, duration) {
  // Show overlay and modal
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const image = modal.querySelector("img");
  const messageElement = modal.querySelector("p");

  image.src = imageUrl;
  messageElement.textContent = message;
  overlay.style.display = "block";
  modal.style.display = "block";
  // Hide modal after duration
  setTimeout(function () {
    overlay.style.display = "none";
    modal.style.display = "none";
  }, duration);
}

function playAgain() {
  setTimeout(() => {
    const playAgain = confirm("Do you want to play again?");
    if (playAgain) {
      resetGame();
    }
    else{
      window.close();
    }
  }, 2000);
}



// Computer picking randomly function
function computerPlay(){
  const choices = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * choices.length);
  const compPick = choices[compChoice];
  if (compPick == "rock"){
    const existingImage = compPlaceholder.querySelector('img');
    if (existingImage) {
      compPlaceholder.removeChild(existingImage);
    }
    const clonedRock = rockImage.cloneNode(true);
    compPlaceholder.appendChild(clonedRock);
  } else if(compPick == "paper"){
    const existingImage = compPlaceholder.querySelector('img');
    if (existingImage) {
      compPlaceholder.removeChild(existingImage);
    }
    const clonedPaper = paperImage.cloneNode(true);
    compPlaceholder.appendChild(clonedPaper);
  } else if(compPick == "scissors"){
    const existingImage = compPlaceholder.querySelector('img');
    if (existingImage) {
      compPlaceholder.removeChild(existingImage);
    }
    const clonedScissors = scissorsImage.cloneNode(true);
    compPlaceholder.appendChild(clonedScissors);
  }
  return compPick
}

// Playing one round of game
function playRound(playerSelection, computerSelection) { 
  if (playerSelection === computerSelection) {
    round++;
    roundDisplay.textContent = `Round ${round}`;
    showNotification('Pick again, you picked the same as the computer.','images/tie.png',2000)
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    round++;
    userScoreDisplay.textContent =  `Player: ${playerScore}`;
    roundDisplay.textContent = `Round ${round}`;
  } else {
    computerScore++;
    round++;
    compScoreDisplay.textContent =  `Computer: ${computerScore}`;
    roundDisplay.textContent = `Round ${round}`;  
  }
  if (playerScore == 5 || computerScore == 5) {
    // Stop game
    if (playerScore > computerScore) {
      const winImages = ['images/winDid.png', 'images/winnerThere.jpg', 'images/bringWin.jpg'];
      const winImage = winImages[Math.floor(Math.random() * winImages.length)];
      showNotification( 'You win!',winImage, 3000);
      playAgain();
    }
    else if (computerScore > playerScore) {
      const loseImages = ['images/loseSir.png', 'images/lostElmo.jpg', 'images/lostRobot.jpg'];
      const loseImage = loseImages[Math.floor(Math.random() * loseImages.length)];
      showNotification('You lose.' ,loseImage, 3000);
      playAgain(); 
    }
  }    
}


// Reset Game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  userScoreDisplay.textContent = 'Player: 0';
  compScoreDisplay.textContent = 'Computer: 0';
  roundDisplay.textContent = 'Round';
  const existingCompImage = compPlaceholder.querySelector('img');
  const existingImage = userPlaceholder.querySelector('img');
  userPlaceholder.removeChild(existingImage);
  compPlaceholder.removeChild(existingCompImage);
}

rock.addEventListener('click', 
function() {

  const playerSelection = 'rock';
  const existingImage = userPlaceholder.querySelector('img');
  if (existingImage) {
    userPlaceholder.removeChild(existingImage);
  }
  const clonedRock = rockImage.cloneNode(true);
  userPlaceholder.appendChild(clonedRock);

  const computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection)
  //return playerSelection;
});


paper.addEventListener('click', 
function() {
  const playerSelection = 'paper';

  const existingImage = userPlaceholder.querySelector('img');
  if (existingImage) {
    userPlaceholder.removeChild(existingImage);
  }
  const clonedPaper = paperImage.cloneNode(true);
  userPlaceholder.appendChild(clonedPaper);

  const computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection)
  //return playerSelection;
});


scissors.addEventListener('click', 
function() {
  
  const playerSelection = 'scissors';

  const existingImage = userPlaceholder.querySelector('img');
  if (existingImage) {
    userPlaceholder.removeChild(existingImage);
  }
  const clonedScissors = scissorsImage.cloneNode(true);
  userPlaceholder.appendChild(clonedScissors);

  const computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection)
  //return playerSelection;
});