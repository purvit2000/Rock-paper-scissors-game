function computerPlay(){
    let a = Math.floor((Math.random() * 3) + 1 );
    let choice;
    switch(a){
        case 1:
            choice = "rock";
            break
        case 2:
            choice = "paper";
            break  
        case 3:
            choice = "scissors";
            break
                
    }
    return choice;
}
function player(){
    let choice = prompt("Enter rock, paper or scissors");
   return choice.toLowerCase(); 
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You Lose! Paper beats Rock");
        return "l";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert("You win! Rock beats Scissors");
        return "w";
    }
    else if (playerSelection === "rock" && computerSelection === "rock"){
        alert("It's a tie!");
        return "t";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        alert("You Win! Paper beats Rock");
        return "w";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert("You Lose! Scissors beats Paper");
        return "l";
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        alert("It's a tie!");
        return "t";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert("You Win! Srissors beats Paper");
        return "w";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert("You Lose! Rock beats Scissors");
        return "l";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        alert("It's a tie!");
        return "t";
    }
    else{
        alert("Enter Correctly!");
        
    }
    
}

function game(){
    let pscore = 0, cscore = 0, tie = 0;
    
    for (let i = 0; i < 5; i++) {
        
        const playerSelection = player();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result === "w"){
            ++pscore;
        }
        else if (result === "l"){
            ++cscore;
        }
        else if (result === "t"){
            ++tie
        }
     }
    alert(`The Score is:-
    Player = ${pscore}
    computer = ${cscore}
    tie = ${tie}`);
}
game();