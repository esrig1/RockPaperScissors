let compInput = "";
let playerInput = "";
function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    //alert("random is " + rand);
    switch(rand) {
        case 0:
            return "ROCK";
            break;
        case 1: 
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}

function userInput() {
    let temp = prompt("Enter Rock, Paper, or Scissors (not case sensitive)")
    return temp.toUpperCase();
}
/**
 * 
 * @param {userInput} userInput a string "ROCK", "PAPER", or "SCISSORS"
 * @param {compInput} compInput a string "ROCK", "PAPER", or "SCISSORS"
 * @returns 0 if a tie occurs, 1 for a player win, 2 for a computer win
 */
function executeGame(compInput, playerInput) {
    if(compInput == playerInput.toUpperCase()) {
        return 0;
    }
    if(compInput == "ROCK") {
        if(playerInput.toUpperCase() == "PAPER") 
            return 1;
        if(playerInput.toUpperCase() == "SCISSORS")
            return 2;   
    }
    if(compInput == "PAPER") {
        if(playerInput.toUpperCase() == "ROCK") 
            return 2;
        if(playerInput.toUpperCase() == "SCISSORS")
            return 1;   
    }
    if(compInput == "SCISSORS") {
        if(playerInput.toUpperCase() == "PAPER") 
            return 2;
        if(playerInput.toUpperCase() == "ROCK")
            return 1;   
    }


}
let playerWinCount = 0;
let compWinCount = 0;
for(let i = 0; i < 5; i++) {
    compInput = computerPlay();
    playerInput = userInput();
    let gameResult = executeGame(compInput, playerInput);
    alert("The computer chose: " + compInput);
    if(gameResult == 0) {
        alert("Tie! Score is Player: " + playerWinCount + "     Computer: " + compWinCount);
    }
    if(gameResult == 1) {
        playerWinCount++;
        alert("Player Wins! Score is Player: " + playerWinCount + "     Computer: " + compWinCount);
    }
    if(gameResult == 2) {
        compWinCount++;
        alert("Computer Wins! Score is Player: " + playerWinCount + "       Computer: " + compWinCount);
    }
    
}

if(playerWinCount == compWinCount) {
    alert("You tied with " + playerWinCount + "round(s) each!")
}
if(compWinCount > playerWinCount) {
    alert("You lost " + playerWinCount + "-" +compWinCount);
}
if(compWinCount < playerWinCount) {
    alert("You won " + playerWinCount + "-" +compWinCount);
}