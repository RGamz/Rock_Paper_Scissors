
function getComputerChoice() {
    
    const choiceOptions = ["Rock", "Paper", "Scissors"];
    // get random index value
    const randomIndex = Math.floor(Math.random() * choiceOptions.length);

    // get random item
    const item = choiceOptions[randomIndex].toLowerCase();

    return item;
}


function getPlayerSelection() {
    let input = prompt("Please make your choice between Rock, Paper or Scissors").toLowerCase()
    return input
}


let computerChoice = null;
let playerChoice = null;

let computerScore = 0;
let playerScore = 0;

function playRound(computerChoice,playerChoice) {

    computerChoice = getComputerChoice();
    playerChoice = getPlayerSelection();
    
    if (computerChoice == "rock" && playerChoice == "scissors") {
        console.log("You Lose! Rock beats Scissors")
        return computerScore++;
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        console.log("You Win! Rock beats Scissors")
        return playerScore++;
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        console.log("You Win! Paper beats Rock")
        return playerScore++;
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        console.log("You Lose! Paper beats Rock")
        return computerScore++;
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        console.log("You Lose! Scissors beats Paper")
        return computerScore++;
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        console.log("You Win! Scissors beats Paper")
        return playerScore++;
    } else {
        console.log("It is a draw!")
    }
}

function game() {
    while (true ) {
        playRound()
        console.log("Comp: " + computerScore)
        console.log("Player: " + playerScore)

        if (computerScore >= 3 || playerScore >= 3) {
            break; 
        }
    }

    if (computerScore > playerScore) {
        return "You lose!"
    } else {
        return "You won!"
    }
}

alert(game())