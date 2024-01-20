//alert("Hello World");

//confirm("Ok === True\nCancel === False");

//let myBool = confirm("Ok === True\nCancel === False");
//console.log(myBool);

let name = prompt("Please enter your name : ");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
    console.log(name);
} else {
    console.log("You didn't enter your name.");
}
    