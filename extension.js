const choices = ["rock","paper","scissors"]
const winners = []

function game(){
    for (let i = 1; i <= 5; i++) {
        playRound(i)
    }
    logWins()
} 

function playRound(round) {
const playerSelection = playerChoice()
const computerSelection = computerChoice()
const winner = checkWInner(playerSelection, computerSelection)
winners.push(winner)
logRound(playerSelection, computerSelection, winner, round)
}

//Make use of player input 
function playerChoice() {
let input = prompt("Make a choice between rock, paper, or scissors", "")
while (input == null) {
    input = prompt("Make a choice between rock, paper, or scissors", "")
}
input = input.toLowerCase()
let check = validateInput(input)

while (check == false){
  input = prompt("Make sure you input rock, paper or scissors. spelling has to be exact but capitalization doesnt matter"
  )

while (input == null) {
    input = prompt("Make a choice between rock, paper, or scissors", "")
}
input = input.toLowerCase()
check = validateInput(input)
}
return input
}

//This function helps the computer to pick an item out of the choices array
function computerChoice() {
return choices[Math.floor(Math.random()*choices.length)]
}

//This function checks to see if user input rock, paper or scissors
function validateInput(choice){
    return choices.includes(choice)
    }

    function checkWInner(choiceP, choiceC) {
        if (choiceP == choiceC){
            return "Tie"
        } else if ( 
        (choiceP == "rock" && choiceC == "scissors") || 
        (choiceP == "paper" && choiceC == "rock") || 
        (choiceP == "scissors" && choiceC == "paper")
        ){
            return "Player"
        } else {
        return "Computer"
        }
    }

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length
    let computerWins = winners.filter((item) => item == "Computer").length
    let ties = winners.filter((item) => item == "Tie").length
    console.log("Results: ")
    console.log("Player wins: ", playerWins)
    console.log("Computer wins: ", computerWins)
    console.log("Ties: ", ties)
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round)
    console.log("Player selected: ", playerChoice)
    console.log("Computer selected: ", computerChoice)
    if (winner == "Tie") {
        console.log("Tie round")
    } else {
        console.log(winner, " won this round")
    }
    console.log("..................................")
}

game()