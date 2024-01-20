/* //factory function
function pizzaFactory(pizzaSize) {
   const crust = "original";
   const size = pizzaSize;

   return {
      bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
   };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */


class Pizza {
   crust = "original";
   #sauce = "traditional";
   #size;
   constructor(pizzaSize) {
    this.#size = pizzaSize;
   }
   get pizzaCrust() {
    return this.crust;
   }
   set pizzaCrust(pizzaCrust){
    this.crust = pizzaCrust;
   }

   hereYouGo() {
      console.log(`Here is your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
   } 
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.pizzaCrust);
console.log(myPizza.sauce);
//console.log(myPizza.#sauce);


/* class SpecialtyPizza extends Pizza {
   constructor(pizzaSize) {
      super(pizzaSize);
      this.type = "the Works";
   }
   slice() {
      console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
   }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice(); */

/* const myPizza = new Pizza("pepperoni", "small");
myPizza.type = "supreme";
myPizza.pizzaCrust = "thin";
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
myPizza.bake();
console.log(myPizza.pizzaCrust);
console.log(myPizza.getToppings()); */