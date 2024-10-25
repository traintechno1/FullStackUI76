let result;

result = 200 + 500; // assignment -> value on right side gets assigned in left variable
console.log(result);

// left side should always be a variable it can not be a value if you do that.
// like this 123 = 200 + 500; you will get SyntaxError: Invalid left-hand side in assignment


let a = 20;

// a += 200; // ==> a = a + 200

// a -= 100; // a = a - 100;

// a *= 100; // a = a * 100;

// a -= 100; // a = a - 100;


console.log(a); // 120
