const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);

console.log(clothesShelfB[2]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);

console.log(sportsStore[0][1][1]);
console.log(sportsStore[1][1][2]);
console.log(sportsStore[0][1][2]);
console.log(sportsStore[1][0][1]);


/* const myArrayA = ["A", "B", "C"];
const myArrayB = ["D", "E", "F"];

//const newArray = myArrayB.concat(myArrayA);
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray);

const newArray1 = [myArrayA, myArrayB];
console.log(newArray1); */

/* const myArray = ["A", "B", "C", "D", "E", "F"];

const newArray = myArray.slice(2, 5);

console.log(newArray);

myArray.reverse();

console.log(myArray);

const newString = myArray.join();

const newArray1 = newString.split(",");

console.log(newString);

console.log(newArray1); */


/* const myArray = [];

myArray[0] = "Sasuke";
myArray[1] = 25;
myArray[2] = 6.11;
myArray[3] = true;

myArray.splice(1, 0, 2);

console.log(myArray);
console.log(myArray[2]); */

/* delete myArray[2];
console.log(myArray);
console.log(myArray[2]); */


/* const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[2]); */

/* console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

myArray.push("School");

console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem); */