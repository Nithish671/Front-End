/* var x = 6;
var x = 25;

let y = 6;
y = 25;

const z = 25;

console.log(x);
console.log(y);
console.log(z); */

/* var x = 1;
let y = 2;
//const z = 3;

myFunc();


function myFunc() {
    const z = 5;
    console.log(y);

    if (true){
        let y = 25;
        console.log(z);
    }
    
}
 */

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 25;
    const z = 10;
{
    var x = 11; // function scope
    const z = 6; // block scope
console.log(`block: ${x}`);
console.log(`block: ${y}`);
console.log(`block: ${z}`);
}

console.log(`function: ${x}`);
console.log(`function: ${y}`);
console.log(`function: ${z}`);
}

myFunc();
