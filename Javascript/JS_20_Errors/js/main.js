"use strict"
const variable = "Zoro";
//variable = "Roronoa";
console.log(variable);

//Object..create();


const makeError = () => {
   let i = 1;
   while(i <= 5) {
      try {
         if(i % 2 !== 0) {
            throw new Error("Odd number!");
         }
         console.log("Even number!");
      } catch(err) {
         //console.error(err.name);
         //console.error(err.message);
         console.error(err.stack);
      } finally {
         console.log("...finally");
         i++;
      }
   };
   }
   

makeError();



/* const makeError = () => {
   try {
      throw new customError("This is a custom error");
      //const name = "Luffy";
      //name = "Monkey";
   } catch(err) {
      //console.log(err);
      console.error(err.name);
      console.error(err.stack);
      console.error(err.message);
      //logTheError(err.stack);
      //console.error(err);
      //console.warn(err);
      //console.table(err);
   }
}

makeError(); */

/* function customError(message) {
   this.message = message;
   this.name = "customError";
   this.stack = `${this.name} : ${this.message}`;
} */