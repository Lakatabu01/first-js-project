const choices = ["rock","paper","scissors"]
const winners = []
let playerWin = 0
let computerWin = 0

let btnOne = document.querySelector(".btn-one")
btnOne.addEventListener("click", playRock) 

// Onclick, this function triggers computer selection 
//It records both player and computer score in the parargraph tag
// alerts a winner at the end of five rounds then reloads 
function playRock() {
const playerSelection = "rock"
const computerSelection = computerChoice()
const winner = checkWInner(playerSelection, computerSelection)
winners.push(winner)
if (computerSelection == "scissors"){
    announcer.textContent = "You win! rock beats scissors"
}else if (computerSelection == "paper"){
    announcer.textContent = "You lose! paper beats rock"
} else{ announcer.textContent = "Tie"}

let humanScore = document.querySelector(".human-score")
let computerScore = document.querySelector(".computer-score")

if (winner == "Player"){
    humanScore.textContent = "Player: " + ++playerWin
} else if (winner == "Computer"){
    computerScore.textContent = "Computer: " + ++computerWin
}

if (playerWin === 5 && computerWin < 5) {
    setTimeout(display, 200)
} else if (computerWin === 5 && playerWin < 5){
     setTimeout(displayTwo, 200) 
    }
}

// onclick, the button scales up by addiing the scale class to it
btnOne.addEventListener("click", designOne)

//after some seconds the button reurns to the normal size when the scale class is removed from its class list
btnOne.addEventListener("transitionend", removeTransitionOne)

function removeTransitionOne(e){
    if (e.propertyName !== "transform") return;
    this.classList.remove("scale")
}

function designOne(){
    btnOne.classList.add("scale")
}

// All btnOne comments also apply to this button
let btnTwo = document.querySelector(".btn-two")
btnTwo.addEventListener("click", playPaper) 

function playPaper() {
    const playerSelection = "paper"
    const computerSelection = computerChoice()
    const winner = checkWInner(playerSelection, computerSelection)
    winners.push(winner)
    if (computerSelection == "scissors"){
        announcer.textContent = "You lose! scissors beats paper"
    }else if (computerSelection == "rock"){
        announcer.textContent = "You win! paper beats rock"
    } else{ announcer.textContent = "Tie"}

    let humanScore = document.querySelector(".human-score")
let computerScore = document.querySelector(".computer-score")

if (winner == "Player"){
    humanScore.textContent = "Player: " + ++playerWin
} else if (winner == "Computer"){
    computerScore.textContent = "Computer: " + ++computerWin
}
if (playerWin == 5 && computerWin < 5) {
    setTimeout(display, 200)
} else if (computerWin === 5 && playerWin < 5){
    setTimeout(displayTwo, 200) 
   }
}

// On click, the event listeners below also causes the vutton to scale up and back to its normal size
btnTwo.addEventListener("click", designTwo)
btnTwo.addEventListener("transitionend", removeTransitionTwo)

function removeTransitionTwo(e){
    if (e.propertyName !== "transform") return;
    this.classList.remove("scale")
}

function designTwo(){
    btnTwo.classList.add("scale")
}


// All btnOne comments also apply to this button
let btnThree = document.querySelector(".btn-three")
btnThree.addEventListener("click", playScissors) 

function playScissors() {
    const playerSelection = "scissors"
    const computerSelection = computerChoice()
    const winner = checkWInner(playerSelection, computerSelection)
    winners.push(winner)
    if (computerSelection == "paper"){
        announcer.textContent = "You win! scissors beats paper"
    }else if (computerSelection == "rock"){
        announcer.textContent = "You lose! rock beats scissors"
    } else{ announcer.textContent = "Tie"}

    let humanScore = document.querySelector(".human-score")
let computerScore = document.querySelector(".computer-score")

if (winner == "Player"){
    humanScore.textContent = "Player: " + ++playerWin
} else if (winner == "Computer"){
    computerScore.textContent = "Computer: " + ++computerWin
}

// reloads the browser if user wants to play again and disables the button if user
if (playerWin == 5 && computerWin < 5) {
    setTimeout(display, 200)
} else if (computerWin === 5 && playerWin < 5){
    setTimeout(displayTwo, 200) 
   }
}
// On click, the event listeners below also causes the vutton to scale up and back to its normal size
btnThree.addEventListener("click", designThree)
    btnThree.addEventListener("transitionend", removeTransitionThree)
    
    function removeTransitionThree(e){
        if (e.propertyName !== "transform") return;
        this.classList.remove("scale")
    }
    
    function designThree(){
        btnThree.classList.add("scale")
    }
    

// This is an alert function inserted into the setTimeout() to display scores after five rounds
    function display(){
        alert("Congratulations, you won the game with 5 points!")
        document.location.reload()
    }
    
// This is an alert function inserted into the setTimeout() to display scores after five rounds
    function displayTwo(){
        (alert("Oops you lost, computer has 5 points. Try again"))
        document.location.reload()
    }

// This function dictates the computer choice
    function computerChoice() {
        return choices[Math.floor(Math.random()*choices.length)]
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

    let announcer = document.querySelector(".announcer")


// This button is responsible for reloading/restarting the page mid-game
let btnFour = document.querySelector(".btn-four")
btnFour.addEventListener("click", reload)
function reload(){
    document.location.reload()
}

/*Make use of player input 
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
*/

//This function helps the computer to pick an item out of the choices array

/*
//This function checks to see if user input rock, paper or scissors
function validateInput(choice){
    return choices.includes(choice)
    }
*/

/*
function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length
    let computerWins = winners.filter((item) => item == "Computer").length
    let ties = winners.filter((item) => item == "Tie").length
    console.log("Results: ")
    console.log("Player wins: ", playerWins)
    console.log("Computer wins: ", computerWins)
    console.log("Ties: ", ties)
}
*/


/*
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
*/