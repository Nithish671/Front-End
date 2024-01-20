const initGame = () => {
    const startGame = confirm("Shall we play rock, paper or scissors.");
    startGame ? playGame() : alert("ok, Maybe next time.");
};

const playGame = () => {
    while(true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if(playerChoice === "") {
            invalidChoice();
            continue;
        }
        if(!playerChoice) {
            decidedNoToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);

        if(askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const evaluatePlayerChoice = (playerChoice) => {
    if(
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper or scissors.");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner = player === computer
    ? "Tie Game!"
    : player === "rock" && computer === "scissors"
    ? `Player Choice : ${player}\nComputer Choice : ${computer}\nPlayer Wins!`
    : player === "paper" && computer === "rock"
    ? `Player Choice : ${player}\nComputer Choice : ${computer}\nPlayer Wins!`
    : player === "scissors" && computer === "paper"
    ? `Player Choice : ${player}\nComputer Choice : ${computer}\nPlayer Wins!`
    : `Player Choice : ${player}\nComputer Choice : ${computer}\nComputer Wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
}; 

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPlaying = () => {
    alert("Ok, Thanks for playing.");
};

initGame();