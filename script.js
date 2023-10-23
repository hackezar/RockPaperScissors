let playerChoice = "";
let computerChoice = "";
let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost = 0;
let gamesTied = 0;
let username = '';
let gameLimit = 0;

let startDiv = document.querySelector('#startMenu');
let nameIpt = document.querySelector('#nameInput');
let numGamesIpt = document.querySelector('#numberOfGames');
let playerName = document.querySelector("#playerName");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const roundNumber = document.querySelector("#roundNumber");
const gameDOM = document.querySelector("#gameDOM");
const otherThanScoreboard = document.querySelector("#otherThanScoreboard");
const results = document.querySelector("#results");
//the script below is for the start menu

let startBtn = document.querySelector('#startButton');
startBtn.addEventListener('click', function() {

    gamesPlayed = 0;
    gamesWon = 0;
    gamesLost = 0;
    username=nameIpt.value;
    gameLimit = numGamesIpt.value;
    if ( username =="") {
        alert("Please Enter a your name");
        return;
    } else if (gameLimit == 0){
        alert("Please enter how many games you would like to play.")
        return;
    }
    startDiv.style.display = 'none';
    playerName.textContent = username;
    document.querySelector('#computerName').textContent = "Computer";
    playerScore.textContent = `Wins: ${gamesWon}`;
    computerScore.textContent = `Wins: ${gamesLost}`;
    roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
    gameDOM.style.display = 'flex';
    otherThanScoreboard.style.display = 'flex';
    results.style.display="none";
    return username, gameLimit;
});

//The script below is for the game



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
    const rockBtn = document.querySelector("#rockButton");
    const paperBtn = document.querySelector("#paperButton");
    const scissorsBtn = document.querySelector("#scissorsButton")

    const playerChoiceDiv = document.querySelector("#userChoice");
    const computerChoiceDiv = document.querySelector("#computerChoice");
    const userPara = document.querySelector("#playerSelects");
    const computerPara = document.querySelector("#computerSelects");

    rockBtn.addEventListener('click', function() {
        playerChoice = "Rock";
        userPara.textContent = `${username} chooses ${playerChoice}.`
        getComputerChoice();
        computerPara.textContent = `The Computer selects ${computerChoice}.`;
        playRound(playerChoice, computerChoice);
    });

    paperBtn.addEventListener('click', function() {
        playerChoice = "Paper";
        userPara.textContent = `${username} chooses ${playerChoice}.`
        getComputerChoice();
        computerPara.textContent = `The Computer selects ${computerChoice}.`;
        playRound(playerChoice, computerChoice);
    });

    scissorsBtn.addEventListener('click', function() {
        playerChoice = "Scissors";
        userPara.textContent = `${username} chooses ${playerChoice}.`
        getComputerChoice();
        computerPara.textContent = `The Computer selects ${computerChoice}.`;
        playRound(playerChoice, computerChoice);
    });

    


//see who wins in the game
function playRound(playerChoice, computerChoice) {
    results.style.display = 'flex';
    const decisionDiv = document.querySelector("#decisionDiv");
    const decisionText = document.querySelector("#decisionText");
    if ( playerChoice === computerChoice) {
        decisionText.textContent = "Its a Tie!";
        gamesPlayed++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        
        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);

        }
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        decisionText.textContent = "You Lose! Paper covers Rock!";
        gamesPlayed++;
        gamesLost++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        computerScore.textContent = `Wins: ${gamesLost}`;

        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);

        }
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        decisionText.textContent = "You Win! Rock crushes Scissors!";
        gamesPlayed++;
        gamesWon++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        playerScore.textContent = `Wins: ${gamesWon}`;

        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);

        }
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        decisionText.textContent = "You Win! Paper covers Rock!";
        gamesPlayed++;
        gamesWon++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        playerScore.textContent = `Wins: ${gamesWon}`;

        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);

        }
    } else if ( playerChoice == "Paper" && computerChoice == "Scissors" ) {
        decisionText.textContent = "You Lose! Scissors cuts Paper! Suck it!"
        gamesPlayed++;
        gamesLost++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        computerScore.textContent = `Wins: ${gamesLost}`;

        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);

        }
    } else if ( playerChoice == "Scissors" && computerChoice == "Paper") {
        decisionText.textContent = "You Win! Scissors cuts Paper";
        gamesPlayed++;
        gamesWon++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        playerScore.textContent = `Wins: ${gamesWon}`;

        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);
        }

    } else if ( playerChoice == "Scissors" && computerChoice == "Rock" ) {
        decisionText.textContent = "You Lose! Rock smashes Scissors!";
        gamesPlayed++;
        gamesLost++;
        roundNumber.textContent = `Round: ${gamesPlayed}/${gameLimit}`;
        computerScore.textContent = `Wins: ${gamesLost}`;

        if (gamesPlayed == gameLimit) {
            gameOver(gamesWon, gamesLost);
        }

    }
}

//Function for when the game ends
function gameOver(gamesWon, gamesLost) {
    const declareWinner = document.createElement('p');
    const menuBtn = document.createElement('button')
    const gameOverImg = document.createElement('img');
    gameOverImg.setAttribute('id', 'gameOverImg');
    menuBtn.setAttribute('id', 'menuBtn')
    menuBtn.textContent='Main Menu';
    menuBtn.addEventListener('click', () => {
        startDiv.style.display='flex';
        gameDOM.style.display='none';
        declareWinner.remove();
        menuBtn.remove();
        gameOverImg.remove();
    });

    document.body.appendChild(menuBtn);


    otherThanScoreboard.style.display = 'none';
    if (gamesWon > gamesLost) {

        declareWinner.textContent = "Congratulations! You Won! I am so proud of you!";
        document.body.appendChild(declareWinner);
        gameOverImg.setAttribute('src', 'pics/party.png')
        document.body.appendChild(gameOverImg);

    } else if (gamesWon < gamesLost) {
        
        declareWinner.textContent = "Sorry! You lost... to a computer...";
        document.body.appendChild(declareWinner);
        gameOverImg.setAttribute('src', 'pics/loser.png')
        document.body.appendChild(gameOverImg);

    } else if (gamesWon == gamesLost) {

        declareWinner.textContent = "Ooph, close match! It's a draw!";
        document.body.appendChild(declareWinner);

    }
}