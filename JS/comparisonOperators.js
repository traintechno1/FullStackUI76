// console.log("Comparison Operators");

let a = 0;
let b = 10;
let c = '10';
let d = true;
let e = "test";

// comparison operators gives boolean result i.e true / false

// now we want to compare whether value of a is greater than b
let result;

// Greater Than
result = a > b; // here > greater than operator which checks left value is greater than right value
console.log(result); // true

// Less Than
result = a < b; // here < operator checks value of a is less than b
console.log(result); //false

// Not Equal to
result = a != b;
console.log(result); // true

// Equality
result = a == b;
console.log(result); // false

// Greater Than Equal to
result = a >= b;
console.log(result); // true

// Less Than Equal to
result = a <= b;
console.log(result); // true

console.log(c === b);

console.log(e == d);