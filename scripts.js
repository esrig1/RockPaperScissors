function init() {

const consoleText = document.querySelector("h1");
const computerText = document.querySelector("#computer");

consoleText.textContent = "Console Output: Make your selection!";
const button = document.querySelectorAll(".btn");
button.forEach((button) => {
    button.addEventListener('click', () => {
         play(button.id);
    });
});
let playerWinCount = 0;
let compWinCount = 0;
let gameCount = 0;
let computerInput = "";
function play(userInput) {
    computerInput = computerPlay();
    computerText.textContent = "Computer Selected: " + computerInput;
    let gameResult = executeGame(computerInput, userInput);
    if(gameResult == 0) {
        consoleText.textContent = ("Tie! Score is Player: " + playerWinCount + "     Computer: " + compWinCount);
    }
    if(gameResult == 1) {
        playerWinCount++;
        consoleText.textContent = ("Player Wins! Score is Player: " + playerWinCount + "     Computer: " + compWinCount);
    }
    if(gameResult == 2) {
        compWinCount++;
        consoleText.textContent = ("Computer Wins! Score is Player: " + playerWinCount + "       Computer: " + compWinCount);
    }
    setTimeout(() => { consoleText.textContent = "Console Output: Make your selection!" }, 2000);
}

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
/*

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
*/
}