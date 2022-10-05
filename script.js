const buttons = document.querySelectorAll("div.buttons > button");
const container = document.querySelector("body");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const endPrompt = document.createElement("div");
const playAgainSection = document.createElement("div");
const playAgain = document.createElement("button");

playAgainSection.appendChild(playAgain);
playAgain.textContent = "Play Again?";
playAgain.style.fontSize = "40px";
playAgain.style.backgroundColor = "#038C3E";
playAgain.style.margin = "0";
playAgainSection.style.display = "flex";
playAgainSection.style.justifyContent = "center"; 

endPrompt.classList.add("endScreen");
endPrompt.style.display = "flex";
endPrompt.style.justifyContent = "center";
endPrompt.style.fontSize = "40px";
endPrompt.style.color = "white";


let timesPlayed = 0;

buttons.forEach((button) => {

    button.addEventListener('click', () =>{
        play(button.textContent);
    });
});

function play(string){
    game(string, ++timesPlayed);
}

function restart(){
    timesPlayed = 0;
    userScore = 0;
    computerScore = 0;
    user.textContent = "You: " + userScore;
    computer.textContent = "Computer: " + computerScore;
    playAgainSection.remove();
    endPrompt.remove();
    buttons.forEach((button) => {
        button.disabled = false;
    });
}


playAgain.addEventListener('click', () => {
    restart()
})



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
        user.textContent = "You: " + userScore;
        if(userScore == 3){
            endGame(userScore, computerScore);
        }

    }
    else if (playerScore.slice(0,8) == "You Lose"){
        computerScore++;
        computer.textContent = "Computer: " + computerScore;
        if(computerScore == 3){
            endGame(userScore,computerScore);
        }
    }

    if(timesPlayed == 5){
        endGame(userScore, computerScore);
    }
}

function endGame(userScore, computerScore){

    buttons.forEach((button) => {
        button.disabled = true;
    });

    if(userScore > computerScore){
        console.log("You win the game");
        endPrompt.textContent = "You Win The Game"
    }
    else if(userScore < computerScore){
        console.log("Computer wins the game");
        endPrompt.textContent = "You lose!"
    }
    else {
        console.log("Neither win");
        endPrompt.textContent = "It's a tie!"
    }
    console.log("You: " + userScore + " Computer: " + computerScore);
    container.appendChild(endPrompt);
    container.appendChild(playAgainSection);
    
}
