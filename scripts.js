function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 4);
        if (randomNumber == 1) {
            compChoice = "scissors"; 
        }
        else if (randomNumber == 2) {
            compChoice = "rock";
        }
        else {
            compChoice = "paper";
        }
    return compChoice
}

function userChoice() {
    const choice = prompt("Do you choose Rock, Paper and Scissors?").toLowerCase();
    return choice
}

function playRound(computerSelection, playerSelection) {
    //rock choice
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock";
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Its a Draw! Play Again'
    }
    //paper choice
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "you Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Its a Draw! Play Again'
    }
    //scissors choice
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! ROck beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Its a Draw! Play Again'
    } else {
        return "Something Went Wrong"
    }
}