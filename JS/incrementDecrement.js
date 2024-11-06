let value1 = 10;
let value2 = 20;

// value1 = value1 + 1; 
// to do the same thing their is an operator

// pre increment
// ++value1; // -> value1 = value1 + 1;

// post increment
// value1++; // -> value1 = value1 + 1;

// console.log(value1); //12

// let result = value1++;

// let result = value1-- + ++value1;

// let result = value1-- - value1++ - ++value1;

let result = ++value1 - ++value2 + --value1 - value2++;

// result = 11 - 21 + 10 - 21
// value1 = 10
// value2 = 22

console.log(result, value1, value2);