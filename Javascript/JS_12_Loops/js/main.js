/* let myNumber = 50;
while (myNumber < 50) {
    myNumber += 8;
    console.log(myNumber);
}

let myNumber1 = 1;

do {
    myNumber1++;
    console.log(myNumber1);
} while(myNumber1 < 50);

do {
    console.log(myNumber);
} while (myNumber < 50);
 */

/* let i = 2
for (; i <= 10;) {
    console.log(i);
    i++;
} */

/* for(let i = 0; i <= 10; i++) {
    console.log(i);
}

let name = "Satoru Gojo";
for(let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
} */

let name = "Itachi";
let counter = 0;
let myLetter;
while (counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if(myLetter === "a") break;
    counter++;
}
console.log(counter);