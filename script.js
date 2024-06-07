const choices= ['rock','paper','scissors'];
let computerScore= +document.getElementById('#computer-score');
let playerscore= +document.getElementById('#player-score');
const result = document.getElementById('result');



function getComputerChoice() {

    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}



function getResult(playerChoice, computerChoice){
    let score=0

            if (playerChoice==computerChoice){
                score=0;
            }
            else if (computerChoice=='rock' && playerChoice=='paper'){
                    score=1;
            }
            
            else if (computerChoice=='scissors' && playerChoice=='rock'){
                score=1;
            }
            else if (computerChoice=='paper' && playerChoice=='scissors'){
                score=1;
            }
            else {
                score=-1;
            }

    return score;
}

function showScore(score){
    if(score==1){
        playerscore+=1;
        computerScore+=0;
        document.getElementById('player-score').innerHTML=playerscore;
    }
    else if(score==-1){
        computerScore+=1;
        playerscore+=0;
        document.getElementById('computer-score').innerHTML=computerScore;
    }
    else{
        playerscore+=0;
        computerScore+=0;
    }
}



function playGame(playerChoice){
    const computerChoice = getComputerChoice();
    console.log({playerChoice});
    console.log({computerChoice});
    const score = getResult(playerChoice, computerChoice);
    switch(score){
    case 0:
        result.innerHTML=" RESULT : It's Tie";
        showScore(score);
        break;
    case 1:
        result.innerHTML="RESULT : You win";
        showScore(score);
        break;
    case -1:
        result.innerHTML="RESULT : You lose";
        showScore(score);
        break;
    default:
        result.innerHTML="Something went wrong";
        break;
    }
}

function endGame(){
    document.getElementById('player-score').innerHTML=0;
    document.getElementById('computer-score').innerHTML=0;

}
    




