// Hello world

function getComputerChoice() {

    /* The computer will choose randomly rock, paper, or scissors */
    const master_rnd    = Math.random();
    const master_rnd3   = (master_rnd * 3)+1;
    const master_choice = Math.floor(master_rnd3);

    switch(master_choice) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            console.log('WHY ARE WE GOING BY DEFAULT?');
            return 'cheat';
            break;
    }

}

function validateSelection (selection) {

    if ((selection !== null && selection !== undefined && isNaN(selection) === true) &&
        (selection.toLowerCase() == 'rock'        || selection.toLowerCase() == 'paper' ||  
         selection.toLowerCase() == 'scissors'    || selection.toLowerCase() == 'cheat')) {
        return true;
    }   
    else {
        return false;
    } 
    
}

function whoWillWin(playerSelection, computerSelection) { 

    if ( (validateSelection(playerSelection)      == true) &&
         (validateSelection(computerSelection)    == true) ) {

        const playerChoice      = playerSelection.toLowerCase();
        const computerChoice    = computerSelection.toLowerCase();  
        let winner;

        if (playerChoice == 'rock' && computerChoice == 'paper') {
            winner = 'computer';
        }
        else if (playerChoice == 'rock' && computerChoice == 'scissors') {
            winner = 'player';
        }
        else if (playerChoice == 'paper' && computerChoice == 'scissors') {
            winner = 'computer';     
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock') {
            winner = 'player';
        }
        else if (playerChoice == 'scissors' && computerChoice == 'rock') {
            winner = 'computer';
        }
        else if (playerChoice == 'scissors' && computerChoice == 'paper') {
            winner = 'player';
        }
        else if (playerChoice === computerChoice) {
            winner = 'tie';
        }


        return winner;
    }
    else {
        alert('THE PROGRAM HAS BEEN BROKEN, RUN AWAY, LITTLE GIRL, RUN AWAY!');
    }

    return 'cheater';
       
} 

function game() {

    /* We gonna ask the human to input what he's gonna play */
    const playerSelection = prompt('Hey, puny human, what is gonna be, rock, paper, or scissors?');
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    const winnerWinnerChickenDinner = whoWillWin(playerSelection, computerSelection);

    switch (winnerWinnerChickenDinner) {
        case 'player':
            console.log('Wow! You Win! '+ playerSelection +' won against '+ computerSelection);
            break;
        case 'computer':
            console.log('Haha! You lose! '+playerSelection+' lost against '+ computerSelection);
            break;
        case 'tie':
            console.log('It was a TIE! Someone bring the X-Wings! '+playerSelection+' tied against '+ computerSelection);
            break;
        default: 
            console.log('wtf has just happened?'+playerSelection+' wtfucked '+ computerSelection); 
            break;
    }   

    return winnerWinnerChickenDinner;
    


}

function janken() {

    let playerWins      = 0;
    let computerWins    = 0;
    let ties            = 0;
    let extrangeValues  = 0;
    let roundResult     = 0;

    for (let i=0;i<5;i++) {
        roundResult = game();

        switch (roundResult) {
            case 'player':
                playerWins++;              
                break;
            case 'computer':
                computerWins++;
                break;
            case 'tie':
                ties++;
                break;
            default: 
                extrangeValues++;
                break;
        } 
    }

    console.log('FINAL RESULTS');
    console.log('IN THE BLUE CORNER, THE HUMAN, WITH AN SCORE OF ' + playerWins);
    console.log('IN THE RED CORNER, THE INCREDIBLE MACHINE, WITH AN OUSTANDING SCORE OF ' + computerWins);
    console.log('IN THE BUG CORNER, INEXPLICABLY, WE HAVE A TOTAL AMOUNT OF ' + extrangeValues);
    console.log('BOTH HUMAN AND MACHINE HAVE TIED  ' + ties +' TIMES');


    if (playerWins > Math.max(computerWins, extrangeValues, ties) ) {
        console.log('THE HUMAN, SOMEHOW, MANAGED TO WIN');
    }
    else if (computerWins > Math.max(playerWins, extrangeValues, ties) ) {
        console.log('THE MACHINE OF COURSE WON THE GAME');
    }
    else if (ties > Math.max(playerWins, extrangeValues, computerWins) ) {
        console.log('THE REFEREE HAS WON, NEITHER THE MACHINE NOR THE HUMAN DESERVE THE VICTORY');
    }
    else if (extrangeValues > Math.max(playerWins, ties, computerWins) ) {
        console.log('THE BUGS HAVE WON, WHY, HOW, IT DOESN\'T MATTER, THE BUG IS ALLMIGHTY');
    }
    else if (playerWins == computerWins) {
        console.log('THE REFEREE HAS WON, NEITHER THE MACHINE NOR THE HUMAN DESERVE THE VICTORY');
    }
    else {
        console.log('I don\'t know how I reached here');
    }
 
}



