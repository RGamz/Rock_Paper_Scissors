function getComputerChoice() {
    
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    // get random index value
    const randomIndex = Math.floor(Math.random() * choiceOptions.length);

    // get random item
    const item = choiceOptions[randomIndex].toLowerCase();

    return item;
}

let computerChoice = null;
let playerChoice = null;

let computerScore = 0;
let playerScore = 0;


let playerSelection;

function playRound(computerChoice,playerChoice) {

    computerChoice = getComputerChoice();
    playerChoice = playerSelection;
   
    if (computerChoice == "rock" && playerChoice == "scissors") {
        roundResult.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
        compScore.textContent = "Computer: " + computerScore;
        return computerScore;
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        roundResult.textContent = "You Win! Rock beats Scissors";
        playerScore++;
        humanScore.textContent = "Player: " + playerScore;
        return playerScore
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        roundResult.textContent = "You Win! Paper beats Rock";
        playerScore++;
        humanScore.textContent = "Player: " + playerScore;
        return playerScore
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        roundResult.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        compScore.textContent = "Computer: " + computerScore;
        return computerScore
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        roundResult.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
        compScore.textContent = "Computer: " + computerScore;
        return computerScore
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        roundResult.textContent = "You Win! Scissors beats Paper";
        playerScore++;
        humanScore.textContent = "Player: " + playerScore;
        return playerScore++
    } else {
        roundResult.textContent = "It is a draw!";
    }
}

function game() {
    playRound()
    if (computerScore >= 3 || playerScore >= 3) {
        if (computerScore > playerScore) {
            return roundResult.textContent = "You lose!";
        } else {
            return roundResult.textContent = "You won!";
        }
    }
}


const buttons = document.querySelectorAll('button');
const compScore = document.getElementById("computer");
const humanScore = document.getElementById("human");
const roundResult = document.getElementById("result");


buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
      
        playerSelection = e.target.id;

        game()

    });
  });
