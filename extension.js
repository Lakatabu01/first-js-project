let humanScore = 0;
let computerScore = 0;
let draw = 0;

// variables containing messages to be displayed at the end of each round
let humanWinsRound = "You win this round!";
let computerWinsRound = "you lose, computer wins this round";
let drawRound = "This is a draw";

//function that defines the selection of computer symbol
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 2) {
      return  selection = "rock";
    } else if ( selection === 1) {
       return  selection = "paper"
     } else {
       return selection = "scissors";
    }
}

// function that containins conditional on the outcome of each game round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return drawRound; 
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ) {
        return computerWinsRound
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return computerWinsRound
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return computerWinsRound
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return humanWinsRound
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return humanWinsRound
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return humanWinsRound
    } else{
        return computerWinsRound
    }
}

const computerSelection = computerPlay();
const playerSelection = "rock";

function game() {
    const playerSelection = prompt("Choose your preferred symbol. Rock, Paper or scissors?", "");
    const computerSelection = computerPlay();
    return console.log(playRound(playerSelection, computerSelection));
}
game();

let result = playRound(playerSelection, computerSelection)
  
// allows each round to be repeated five times
for (let index = 0; index < 4; index++) {
    game();
  }
  

  function toy(){
    last();
    fat();
  }
  toy();

  function last(){
     if (result = computerWinsRound){
    return computerScore++
  } else if (result = humanWinsRound){
    return  humanScore++
  } else if (result = drawRound) {
    return draw++
  } 
}
  

function fat() {
    if (computerScore++ > humanScore++) {
        console.log("you lost, computer beat you")
    } else if (humanScore++ > computerScore++){
        console.log("champion, you beat computer")
    }else if (computerScore++ == humanScore++) (
        console.log("It ends in a tie")
    )
}

