const options = document.querySelectorAll(".button")
let pScore = 0
let cScore = 0
options.forEach((option) => {
    option.addEventListener("click", function() {
    const pInput = this.textContent;
    const cInput = computerPlay()
    result = playRound (cInput, pInput)
    const container = document.querySelector('#playerchoice');
    updateSelection(pInput, cInput, result);
    updateScore();
    if (checkWinner(pScore,cScore)) {
        pScore = 0;
        cScore = 0;
        updateScore();  
    }
        
    
  



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
        resultString = "You win! Rock beats Scissors";
        pScore++;
        return resultString
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        resultString = "You lose! Paper beats Rock";
        cScore++;
        return resultString
    } else if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
        resultString ='Its a Draw! Play Again'
        return resultString
    }
    //paper choice
    if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        resultString = "You Win! Paper beats Rock";
        pScore++;
        return resultString
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        resultString = 'You lose! Scissors beats Paper';
        cScore++;
        return resultString
    } else if (playerSelection == 'PAPER' && computerSelection == 'PAPER') {
        resultString = 'Its a Draw! Play Again'
        return resultString
    }
    //scissors choice
    if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        resultString = "You win! scissors beats Paper";
        pScore++;
        return resultString
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        resultString = 'You lose! Rock beats Scissors';
        cScore++;
        return resultString
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        resultString = 'Its a Draw! Play Again';
        return resultString
    } else {
        resultString = "Something Went Wrong";
        return resultString
    }
    
}
function updateScore() {
    document.getElementById("userScore").textContent = pScore
    document.getElementById("computerScore").textContent = cScore
}
    
function updateSelection (pInput, cInput, result) {
    document.getElementById("playerchoice").textContent = 
        "You Chose:\n" + pInput;
    document.getElementById("compchoice").textContent = 
        "Computer\n Chose:\n" + cInput;
    document.getElementById('outcome').textContent = result;
}

function checkWinner(pScore, cScore) {
    if (pScore == 5) {
        return document.getElementById("winner").textContent = 
            "You win! By a score of " + pScore + " to " + cScore
    }
    if (cScore == 5) {
        return document.getElementById("winner").textContent = 
            "You lose! By a score of " + cScore + " to " + pScore
    }
}