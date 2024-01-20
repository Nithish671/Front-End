let soup = "Chicken Noodle Soup";

let response = soup ? "Yes, we have soup!" : "Sorry, no soup today";

console.log(response);

let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? "Yes, we have soup for you!" : "Sorry, no soup today";

console.log(soupAccess);

let testScore = 65;
let myGrade = testScore > 90 
? "S" 
: testScore > 80 
?  "A" 
: testScore > 50 
? "B" 
: "U";

console.log(`My grade is ${myGrade}`);

let playerOne = "scissor";
let computer = "scissor";

let result = playerOne === computer ? 
"Tie Game" 
: playerOne === "rock" && computer === "scissor" 
? "PlayerOne Wins!" 
: playerOne === "paper" && computer === "rock" 
? "PlayerOne Wins!" 
: playerOne === "scissor" && computer === "paper" 
? "PlayerOne Wins!" : "Computer Wins"; 

console.log(result);
