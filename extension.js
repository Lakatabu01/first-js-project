
let computerWins = "Too bad, you lose this round"
let humanWins = "You win this round!"
let drawRound = "Tie game"

let computerScore = 0;
let humanScore = 0;
let draw = 0;

// This functon enables the computer pick a sign
function computerPlay() {
    let comp = Math.floor(Math.random() * 3)
    if (comp == 2) {
        return "rock"
    } else if (comp == 1) {
        return "paper"
    } else {
        return "scissors"
    }
} 



// This function defines a single round of the game
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return drawRound
    } else if (playerSelection === "rock" && computerSelection == "paper") {
        return computerWins
    } else if (playerSelection === "paper" && computerSelection == "scissors") {
        return computerWins
    } else if (playerSelection === "scissors" && computerSelection == "rock") {
        return computerWins
    } else if (playerSelection === "scissors" && computerSelection == "paper") {
        return humanWins
    } else if (playerSelection === "paper" && computerSelection == "rock"){
        return humanWins
    } else if (playerSelection === "rock" && computerSelection == "scissors") {
        return humanWins 
    } else {
        return computerWins
    }
} 

let piece = round()
// still battling with this function, but we gon conquer on God!
function decider(){
    if (piece == computerWins){
      return  computerScore++
    } else if (piece == humanWins){
      return  humanScore++
    } else  {
     return  draw++
    }
} 


function game() {
    const playerSelection = prompt("Choose your preferred symbol. Rock, Paper or scissors?", "");
    const computerSelection = computerPlay();
    decider()
   console.log(round(playerSelection, computerSelection));
}
function finali(){
for (let i = 0; i < 5; i++){
     game()
}
}

finali()
console.log("Your score :" + humanScore)
console.log("Computer score :" + computerScore)
console.log("draws :" + draw)


