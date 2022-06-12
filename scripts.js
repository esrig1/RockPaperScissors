let compInput = "";
let playerInput = "";
function computerPlay() {
    let rand = Math.random(2);
    switch(rand) {
        case 0:
            compInput = "ROCK";
            break;
        case 1: 
            compInput = "PAPER";
            break;
        case 2:
            compInput = "SCISSORS";
            break;
    }
}

function userInput() {
    return (prompt("Enter Rock, Paper, or Scissors (not case sensitive)")).toUpperCase;
}
/**
 * 
 * @param {userInput} userInput a string "ROCK", "PAPER", or "SCISSORS"
 * @param {compInput} compInput a string "ROCK", "PAPER", or "SCISSORS"
 * @returns 0 if a tie occurs, 1 for a player win, 2 for a computer win
 */
function executeGame(playerInput, compInput) {
    if(compInput == userInput) {
        return 0;
    }
    if(compInput == "ROCK") {
        if(playerInput == "PAPER") 
            return 1;
        if(playerInput == "SCISSORS")
            return 2;   
    }
    if(compInput == "PAPER") {
        if(playerInput == "ROCK") 
            return 2;
        if(playerInput == "SCISSORS")
            return 1;   
    }
    if(compInput == "SCISSORS") {
        if(playerInput == "PAPER") 
            return 1;
        if(playerInput == "SCISSORS")
            return 2;   
    }


}
let playerWinCount = 0;
let compWinCount = 0;
for(let i = 0; i < 5; i++) {
    compInput = "ROCK";
    playerInput = userInput();
    let gameResult = executeGame(compInput, playerInput);
    if(gameResult == 0) {
        alert("Tie! Score is Player: " + playerWinCount + "\tComputer: " + compWinCount);
    }
    if(gameResult == 1) {
        alert("Player Wins! Score is Player: " + playerWinCount + "\tComputer: " + compWinCount);
    }
    if(gameResult == 1) {
        alert("Computer Wins! Score is Player: " + playerWinCount + "\tComputer: " + compWinCount);
    }
    alert("error! Score is Player: " + playerWinCount + "\tComputer: " + compWinCount);
}