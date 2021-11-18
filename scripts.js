const options = document.querySelectorAll(".button")
options.forEach((option) => {
    option.addEventListener("click", function() {
    const pInput = this.textContent;
    const cInput = computerPlay()
    result = playRound (cInput, pInput)
    const container = document.querySelector('#playerchoice');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = pInput;

playerchoice.appendChild(content)
})
})



function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 4);
        if (randomNumber == 1) {
            compChoice = "SCISSORS"; 
        }
        else if (randomNumber == 2) {
            compChoice = "ROCK";
        }
        else {
            compChoice = "PAPER";
        }
    return compChoice
}


function playRound(computerSelection, playerSelection) {
    //rock choice
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return "You lose! Paper beats Rock";
    } else if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
        return 'Its a Draw! Play Again'
    }
    //paper choice
    if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
        return 'Its a Draw! Play Again'
    }
    //scissors choice
    if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return "You win! scissors beats Paper";
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        return 'Its a Draw! Play Again'
    } else {
        return "Something Went Wrong"
    }
}

// function game() {
//     let userScore = 0
//     let computerScore = 0
//     for (let i = 1; i < 6; i++) {
//         let roundResult = playRound(computerPlay(), userChoice());
//             if (roundResult == "You win! Rock beats Scissors" || roundResult == "You Win! Paper beats Rock" || roundResult == "You win! scissors beats Paper") {
//                 userScore++;
//                 console.log(roundResult);
//             } else if (roundResult == "You lose! Paper beats Rock" || roundResult == 'You lose! Scissors beats Paper' || roundResult == 'You lose! Rock beats Scissors') {
//                 computerScore++;
//                 console.log(roundResult);
//             }  else 
//                 console.log(roundResult);  
//     }
//     if (userScore > computerScore) {
//         return ("You win! You beat the computer by a score of" + userScore + " to" + computerScore);
//             }
//     if (userScore < computerScore) {
//         return ("You lose! The computer beat you by a score of " + computerScore + " to " + userScore);
//             }         
//     if (userScore = computerScore) {
//         return ("Its a Draw, you both scored " + userScore)
//             }
//     }

// console.log(game())