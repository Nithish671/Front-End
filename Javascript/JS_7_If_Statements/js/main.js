let soup = "Chicken noodle soup";

let customerIsBanned = false;

let crackers = true;

let reply;

if (customerIsBanned){
    reply = "No soup for you";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers`;
} else {
    reply = "Sorry, we're out of soup";
}

console.log(reply);

let testScore = 45;
let grade;
let collageStudent = 0;

if (testScore >= 90) {
    grade = "S";
} else if (testScore >= 80) {
    grade = "A";
} else if (testScore >= 50) {
    grade = "B";
} else {
    if(collageStudent) {
        grade = "U";
} else {
    grade = "F";
}
}

console.log(grade);

let playerOne = "rock";
let computer = "rock";

if (playerOne === computer) {
    //tie
} else if (playerOne === "rock") {
    if(computer === "paper") {
        //computer wins
    } else {
        //playerOne wins
    }
} else if (playerOne === "paper") {
    if(computer === "scissors") {
        //computer wins
    } else {
        //playerOne wins
    }
} else {
    if(computer === "rock") {
        //computer wins
    } else {
        //playerOne wins
    }
}

    