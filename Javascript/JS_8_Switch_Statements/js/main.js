switch(Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1);
        break;

        case 2:
            console.log(2);
            break;

            case 3:
                console.log(3);
                break;

                default:
                    console.log("No Match");
}

console.log(Math.random());

let playerOne = "rock";
let computer = "paper";


switch(playerOne) {
    case computer:
        console.log("Tie Game");
        break;

        case "rock":
            if(computer === "paper") {
                console.log("Computer Wins!");
            } else {
                console.log("PlayerOne Wins!");
            }
            break;

            case "paper":
                if(computer === "scissor") {
                    console.log("Computer Wins!");
                } else {
                    console.log("PlayerOne Wins!");
                }
                break;

                case "scissor":
                    if(computer === "rock") {
                        console.log("Computer Wins!");
                    } else {
                        console.log("PlayerOne Wins!");
                    }
                    break;
}