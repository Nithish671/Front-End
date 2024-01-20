/* function sum(num1, num2) {
    if(num2 === undefined) {
        return num1 + num1;      
    }
    return num1 + num2;
}

console.log(sum(25, 6)); */

/* function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@GitHub.com"));

const getUserNameFromEmail1 = function (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail1("RoronoaZoro@gmail.com"));

const getUserNameFromEmail2 = (email) => {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail2("Luffy@gmail.com")); */

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("roronoa Zoro"))