let playGame = confirm("Shall we play rock, paper or scissors");

if(playGame) {
    
    while(playGame) {
        const playerChoice = prompt("Please enter rock, paper or scissors.");
        if(playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();

            if(
                playerOne === "rock" ||
                playerOne === "paper"||
                playerOne === "scissors"
                ) {
                    const computerChoice = Math.floor(Math.random() * 3);
                    const rpsArray = ["rock", "paper", "scissors"];
                    const computer = rpsArray[computerChoice];

                    const result = playerOne === computer 
                    ? `PlayerOne : ${playerOne}\nComputer : ${computer}\nTie Game!`
                    : playerOne === "rock" && computer === "scissors"
                    ? `PlayerOne : ${playerOne}\nComputer : ${computer}\nPlayerOne Wins!!`
                    : playerOne === "paper" && computer === "rock"
                    ? `PlayerOne : ${playerOne}\nComputer : ${computer}\nPlayerOne Wins!!`
                    : playerOne === "scissors" && computer === "paper"
                    ? `PlayerOne : ${playerOne}\nComputer : ${computer}\nPlayerOne Wins!!`
                    : `PlayerOne : ${playerOne}\nComputer : ${computer}\nComputer Wins!!`
                    alert(result);
                    playGame = confirm("Play again?");
                    if(!playGame) alert ("Ok, thanks for playing.");
                    continue;
                } else {
                    alert("You didn't enter rock, paper or scissors.");
                    continue;
                }
        } else {
            alert("I guess you changed your mind. Maybe next time.");
        }
   } 
} else {
    alert("Ok, maybe next time.");
}