const myNumber = 25;

console.log(myNumber);

const myFloat = 25.00;

console.log(myFloat);

const myString = "25.22asd";

console.log(myNumber === myFloat);

console.log(myString + 3);

console.log(Number(myString) === myNumber);
console.log(Number("Gojo"));
console.log(Number(true));

console.log(Number.isInteger(myFloat));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(1));
console.log(Number.parseInt(myString));
console.log(typeof myNumber.toString());




