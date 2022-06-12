let compInput = null;
let playerInput = null;
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
    return toUpperCase(prompt("Enter Rock, Paper, or Scissors (not case sensitive)"));
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

for(let i = 0; i < 5; i++) {
    compInput = computerPlay();
    playerInput = userInput();
    console.log(executeGame(playerInput, compInput));
}