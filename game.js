const results = document.querySelector(".results");

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
        results.innerHTML = ("You lose, " + computerSelection + " beats " + playerSelection);
        return "lose"
    }
    else if(playerSelection == computerSelection){
        results.innerHTML = ("You tied! You both selected " + playerSelection);
        return "tie"
    }
    else{
        results.innerHTML = ("You win! " + playerSelection + " beats " + computerSelection);
        return "win"
    }
}



let elements = document.querySelectorAll(".selection");
let wins = 0;
let losses = 0;
    
let getSelections = (item) => {
    const computerSelection = getComputerChoice();
    let gameResult = playRound(item.target.innerText, computerSelection);
    console.log(gameResult)    
    if (gameResult == "win") wins++;
    else if(gameResult == "lose") losses++;

    results.innerHTML = results.innerHTML + ("<br>Wins: " + wins + ", Losses: " + losses);

    console.log("wins: " + wins);
    console.log("losses " + losses);

    if(wins == 3) {
        results.innerHTML = ("You win, good job!");
        console.log("YOU WIN");
        wins = 0;
        losses =0;
    }
    else if(losses ==3) {
        results.innerHTML = ("You lost...");
        console.log("YOU LOSE");
        wins = 0;
        losses = 0;
    }
}   

elements.forEach((item) => {
    item.addEventListener('click', getSelections)
});   





