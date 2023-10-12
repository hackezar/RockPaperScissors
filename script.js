//How many games you would like to play?
let gameLimit = 5;
//

let playerChoice = "";
let computerChoice = "";
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;
//Randomly select rock, paper, or scissors for the computer
function getComputerChoice() {
    //Below will randomly select 0, 1, or 2
     num = Math.floor(Math.random() * 3);
     //Below will select rock, paper, or
     //scissors based on what number is selected.
     switch (num) {
        case 0:
            computerChoice = "Rock";
            return computerChoice;
        case 1:
            computerChoice = "Paper";
            return computerChoice;
        case 2:
            computerChoice = "Scissors";
            return computerChoice;
        default:
            console.log("Error!!!");
     }
     return computerChoice;
}
//get input from player to choose rock paper or scissors
function getPlayerChoice() {
    playerChoice = prompt("Make your pick! (Rock, Paper, or Scissors)");
    playerChoice = playerChoice.toLowerCase();

    if ( playerChoice == "rock" || playerChoice.charAt(0) == "r") {
        playerChoice = "Rock";
    } else if ( playerChoice == "paper" || playerChoice.charAt(0) == "p") {
        playerChoice = "Paper";
    } else if ( playerChoice == "scissors" || playerChoice.charAt(0) == "s") {
        playerChoice = "Scissors";
    } else {
        alert("Error. You did not enter rock, paper, or scissors");
        getPlayerChoice();
    }
    return playerChoice;
}

//see who wins in the game
function playRound(playerChoice, computerChoice) {
    if ( playerChoice == computerChoice) {
        return "Its a Tie!";
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "You Lose! Paper covers Rock!";
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "You Win! Rock crushes Scissors!";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "You Win! Paper covers Rock!";
    } else if ( playerChoice == "Paper" && computerChoice == "Scissors" ) {
        return "You Lose! Scissors cuts Paper! Suck it!"
    } else if ( playerChoice == "Scissors" && computerChoice == "Paper") {
        return "You Win! Scissors cuts Paper";
    } else if ( playerChoice == "Scissors" && computerChoice == "Rock" ) {
        return "You Lose! Rock smashes Scissors!";
    }
}

function game() {

    getComputerChoice();
    getPlayerChoice();
    console.log("The Computer Picks " + computerChoice);

    console.log(playRound(playerChoice, computerChoice))
    if ( playRound(playerChoice, computerChoice).charAt(4) == "L") {
        gamesPlayed++;
        gamesLost++;
        console.log("Wins-Losses-Ties: " + gamesWon + "-" + gamesLost + "-" + gamesTied + " Games played: " + gamesPlayed);
        if ( gamesPlayed < gameLimit ) {
            game();
        }
    } else if ( playRound(playerChoice, computerChoice).charAt(4) == "W" ) {
        gamesPlayed++;
        gamesWon++;
        console.log("Wins-Losses-Ties: " + gamesWon + "-" + gamesLost + "-" + gamesTied + " Games played: " + gamesPlayed);
        if ( gamesPlayed < gameLimit ) {
            game();
        }
    } else if ( playRound(playerChoice, computerChoice).charAt(6) == "T" ) {
        gamesTied++;
        gamesPlayed++;
        console.log("Wins-Losses-Ties: " + gamesWon + "-" + gamesLost + "-" + gamesTied + " Games played: " + gamesPlayed);
        if ( gamesPlayed < gameLimit ) {
            game();
        }
    }
}

game();
