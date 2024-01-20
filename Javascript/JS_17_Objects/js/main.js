const band = {
    vocals : "Robert Plant",
    guitar : "Jimmy Page",
    bass : "John Paul Jones",
    drums : "John Bonham"
};

//const {guitar : myVariable, bass : myBass} = band;

const {vocals, guitar, bass, drums} = band;

console.log(vocals);
console.log(bass);

function sings ({vocals}) {
    return `${vocals} sings!`;
};

console.log(sings(band));

/* delete band.drums;

console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band) {
    console.log(`On ${job}, it's ${band[job]}`); 
} */

/* const vehicle = {
    wheels : 4,
    engine : function() {
        return "Vrrooom";
    }
} */

/* const truck =  Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine()); */

/* const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whoooosh!";
}

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function () {
    return "Shhhhh";
}
console.log(tesla.engine()); */


/* const myObj = {name : "Zoro"};

const anotherObj = {
    alive : true,
    answer : 25,
    hobbies : ["Anime", "Game", "Code"],
    beverage : {
        morning : "Milk",
        afternoon : "Juice"
    },
    action : function() {
        return "Hello World";
    },
    action1 : function() {
        return `Time for ${this.beverage.afternoon}`;
    }
};

console.log(anotherObj.action());
console.log(anotherObj.action1());
console.log(anotherObj.beverage.morning);
console.log(anotherObj["alive"]);
console.log(myObj.name); */