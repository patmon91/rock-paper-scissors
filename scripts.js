function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 4);
        if (randomNumber == 1) {
            compChoice = "Scissors"; 
        }
        else if (randomNumber == 2) {
            compChoice = "Rock";
        }
        else {
            compChoice = "Paper";
        }
    return compChoice
}

console.log(computerPlay())