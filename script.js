
function getComputerChoice() {
    
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    // get random index value
    const randomIndex = Math.floor(Math.random() * choiceOptions.length);

    // get random item
    const item = choiceOptions[randomIndex].toLowerCase();

    return item;
}

function playerSelection() {
    let input = prompt("Please make your choice between Rock, Paper or Scissors").toLowerCase()
    return input
}

let computerChoice = null;
let playerChoice = null;

let computerScore = 0;
let playerScore = 0;

function playRound(computerChoice,playerChoice) {

    computerChoice = getComputerChoice();
    playerChoice = playerSelection();
    
    if (computerChoice == "rock" && playerChoice == "scissors") {
        computerScore++;
        return "You Lose! Rock beats Scissors"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        playerScore++;
        return "You Win! Rock beats Scissors"
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        playerScore++;
        return "You Win! Paper beats Rock"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        computerScore++;
        return "You Lose! Paper beats Rock"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        computerScore++;
        return "You Lose! Scissors beats Paper"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        playerScore++;
        return "You Win! Scissors beats Paper"
    } else {
        return "It is a draw!"
    }
}

function game() {
    for (let i = 0; i < 4; i++) {
        playRound(computerChoice,playerChoice)
        console.log(computerScore)
        console.log(playerScore)
    }

    if (computerScore > playerScore) {
        return "You lose!"
    } else {
        return "You won!"
    }
}

alert(game())