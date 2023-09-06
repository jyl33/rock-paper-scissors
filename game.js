function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return "rock"
    }
    else if (choice == 1){
        return "paper"
    }
    else return "scissors"
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")){
        return ("You lose, " + computerSelection + " beats " + playerSelection)
    }
    else if(playerSelection == computerSelection){
        return ("You tied!")
    }
    else{
        return ("You win!, " + playerSelection + " beats " + computerSelection)
    }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
