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
// function player(){
//    const selection = document.querySelector('.choice');
//    selection.addEventListener('click', () => {
//         return rock;
//    });

// }

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('#result');
    if (playerSelection === "rock" && computerSelection === "paper"){
        result.innerHTML = "You Lose! Paper beats Rock";
        return "l";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        result.innerHTML = "You win! Rock beats Scissors";
        return "w";
    }
    else if (playerSelection === "rock" && computerSelection === "rock"){
        result.innerHTML = "It's a tie!";
        return "t";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result.innerHTML = "You Win! Paper beats Rock";
        return "w";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result.innerHTML = "You Lose! Scissors beats Paper";
        return "l";
    }
    else if (playerSelection === "paper" && computerSelection === "paper"){
        result.innerHTML = "It's a tie!";
        return "t";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result.innerHTML = "You Win! Srissors beats Paper";
        return "w";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result.innerHTML = "You Lose! Rock beats Scissors";
        return "l";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors"){
        result.innerHTML = "It's a tie!";
        return "t";
    }
    else{
        result.innerHTML = "Enter Correctly!";
    }  
    
}

function game(){
    
    
    let pscore = 0, cscore = 0, tie = 0;
        
    const selection = document.querySelectorAll('.choice');
        selection.forEach(button => {

            button.addEventListener('click', (e) => {
            
            const playerSelection = e.target.id;
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
            const resultsP = document.querySelector('#scoreP');
            const resultsT = document.querySelector('#scoreT');

            const resultsC = document.querySelector('#scoreC');

            resultsP.innerHTML = `${pscore}`;
            resultsT.innerHTML = `${tie}`;
            resultsC.innerHTML = `${cscore}`;

           });
            
        });
        
}
game();