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

function playRound(){
    let computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);
    let playerSelection = prompt("Enter either Rock, Paper, Scissors:");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelection);
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

function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i =0; i < 5; i++){
        score = playRound()
        console.log(score);
        if (score.slice(0,7) == "You Win"){
            userScore++;
        }
        else if (score.slice(0,8) == "You Lose"){
            computerScore++;
        }
    }
    if(userScore > computerScore){
        console.log("You win the game");
    }
    else if(userScore < computerScore){
        console.log("Computer wins the game");
    }
    console.log("You: " + userScore + " Computer: " + computerScore);
}

game();
