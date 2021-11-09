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
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Its a Draw! Play Again'
    }
    //scissors choice
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! scissors beats Paper";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Its a Draw! Play Again'
    } else {
        return "Something Went Wrong"
    }
}

function game() {
    let userScore = 0
    let computerScore = 0
    for (let i = 1; i < 6; i++) {
        let roundResult = playRound(computerPlay(), userChoice());
            if (roundResult == "You win! Rock beats Scissors" || roundResult == "You Win! Paper beats Rock" || roundResult == "You win! scissors beats Paper") {
                userScore++;
                console.log(roundResult);
            } else if (roundResult == "You lose! Paper beats Rock" || roundResult == 'You lose! Scissors beats Paper' || roundResult == 'You lose! Rock beats Scissors') {
                computerScore++;
                console.log(roundResult);
            }  else 
                console.log(roundResult);  
    }
    if (userScore > computerScore) {
        return ("You win! You beat the computer by a score of" + userScore + " to" + computerScore);
            }
    if (userScore < computerScore) {
        return ("You lose! The computer beat you by a score of " + computerScore + " to " + userScore);
            }         
    if (userScore = computerScore) {
        return ("Its a Draw, you both scored " + userScore)
            }
    }

console.log(game())