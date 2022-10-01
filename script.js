const buttons = document.querySelectorAll("div.buttons > button");
const container = document.querySelector("body");
const score = document.createElement("div");
score.style.display = "flex";
score.style.justifyContent = "space-around";
score.style.fontSize = "20px";
score.style.backgroundColor = "green";
score.style.fontWeight ="Bold";
score.style.color = "white";
score.classList.add("scores");
const user = document.createElement("div");
const computer = document.createElement("div");
user.classList.add("user");
computer.classList.add("computer");
user.textContent = "User: 0";
computer.textContent = "Computer: 0";
score.appendChild(user);
score.appendChild(computer);
container.appendChild(score);


let timesPlayed = 0;

buttons.forEach((button) => {

    button.addEventListener('click', () =>{
        play(button.textContent);
    });
});

function play(string){
    game(string, ++timesPlayed);


}




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if(randomNumber == 1){
        return "Rock";
    }
    else if(randomNumber == 2){
        return "Paper";
    }
    else if(randomNumber == 3){
        return "Scissors";
    }
    

}

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);
    //let playerSelection = prompt("Enter either Rock, Paper, Scissors:");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log("User: " + playerSelection);
    if(playerSelection == "Rock"){
        if(computerSelection == "Rock"){
            return "Its a tie";
        }
        else if(computerSelection == "Scissors"){
            return "You Win! - Rock beats Scissors";
        }
        else{
            return "You Lose! - Paper beats Rock";
        }

    }
    else if(playerSelection == "Paper"){
        if(computerSelection == "Paper"){
            return "Its a tie";
        }
        else if(computerSelection == "Rock"){
            return "You Win! - Paper beats Rock";
        }
        else{
            return "You Lose! - Scissors beats Paper";
        }
    }
    else if(playerSelection == "Scissors"){
        if(computerSelection == "Scissors"){
            return "Its a tie!";
        }
        else if(computerSelection == "Paper"){
            return "You Win! - Scissors beats Paper";
        }
        else{
            return "You Lose! - Rock beats Scissors";
        }
    }

    

}

let userScore = 0;
let computerScore = 0;

function game(playerSelection, timesPlayed){

    playerScore = playRound(playerSelection)
    console.log(playerScore);
    if (playerScore.slice(0,7) == "You Win"){
        userScore++;
        user.textContent = "User: " + userScore;

    }
    else if (playerScore.slice(0,8) == "You Lose"){
        computerScore++;
        computer.textContent = "Computer: " + computerScore;
    }

    if(timesPlayed == 5){
        endGame(userScore, computerScore);
    }
}

function endGame(userScore, computerScore){
    if(userScore > computerScore){
        console.log("You win the game");
    }
    else if(userScore < computerScore){
        console.log("Computer wins the game");
    }
    console.log("You: " + userScore + " Computer: " + computerScore);
}
