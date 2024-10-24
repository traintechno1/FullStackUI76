
// variable declaration, name of the variable is personName currently 
// we have not provided any value to it.

// In JS when we declare a variable and not assign any value to it, it has 
// default value as undefined.
var personName;

personName = "Vaishnavi"; // assignment

// To show the value of that variable we can print it in the console
console.log(personName);

// here along with variable declaration I want it to have a value,
// Variable declaration with assignment
var pName = "Dipika";

pName = 200; //error? No error, as JS variable are of any type
console.log(pName); // ? 200

pName = true;
console.log(pName); // ? true

pName = 212.13;
console.log(pName); // ? 212.13

console.log(pName); // here in log() I am using the value of pName variable
