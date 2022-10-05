// Global variables
let playerWeapon    = '';
let computerWeapon  = '';
let playerWins      = 0;
let computerWins    = 0;
let ties            = 0;
let extrangeValues  = 0;
let roundResult     = 0;

// variables DOM
const rock = document.querySelector('.rock img');
const paper = document.querySelector('.paper img');
const scissors = document.querySelector('.scissors img');
const finishHim = document.querySelector('.pushable');
const roundText = document.querySelector('.round-text');
const announcementText = document.querySelector('.announcement-text');
const playerPunctuation = document.querySelector('.player-punctuation');
const computerPunctuation = document.querySelector('.computer-punctuation');
console.log(rock);
console.log(paper);
console.log(scissors);
console.log(finishHim);
console.log(roundText);
console.log(announcementText);
console.log(playerPunctuation);
console.log(computerPunctuation);



// Listeners
rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);
finishHim.addEventListener('click', janken);


function selectRock() {
    console.log('CLICKED ON ROCK');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');
    rock.classList.add('selected');
    playerWeapon = 'rock';
}

function selectPaper() {
    console.log('CLICKED ON PAPER');
    paper.classList.add('selected');
    scissors.classList.remove('selected');
    rock.classList.remove('selected');
    playerWeapon = 'paper';
}

function selectScissors() {
    console.log('CLICKED ON SCISSORS');
    paper.classList.remove('selected');
    scissors.classList.add('selected');
    rock.classList.remove('selected');
    playerWeapon = 'scissors';
}




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

    computerWeapon = getComputerChoice();

    console.log(playerWeapon);
    console.log(computerWeapon);
    const winnerWinnerChickenDinner = whoWillWin(playerWeapon, computerWeapon);
    console.log('victor: ' + winnerWinnerChickenDinner);

    return winnerWinnerChickenDinner;
}

function janken() {
    

    roundResult = game();

    switch (roundResult) {
        case 'player':
            roundText.textContent = 'You blasted that fucking dog haterrr!';
            announcementText.textContent = 'YOU WON THE BOUT';
            playerWins++;              
            playerPunctuation.textContent = playerWins;

            break;
        case 'computer':
            roundText.textContent = 'He\'s STILL MOCKING YOUR DOG FUCKING DO SOMETHING ';
            announcementText.textContent = 'THAT GUY OVER THERE WON THE BOUT';
            computerWins++;
            computerPunctuation.textContent = computerWins;
            break;
        case 'tie':
            roundText.textContent = 'He seems distraught, but, still thinks your doggo is not a good boyo';
            announcementText.textContent = 'IT\'S A TIE';
            ties++;
            break;
        default: 
            roundText.textContent = 'THE D-REAPER IS HERE, COLLECT YOUR DOG AND RUN';
            extrangeValues++;
            break;
    } 
}
    




