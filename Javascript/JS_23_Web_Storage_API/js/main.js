const myObject = {
    name : "Dave",
    hobbies : ["eat", "sleep", "code"],
    logName : function() {
        console.log(this.name);
    }
}

const myArray = ['eat', 'sleep', 'code'];

localStorage.setItem("mylocalStore", JSON.stringify(myArray));
const key = localStorage.key(0);
const storeLength = localStorage.length;
const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));
console.log(mylocalData);

console.log(storeLength);