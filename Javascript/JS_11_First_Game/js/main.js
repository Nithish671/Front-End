let playGame = confirm("Shall we play rock, paper or scissors");

if(playGame) {
    let playerChoice = prompt("Please enter rock, paper or scissors.");

     if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.ceil(Math.random() * 3 + 0.01);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper" : "scissors";
            
            let result = playerOne === computer ? `Player : ${playerOne} \nComputer : ${computer} \nTie Game!` 
            : playerOne === "rock" && computer === "scissors" 
            ? `Player : ${playerOne} \n Computer : ${computer} \nPlayer Wins!`
            : playerOne === "paper" && computer === "rock" 
            ? `Player : ${playerOne} \n Computer : ${computer} \nPlayer Wins!`
            : playerOne === "scissors" && computer === "paper" 
            ? `Player : ${playerOne} \n Computer : ${computer} \nPlayer Wins!` 
            : `Player : ${playerOne} \n Computer : ${computer} \nComputer Wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Thanks for playing");
        } else {

            alert("You didn't enter rock, paper or scissors.");

        }

     } else {

        alert("I guess you changed your mind, Maybe some other time.");

     }
} else {

    alert("Ok , maybe some other time.");

}